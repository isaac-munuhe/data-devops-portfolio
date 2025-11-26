import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable Data Pipelines with Apache Airflow",
      excerpt: "Learn how to design and implement robust ETL workflows that can handle millions of records efficiently using Apache Airflow and best practices.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Data Engineering",
      tags: ["Apache Airflow", "ETL", "Python", "AWS"],
    },
    {
      title: "Kubernetes Best Practices for Production Deployments",
      excerpt: "A comprehensive guide to deploying and managing containerized applications in Kubernetes with focus on security, scalability, and reliability.",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "DevOps",
      tags: ["Kubernetes", "Docker", "Cloud Native", "DevOps"],
    },
    {
      title: "Infrastructure as Code: Terraform vs CloudFormation",
      excerpt: "An in-depth comparison of popular IaC tools, exploring their strengths, use cases, and how to choose the right one for your infrastructure needs.",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "DevOps",
      tags: ["Terraform", "CloudFormation", "IaC", "AWS"],
    },
    {
      title: "Real-Time Data Processing with Apache Kafka",
      excerpt: "Discover how to build event-driven architectures and process streaming data at scale using Apache Kafka and microservices patterns.",
      date: "February 28, 2024",
      readTime: "15 min read",
      category: "Data Engineering",
      tags: ["Apache Kafka", "Streaming", "Real-Time", "Microservices"],
    },
    {
      title: "Monitoring and Observability in Distributed Systems",
      excerpt: "Essential strategies for implementing comprehensive monitoring, logging, and tracing in modern distributed applications using Prometheus and Grafana.",
      date: "February 20, 2024",
      readTime: "9 min read",
      category: "DevOps",
      tags: ["Monitoring", "Prometheus", "Grafana", "Observability"],
    },
    {
      title: "Data Lake Architecture: From Design to Implementation",
      excerpt: "Step-by-step guide to designing and building enterprise data lakes on AWS, including data governance, security, and performance optimization.",
      date: "February 15, 2024",
      readTime: "14 min read",
      category: "Data Engineering",
      tags: ["Data Lake", "AWS S3", "Data Architecture", "Big Data"],
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Latest <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Insights and tutorials on data engineering, DevOps practices, and cloud infrastructure
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow-effect group cursor-pointer"
              >
                <div className="mb-4">
                  <Badge variant="outline" className="border-primary/50 text-primary mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-1 bg-secondary rounded text-xs border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
