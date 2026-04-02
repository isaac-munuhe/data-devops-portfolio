import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Passionate about building robust data infrastructure and automating cloud operations
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Data Engineer | DevOps Engineer</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I specialize in designing and implementing scalable data pipelines, orchestrating cloud infrastructure, 
                and building CI/CD automation that enables teams to deliver value faster and more reliably.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With expertise in modern data stack technologies and cloud platforms, I transform raw data into 
                actionable insights while ensuring infrastructure is secure, scalable, and cost-effective.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I leverage DevOps best practices to streamline development workflows, implement infrastructure as code, 
                and build monitoring solutions that ensure system reliability and performance.
              </p>
            </div>

            <Card className="p-6 bg-card border-primary/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">waweruwilson16@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+(254) 702842584</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Available Remote</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="font-medium text-primary">Available for Projects</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
