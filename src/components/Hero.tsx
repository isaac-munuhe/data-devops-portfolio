import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 z-10" />
        <img src={heroBg} alt="Hero background" className="w-full h-full object-cover opacity-40" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-float">
            <span className="inline-block px-4 py-2 bg-secondary border border-border rounded-full text-sm font-medium text-primary">
              Data Engineer | DevOps Engineer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">Wilson W Isaac</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building scalable data pipelines and cloud infrastructure that powers intelligent decision-making
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button onClick={() => scrollToSection("contact")} size="lg" className="gradient-primary hover:opacity-90 transition-opacity glow-effect">
              Get In Touch
            </Button>
            <Button onClick={() => scrollToSection("experience")} variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
              View My Work
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="mailto:waweruwilson16@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
