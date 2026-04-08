---
title: "Shaving Minutes Off CI/CD: Docker Layer Caching"
description: "Stop rebuilding what hasn't changed. How to optimize your Dockerfiles for faster pipeline executions."
date: 2026-04-01
readTime: "3 min read"
category: "CI/CD"
tags: ["Docker", "Pipelines", "Performance"]
---

If your CI/CD pipeline takes ten minutes to build a simple web application, you are doing it wrong. The most common culprit I see when auditing slow pipelines is a poorly optimized `Dockerfile` that ignores layer caching.

Docker builds images in layers. Each instruction (`RUN`, `COPY`, `ADD`) creates a new layer. If a layer hasn't changed, Docker uses a cached version. If a layer *has* changed, Docker invalidates that layer and **every single layer after it**.

### The Wrong Way
Look at this Dockerfile:

` ` `dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
` ` `

Because `COPY . .` copies everything (including your source code) before running `npm install`, any time you change a single line of CSS, Docker invalidates the cache and re-downloads every single npm package.

### The Right Way
You need to copy your dependency files first, install the dependencies, and *then* copy your source code.

` ` `dockerfile
FROM node:18-alpine
WORKDIR /app

# Copy ONLY the package files first
COPY package.json package-lock.json ./

# Install dependencies. This layer caches heavily!
RUN npm install

# Now copy the rest of the application code
COPY . .

CMD ["npm", "start"]
` ` `

With this setup, changing your source code only invalidates the final `COPY . .` layer. Your `npm install` layer remains safely cached, dropping your build time from minutes to seconds.