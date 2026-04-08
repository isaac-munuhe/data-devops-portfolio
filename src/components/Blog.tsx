import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id?: string; 
  slug?: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

interface BlogProps {
  posts: BlogPost[];
}

const Blog = ({ posts = [] }: BlogProps) => {
  return (
    <section id="blog" className="relative py-24 bg-[#060b18] w-full clear-both">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="mb-16 md:mb-20 text-center">
          <p className="font-space text-xs tracking-[5px] text-[#6a7fa0] uppercase mb-4">
            Knowledge Base
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white">
            Latest <span className="text-[#00e5ff]">Articles</span>
          </h2>
          <p className="text-[#6a7fa0] mt-4 max-w-2xl mx-auto font-space text-sm">
            Insights and architecture breakdowns on data engineering and cloud operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length === 0 ? (
            <div className="col-span-full text-center text-[#6a7fa0] font-space py-12 border border-[#1e293b] border-dashed rounded-xl">
              No transmission logs found. System awaits new data entries.
            </div>
          ) : (
            posts.map((post, index) => {
              // Defensive fallback: grab id or slug, fallback to index to prevent crash
              const linkTarget = post.id || post.slug || `post-${index}`;
              
              return (
                <Card 
                  key={linkTarget} 
                  className="group flex flex-col bg-[#0a0f1e] border-[#1e293b] hover:border-[#00e5ff]/50 transition-all duration-500 p-6 shadow-xl rounded-xl"
                >
                  <div className="mb-6">
                    <Badge 
                      variant="outline" 
                      className="font-space text-[10px] tracking-wider uppercase px-3 py-1 bg-[#0f172a] text-[#00e5ff] border-[#00e5ff]/30 mb-4"
                    >
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-[#e8edf5] font-rajdhani leading-tight mb-3 group-hover:text-[#00e5ff] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#6a7fa0] text-sm leading-relaxed line-clamp-3 font-sans">
                      {post.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-[#1e293b]">
                    <div className="flex items-center gap-4 text-[#4a5a7a] text-xs font-space mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-2 py-1 bg-[#0f172a] text-[#8b9fc4] rounded text-[10px] font-space border border-[#1e293b]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={`/blog/${linkTarget}`}
                      className="inline-flex items-center gap-2 text-sm font-bold font-rajdhani tracking-wider text-[#2979ff] group-hover:text-[#00e5ff] transition-colors uppercase"
                    >
                      Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </Card>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};

export default Blog;