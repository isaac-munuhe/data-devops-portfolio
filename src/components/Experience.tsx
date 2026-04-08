import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { FolderGit2, Activity, Database, Server, CloudCog, Braces } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Real-Time Data Pipeline Architecture",
      description: "Designed and implemented a scalable real-time data pipeline processing high-throughput events using Apache Kafka and AWS infrastructure. Reduced data latency by 80% and improved system reliability to 99.9%.",
      technologies: ["Apache Kafka", "Spark Streaming", "AWS S3", "Python", "Docker"],
      category: "Data Engineering",
      icon: <Database className="w-5 h-5 text-[#00e5ff]" />
    },
    {
      title: "Automated Aggregation Platform Infrastructure",
      description: "Deployed and scaled a full-stack automated aggregation platform. Engineered the containerized architecture for a Django backend and React frontend, implementing automated CI/CD workflows and high-availability database replication.",
      technologies: ["Django", "React", "Docker", "PostgreSQL", "GitHub Actions"],
      category: "DevOps",
      icon: <Server className="w-5 h-5 text-[#2979ff]" />
    },
    {
      title: "Algorithmic Trading Backtesting Engine",
      description: "Architected a high-performance data ingestion and backtesting pipeline for algorithmic trading systems. Integrated MT5 market data streams, allowing rapid validation of complex trading logic and SMC strategies.",
      technologies: ["Python", "Pandas", "MT5 APIs", "Data Pipelines", "SQL"],
      category: "Data Engineering",
      icon: <Activity className="w-5 h-5 text-[#00e5ff]" />
    },
    {
      title: "Multi-Cloud ETL Orchestration",
      description: "Developed complex ETL workflows using Apache Airflow to orchestrate data movement across diverse cloud and on-premise systems. Automated data quality checks and implemented comprehensive monitoring.",
      technologies: ["Apache Airflow", "Python", "AWS", "Azure", "SQL"],
      category: "Data Engineering",
      icon: <CloudCog className="w-5 h-5 text-[#2979ff]" />
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Architected end-to-end CI/CD pipelines incorporating automated testing, security scanning, and deployment strategies. Reduced deployment failures by 60% and significantly accelerated release cycles.",
      technologies: ["Jenkins", "GitLab CI", "Terraform", "Ansible", "Linux"],
      category: "DevOps",
      icon: <FolderGit2 className="w-5 h-5 text-[#00e5ff]" />
    },
    {
      title: "Infrastructure as Code Framework",
      description: "Established a comprehensive IaC framework using Terraform for cloud deployments. Standardized infrastructure provisioning across development, staging, and production environments.",
      technologies: ["Terraform", "AWS", "Ansible", "Bash", "Python"],
      category: "DevOps",
      icon: <Braces className="w-5 h-5 text-[#2979ff]" />
    },
  ];

  return (
    <section id="experience" className="relative py-24 bg-[#060b18] w-full clear-both">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <p className="font-space text-xs tracking-[5px] text-[#6a7fa0] uppercase mb-4">
            System Execution
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white">
            Key <span className="text-[#2979ff]">Projects</span>
          </h2>
          <p className="text-[#6a7fa0] mt-4 max-w-2xl mx-auto font-space text-sm">
            Delivering impactful solutions in data engineering and DevOps infrastructure.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="group relative bg-[#0a0f1e] border-[#1e293b] hover:border-[#2979ff]/50 transition-all duration-500 p-6 sm:p-8 overflow-hidden shadow-xl rounded-xl"
            >
              {/* Ambient Hover Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2979ff]/5 rounded-full blur-3xl group-hover:bg-[#00e5ff]/10 transition-colors duration-700 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#0f172a] border border-[#1e293b] rounded-md group-hover:border-[#2979ff]/40 transition-colors">
                      {exp.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#e8edf5] font-rajdhani leading-tight">
                      {exp.title}
                    </h3>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`shrink-0 font-space text-[10px] tracking-wider uppercase px-3 py-1 bg-[#0f172a] ${
                      exp.category === "DevOps" 
                        ? "text-[#2979ff] border-[#2979ff]/30" 
                        : "text-[#00e5ff] border-[#00e5ff]/30"
                    }`}
                  >
                    {exp.category}
                  </Badge>
                </div>
                
                <p className="text-[#6a7fa0] mb-8 leading-relaxed text-sm md:text-base border-l-2 border-[#1e293b] pl-4 group-hover:border-[#2979ff]/30 transition-colors">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1.5 bg-[#0f172a] text-[#8b9fc4] rounded-md text-xs font-space border border-[#1e293b] group-hover:border-[#2979ff]/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;