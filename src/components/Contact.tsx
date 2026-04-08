import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In the future, this is where you'd trigger a serverless API call to send the email
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    // Reset the success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "waweruwilson16@gmail.com",
      href: "mailto:waweruwilson16@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1(878) 2330342",
      href: "tel:+1(878)2330342",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available for Remote Work",
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-[#060b18] w-full clear-both">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 md:mb-20 text-center">
            <p className="font-space text-xs tracking-[5px] text-[#6a7fa0] uppercase mb-4">
              Commence Uplink
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white">
              Get In <span className="text-[#00e5ff]">Touch</span>
            </h2>
            <p className="text-[#6a7fa0] mt-4 max-w-2xl mx-auto font-space text-sm">
              Let's discuss how I can help with your data infrastructure and DevOps needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Left Column: Contact Information */}
            <div className="space-y-6">
              <Card className="p-8 bg-[#0a0f1e] border-[#1e293b] shadow-xl rounded-xl">
                <h3 className="text-2xl font-bold mb-8 text-[#e8edf5] font-rajdhani border-b border-[#1e293b] pb-4">Contact Information</h3>
                <div className="space-y-8">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="p-3 rounded-lg bg-[#0f172a] border border-[#1e293b] text-[#2979ff] group-hover:border-[#2979ff]/40 transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-space text-[#4a5a7a] uppercase tracking-widest mb-1">{info.label}</p>
                          {info.href ? (
                            <a 
                              href={info.href} 
                              className="font-medium text-[#e8edf5] hover:text-[#00e5ff] transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-medium text-[#e8edf5]">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              <Card className="p-8 bg-[#0a0f1e] border-[#1e293b] shadow-xl rounded-xl">
                <h3 className="text-xl font-bold mb-6 text-[#e8edf5] font-rajdhani">Available For</h3>
                <ul className="space-y-3 text-[#6a7fa0] font-space text-sm">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
                    Data Pipeline Development
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
                    Cloud Infrastructure Design
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
                    CI/CD Implementation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
                    DevOps Consulting
                  </li>
                </ul>
              </Card>
            </div>

            {/* Right Column: Contact Form */}
            <Card className="p-8 bg-[#0a0f1e] border-[#1e293b] shadow-xl rounded-xl relative overflow-hidden">
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2979ff]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="text-2xl font-bold mb-8 text-[#e8edf5] font-rajdhani border-b border-[#1e293b] pb-4 relative z-10">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-64 text-center animate-in fade-in duration-500 relative z-10">
                  <CheckCircle2 className="w-16 h-16 text-[#00e5ff] mb-4" />
                  <h4 className="text-xl font-bold text-[#e8edf5] font-rajdhani mb-2">Message Transmitted</h4>
                  <p className="text-[#6a7fa0] font-space text-sm">Thank you for reaching out. I will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div>
                    <label htmlFor="name" className="block text-xs font-space text-[#6a7fa0] uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-[#0f172a] border border-[#1e293b] text-[#e8edf5] focus:border-[#2979ff] focus:ring-1 focus:ring-[#2979ff] outline-none rounded-md px-4 py-3 transition-all font-sans"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-space text-[#6a7fa0] uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-[#0f172a] border border-[#1e293b] text-[#e8edf5] focus:border-[#2979ff] focus:ring-1 focus:ring-[#2979ff] outline-none rounded-md px-4 py-3 transition-all font-sans"
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-space text-[#6a7fa0] uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full bg-[#0f172a] border border-[#1e293b] text-[#e8edf5] focus:border-[#2979ff] focus:ring-1 focus:ring-[#2979ff] outline-none rounded-md px-4 py-3 transition-all font-sans resize-none"
                      placeholder="Tell me about your project requirements..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-[#2979ff] text-white hover:bg-[#1565ff] transition-colors shadow-[0_0_15px_rgba(41,121,255,0.2)] font-rajdhani font-bold text-lg tracking-wide mt-2">
                    INITIATE CONTACT
                  </Button>
                </form>
              )}
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;