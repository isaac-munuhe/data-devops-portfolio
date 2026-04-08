import { Button } from "./ui/button";
import * as Lucide from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle Network Animation Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Set initial dimensions and recalculate on resize
    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > window.innerWidth) this.vx = -this.vx;
        if (this.y < 0 || this.y > window.innerHeight) this.vy = -this.vy;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56, 189, 248, 0.6)";
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      // Adjust density based on screen size
      const numberOfParticles = Math.floor((window.innerWidth * window.innerHeight) / 12000);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    const animate = () => {
      ctx.fillStyle = "rgba(6, 11, 24, 1)"; // Deep navy background to match standard UI
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Draw connecting lines if particles are close
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.8 - distance / 150})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#060b18]">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="container mx-auto px-6 z-10 relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12">
        
        {/* Left Column: Rich Copy & Terminal */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="font-space text-xs md:text-sm tracking-[4px] text-[#00e5ff] uppercase mb-4 pl-1">
            Wilson W Isaac — Data & DevOps Engineer
          </p>
          
          <h1 className="font-rajdhani text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6">
            Architecting <span className="text-[#2979ff]">Data</span> &<br />
            Automating <span className="text-[#4a5a7a]">Scale.</span>
          </h1>

          <p className="text-[#a0aec0] text-lg md:text-xl font-space leading-relaxed mb-8 max-w-2xl border-l-2 border-[#2979ff]/30 pl-4">
            Specializing in high-throughput event streaming, multi-cloud infrastructure orchestration, and high-performance algorithmic backend systems.
          </p>

          {/* Terminal UI Block */}
          <div className="bg-[#0a0f1e]/90 backdrop-blur-sm border border-[#1e293b] rounded-lg p-5 font-space text-xs md:text-sm text-[#8b9fc4] shadow-2xl max-w-xl mb-10">
            <div className="flex gap-2 mb-4 border-b border-[#1e293b] pb-3">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="space-y-2">
              <p><span className="text-[#00e5ff] font-bold">~</span> $ ./deploy_infrastructure.sh --env=production</p>
              <p className="text-[#27c93f]">✓ Initializing Terraform state backends...</p>
              <p className="text-[#27c93f]">✓ Provisioning AWS EKS cluster & node groups...</p>
              <p className="text-[#27c93f]">✓ Deploying Apache Kafka event stream...</p>
              <p className="text-[#2979ff] mt-2 animate-pulse">_ System architecture optimized and listening on port 443.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => scrollToSection("contact")} 
              size="lg" 
              className="bg-[#2979ff] text-white hover:bg-[#1565ff] transition-all duration-300 shadow-[0_0_20px_rgba(41,121,255,0.3)] hover:shadow-[0_0_25px_rgba(41,121,255,0.5)] font-rajdhani font-bold tracking-wider text-base"
            >
              INITIATE CONTACT
            </Button>
            <Button 
              onClick={() => scrollToSection("experience")} 
              variant="outline" 
              size="lg" 
              className="border-[#1e293b] bg-[#0a0f1e]/50 text-[#e8edf5] hover:bg-[#2979ff]/10 hover:border-[#2979ff]/50 hover:text-white transition-all duration-300 font-rajdhani font-bold tracking-wider text-base backdrop-blur-sm"
            >
              VIEW ARCHITECTURE
            </Button>
          </div>
        </div>

        {/* Right Column: Hex Badge Animation */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center opacity-80 hover:opacity-100 transition-opacity duration-500">
          <div className="relative w-[280px] h-[320px] md:w-[350px] md:h-[400px] drop-shadow-[0_0_25px_rgba(41,121,255,0.15)]">
            <style>{`
              @keyframes dash {
                to { stroke-dashoffset: 0; }
              }
              @keyframes nodePulse {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.4; transform: scale(0.8); }
              }
              @keyframes rise {
                from { transform: scaleY(0); opacity: 0; }
                to { transform: scaleY(1); opacity: 1; }
              }
              .hex-outer {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation: dash 2.5s ease-in-out forwards;
              }
              .hex-inner {
                stroke-dasharray: 800;
                stroke-dashoffset: 800;
                animation: dash 2.5s ease-in-out 0.3s forwards;
              }
              .bar {
                transform-origin: bottom center;
                animation: rise 1s cubic-bezier(0.22,1,0.36,1) forwards;
              }
              .bar1 { animation-delay: 1.2s; }
              .bar2 { animation-delay: 1.4s; }
              .bar3 { animation-delay: 1.6s; }
              .node { animation: nodePulse 3s infinite ease-in-out; }
              .n1 { animation-delay: 0s; }
              .n2 { animation-delay: 0.5s; }
              .n3 { animation-delay: 1s; }
              .n4 { animation-delay: 1.5s; }
              .n5 { animation-delay: 2s; }
              .n6 { animation-delay: 2.5s; }
            `}</style>
            
            <svg viewBox="0 0 160 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
              {/* Outer Hexagon */}
              <polygon className="hex-outer" points="80,8 148,46 148,122 80,160 12,122 12,46" fill="rgba(10, 15, 30, 0.8)" stroke="#2979ff" strokeWidth="1.5"/>
              
              {/* Inner Hexagon */}
              <polygon className="hex-inner" points="80,28 128,55 128,110 80,137 32,110 32,55" fill="none" stroke="#00e5ff" strokeWidth="0.8" opacity="0.6"/>
              
              {/* Data Bars */}
              <rect className="bar bar1 opacity-0" x="50" y="95" width="14" height="30" rx="2" fill="#2979ff"/>
              <rect className="bar bar2 opacity-0" x="73" y="75" width="14" height="50" rx="2" fill="#1565ff"/>
              <rect className="bar bar3 opacity-0" x="96" y="85" width="14" height="40" rx="2" fill="#00e5ff"/>

              {/* Connecting Traces */}
              <path d="M80,8 L80,-20 M148,46 L170,30 M12,46 L-10,30" stroke="#2979ff" strokeWidth="1" opacity="0.3" fill="none"/>
              <circle cx="80" cy="-20" r="2" fill="#2979ff" opacity="0.5"/>
              <circle cx="170" cy="30" r="2" fill="#2979ff" opacity="0.5"/>
              <circle cx="-10" cy="30" r="2" fill="#2979ff" opacity="0.5"/>

              {/* Pulsing Nodes */}
              <circle className="node n1" cx="80" cy="8" r="4" fill="#2979ff"/>
              <circle className="node n2" cx="148" cy="46" r="3.5" fill="#00e5ff"/>
              <circle className="node n3" cx="148" cy="122" r="3.5" fill="#00e5ff"/>
              <circle className="node n4" cx="80" cy="160" r="4" fill="#2979ff"/>
              <circle className="node n5" cx="12" cy="122" r="3.5" fill="#00e5ff"/>
              <circle className="node n6" cx="12" cy="46" r="3.5" fill="#00e5ff"/>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;