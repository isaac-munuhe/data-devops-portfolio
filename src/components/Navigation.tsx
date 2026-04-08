import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Blog", href: "#blog" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#060b18]/90 backdrop-blur-md border-b border-[#1e293b] py-4 shadow-lg" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, "#home")}
          className="text-2xl font-bold font-rajdhani text-white tracking-wider flex items-center gap-2 group"
        >
          <span className="text-[#2979ff]">{"//"}</span>
          <span className="group-hover:text-[#00e5ff] transition-colors">WWI</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-space text-[#a0aec0] hover:text-[#00e5ff] transition-colors tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
          <Button 
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#2979ff]/10 text-[#2979ff] border border-[#2979ff]/30 hover:bg-[#2979ff] hover:text-white transition-all font-space uppercase text-xs tracking-widest px-6"
          >
            Initiate Contact
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#a0aec0] hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0f1e] border-b border-[#1e293b] shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-space text-[#a0aec0] hover:text-[#00e5ff] transition-colors tracking-wide uppercase py-2 border-b border-[#1e293b]/50"
              >
                {link.name}
              </a>
            ))}
            <Button 
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full bg-[#2979ff]/10 text-[#2979ff] border border-[#2979ff]/30 hover:bg-[#2979ff] hover:text-white transition-all font-space uppercase text-xs tracking-widest mt-4"
            >
              Initiate Contact
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;