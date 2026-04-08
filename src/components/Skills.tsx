import { Card } from "./ui/card";
import { 
  Database, Cloud, Server, Layout, 
  Code2, GitMerge, BarChart, Activity, 
  Box, Network, FileCode2, Repeat, 
  Terminal, Zap, LineChart, Palette,
  Cpu
} from "lucide-react";

const skillCategories = [
  {
    title: "Data Engineering",
    icon: <Database className="w-6 h-6 text-[#2979ff]" />,
    skills: [
      { name: "Python & Pandas", icon: <Code2 className="w-4 h-4" /> },
      { name: "PostgreSQL & SQL", icon: <Database className="w-4 h-4" /> },
      { name: "Apache Airflow", icon: <GitMerge className="w-4 h-4" /> },
      { name: "dbt (Data Build Tool)", icon: <BarChart className="w-4 h-4" /> },
      { name: "Event Streaming", icon: <Activity className="w-4 h-4" /> },
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6 text-[#00e5ff]" />,
    skills: [
      { name: "AWS Cloud Services", icon: <Cloud className="w-4 h-4" /> },
      { name: "Docker Containers", icon: <Box className="w-4 h-4" /> },
      { name: "Kubernetes (K8s)", icon: <Network className="w-4 h-4" /> },
      { name: "Terraform (IaC)", icon: <FileCode2 className="w-4 h-4" /> },
      { name: "CI/CD Pipelines", icon: <Repeat className="w-4 h-4" /> },
    ]
  },
  {
    title: "Backend & APIs",
    icon: <Server className="w-6 h-6 text-[#2979ff]" />,
    skills: [
      { name: "Elixir & OTP", icon: <Zap className="w-4 h-4" /> },
      { name: "Django & Python", icon: <Server className="w-4 h-4" /> },
      { name: "Node.js & Express", icon: <Terminal className="w-4 h-4" /> },
      { name: "FastAPI / REST", icon: <Network className="w-4 h-4" /> },
      { name: "System Architecture", icon: <Cpu className="w-4 h-4" /> },
    ]
  },
  {
    title: "Frontend & Visualization",
    icon: <Layout className="w-6 h-6 text-[#00e5ff]" />,
    skills: [
      { name: "React & TypeScript", icon: <Layout className="w-4 h-4" /> },
      { name: "Tailwind CSS", icon: <Palette className="w-4 h-4" /> },
      { name: "Recharts & D3", icon: <LineChart className="w-4 h-4" /> },
      { name: "shadcn/ui", icon: <Box className="w-4 h-4" /> },
      { name: "Vite Build Tool", icon: <Zap className="w-4 h-4" /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 bg-[#060b18] w-full">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <p className="font-space text-xs tracking-[5px] text-[#6a7fa0] uppercase mb-4">
            System Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white">
            Technical <span className="text-[#00e5ff]">Stack</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-[#0a0f1e] border-[#1e293b] hover:border-[#2979ff]/40 transition-colors duration-300 p-6 shadow-xl rounded-xl group relative overflow-hidden"
            >
              {/* Background Ambient Glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#2979ff]/5 rounded-full blur-3xl group-hover:bg-[#00e5ff]/10 transition-colors duration-500"></div>

              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6 relative z-10 border-b border-[#1e293b] pb-4">
                <div className="p-2 bg-[#0f172a] rounded-lg border border-[#1e293b] group-hover:border-[#2979ff]/30 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[#e8edf5] font-rajdhani">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-3 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className="flex items-center gap-3 text-[#6a7fa0] group-hover:text-[#8b9fc4] transition-colors"
                  >
                    <span className="text-[#2979ff]/70 group-hover:text-[#00e5ff] transition-colors">
                      {skill.icon}
                    </span>
                    <span className="font-medium text-sm">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;