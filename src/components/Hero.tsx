import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Stars
    const stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    // Nebula particles
    const nebulae: { x: number; y: number; radius: number; color: string; speed: number }[] = [];
    const colors = ["rgba(59, 130, 246, 0.03)", "rgba(147, 51, 234, 0.02)", "rgba(6, 182, 212, 0.03)"];
    for (let i = 0; i < 8; i++) {
      nebulae.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 300 + 150,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.2 + 0.05,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.fillStyle = "rgba(3, 7, 18, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw nebulae
      nebulae.forEach((nebula) => {
        const gradient = ctx.createRadialGradient(
          nebula.x, nebula.y, 0,
          nebula.x, nebula.y, nebula.radius
        );
        gradient.addColorStop(0, nebula.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        nebula.x += nebula.speed;
        nebula.y += nebula.speed * 0.5;
        if (nebula.x > canvas.width + nebula.radius) nebula.x = -nebula.radius;
        if (nebula.y > canvas.height + nebula.radius) nebula.y = -nebula.radius;
      });

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * (0.5 + Math.sin(Date.now() * 0.001 + star.x) * 0.5)})`;
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Galaxy Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-background/30 to-background" />

      {/* Animated Glow Elements */}
      <div className="absolute inset-0 z-[2]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
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
