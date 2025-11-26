import { Card } from "@/components/ui/card";
import { Database, Cloud, GitBranch, Container, Workflow, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Database,
      title: "Data Engineering",
      skills: ["Apache Spark", "Apache Airflow", "Python", "SQL", "ETL Pipelines", "Data Warehousing"],
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: ["AWS (EC2, S3, Lambda)", "Azure", "Google Cloud", "Terraform", "CloudFormation"],
    },
    {
      icon: Container,
      title: "Containerization",
      skills: ["Docker", "Kubernetes", "Docker Compose", "Container Orchestration", "Helm"],
    },
    {
      icon: GitBranch,
      title: "CI/CD & Version Control",
      skills: ["Jenkins", "GitLab CI", "GitHub Actions", "Git", "ArgoCD"],
    },
    {
      icon: Workflow,
      title: "Infrastructure as Code",
      skills: ["Terraform", "Ansible", "Puppet", "CloudFormation", "Pulumi"],
    },
    {
      icon: Server,
      title: "Monitoring & Logging",
      skills: ["Prometheus", "Grafana", "ELK Stack", "DataDog", "CloudWatch"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern data infrastructure and cloud-native applications
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow-effect group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-3 py-1 bg-secondary rounded-full text-sm border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
