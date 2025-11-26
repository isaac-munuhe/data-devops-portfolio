import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Real-Time Data Pipeline Architecture",
      description: "Designed and implemented a scalable real-time data pipeline processing over 10M events/day using Apache Kafka, Spark Streaming, and AWS infrastructure. Reduced data latency by 80% and improved data reliability to 99.9%.",
      technologies: ["Apache Kafka", "Spark Streaming", "AWS S3", "Python", "Docker"],
      category: "Data Engineering",
    },
    {
      title: "Kubernetes Production Infrastructure",
      description: "Built and maintained production-grade Kubernetes clusters serving 50+ microservices. Implemented auto-scaling, monitoring, and disaster recovery strategies. Achieved 99.95% uptime and reduced deployment time by 70%.",
      technologies: ["Kubernetes", "Docker", "Helm", "Prometheus", "Grafana"],
      category: "DevOps",
    },
    {
      title: "Multi-Cloud ETL Orchestration",
      description: "Developed complex ETL workflows using Apache Airflow to orchestrate data movement across AWS, Azure, and on-premise systems. Automated data quality checks and implemented comprehensive monitoring.",
      technologies: ["Apache Airflow", "Python", "AWS", "Azure", "SQL"],
      category: "Data Engineering",
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Architected end-to-end CI/CD pipelines using Jenkins and GitLab CI, incorporating automated testing, security scanning, and deployment strategies. Reduced deployment failures by 60% and accelerated release cycles.",
      technologies: ["Jenkins", "GitLab CI", "Docker", "Terraform", "Ansible"],
      category: "DevOps",
    },
    {
      title: "Data Lake Implementation",
      description: "Designed and implemented enterprise data lake on AWS using S3, Glue, and Athena. Built data cataloging and governance framework. Enabled self-service analytics for 100+ business users.",
      technologies: ["AWS S3", "AWS Glue", "Apache Spark", "Python", "Terraform"],
      category: "Data Engineering",
    },
    {
      title: "Infrastructure as Code Framework",
      description: "Established comprehensive IaC framework using Terraform and Ansible for multi-cloud deployments. Standardized infrastructure provisioning across development, staging, and production environments.",
      technologies: ["Terraform", "Ansible", "AWS", "Azure", "Python"],
      category: "DevOps",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Key <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Delivering impactful solutions in data engineering and DevOps infrastructure
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow-effect"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold pr-4">{exp.title}</h3>
                  <Badge variant="outline" className="border-primary/50 text-primary shrink-0">
                    {exp.category}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-secondary rounded-full text-xs border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
