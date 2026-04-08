import { Card } from "./ui/card";
import { Mail, Phone, MapPin, CircleCheck } from "lucide-react";

// Bulletproof Native SVGs to bypass lucide-react module resolution errors
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.38 6.5-1.59 6.5-7.14a5.1 5.1 0 0 0-1.5-3.81 4.7 4.7 0 0 0-.1-3.83s-1.1-.35-3.5 1.36a11.6 11.6 0 0 0-6.3 0C6.5 3.1 5.4 3.45 5.4 3.45a4.7 4.7 0 0 0-.1 3.83 5.1 5.1 0 0 0-1.5 3.81c0 5.55 3.32 6.76 6.5 7.14a4.8 4.8 0 0 0-1 3.03V22" />
    <path d="M9 20c-5 1.5-5-2.5-7-3" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-[#060b18] w-full clear-both">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: About Me Content */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-rajdhani text-white">
              About <span className="text-[#2979ff]">Me</span>
            </h2>
            <p className="text-[#6a7fa0] mb-8 max-w-2xl text-lg border-l-2 border-[#2979ff]/30 pl-4 font-space">
              Passionate about building robust data infrastructure and automating cloud operations.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#e8edf5] font-rajdhani">Data Engineer | DevOps Engineer</h3>
                <div className="space-y-4 text-[#6a7fa0] leading-relaxed">
                  <p>
                    I specialize in designing and implementing scalable data pipelines, orchestrating cloud infrastructure, 
                    and building CI/CD automation that enables teams to deliver value faster and more reliably.
                  </p>
                  <p>
                    With expertise in modern data stack technologies and cloud platforms, I transform raw data into 
                    actionable insights while ensuring infrastructure is secure, scalable, and cost-effective.
                  </p>
                  <p>
                    I leverage DevOps best practices to streamline development workflows, implement infrastructure as code, 
                    and build monitoring solutions that ensure system reliability and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Uniform UI Contact Grid */}
          <div className="lg:col-span-5 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Email Card */}
              <a href="mailto:waweruwilson16@gmail.com" className="group h-full">
                <Card className="bg-[#0f172a]/80 border-[#1e293b] hover:border-[#2979ff]/50 hover:bg-[#0f172a] p-6 transition-all duration-300 h-full backdrop-blur-sm flex flex-col justify-center">
                  <Mail className="w-6 h-6 text-[#00e5ff] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs font-space text-[#4a5a7a] uppercase tracking-widest mb-2">Email</p>
                  <p className="font-medium text-[#e8edf5] break-all group-hover:text-[#2979ff] transition-colors">
                    waweruwilson16@<br />gmail.com
                  </p>
                </Card>
              </a>

              {/* Phone Card */}
              <a href="tel:+254702842584" className="group h-full">
                <Card className="bg-[#0f172a]/80 border-[#1e293b] hover:border-[#2979ff]/50 hover:bg-[#0f172a] p-6 transition-all duration-300 h-full backdrop-blur-sm flex flex-col justify-center">
                  <Phone className="w-6 h-6 text-[#00e5ff] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs font-space text-[#4a5a7a] uppercase tracking-widest mb-2">Phone</p>
                  <p className="font-medium text-[#e8edf5] group-hover:text-[#2979ff] transition-colors">
                    +1(878)2330342
                  </p>
                </Card>
              </a>

              {/* Location Card */}
              <div className="group h-full">
                <Card className="bg-[#0f172a]/80 border-[#1e293b] hover:border-[#2979ff]/30 p-6 transition-all duration-300 h-full backdrop-blur-sm flex flex-col justify-center">
                  <MapPin className="w-6 h-6 text-[#00e5ff] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs font-space text-[#4a5a7a] uppercase tracking-widest mb-2">Location</p>
                  <p className="font-medium text-[#e8edf5]">
                    Available Remote
                  </p>
                </Card>
              </div>

              {/* Status Card */}
              <div className="group h-full">
                <Card className="bg-[#0f172a]/80 border-[#1e293b] hover:border-[#2979ff]/30 p-6 transition-all duration-300 h-full backdrop-blur-sm flex flex-col justify-center">
                  <CircleCheck className="w-6 h-6 text-[#00e5ff] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs font-space text-[#4a5a7a] uppercase tracking-widest mb-2">Status</p>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00e5ff]"></span>
                    </span>
                    <p className="font-medium text-[#e8edf5]">Available</p>
                  </div>
                </Card>
              </div>

            </div>

            {/* Social Links Row */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group">
                <Card className="bg-[#0f172a]/80 border-[#1e293b] hover:border-[#2979ff]/50 hover:bg-[#0f172a] p-4 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                  <GithubIcon className="w-5 h-5 text-[#6a7fa0] group-hover:text-[#e8edf5] transition-colors" />
                  <span className="text-sm font-medium text-[#6a7fa0] group-hover:text-[#e8edf5] transition-colors">GitHub</span>
                </Card>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group">
                <Card className="bg-[#0f172a]/80 border-[#1e293b] hover:border-[#2979ff]/50 hover:bg-[#0f172a] p-4 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                  <LinkedinIcon className="w-5 h-5 text-[#6a7fa0] group-hover:text-[#2979ff] transition-colors" />
                  <span className="text-sm font-medium text-[#6a7fa0] group-hover:text-[#2979ff] transition-colors">LinkedIn</span>
                </Card>
              </a>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;