import { motion } from "motion/react";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const displayProjects = filteredProjects.map(p => 
    p.id === "project-4" ? { ...p, title: "Your Medical Reports" } : p
  );

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl"
          >
            A collection of digital products, design systems, and web experiences crafted with intention and precision.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 mb-12 sticky top-20 z-40 py-4 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {categories.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  filter === cat 
                    ? "bg-white text-zinc-950 border-white" 
                    : "bg-white/[0.02] text-zinc-400 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6">
        <div className="max-w-[1440px] mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {displayProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} variant="card" />
            ))}
          </motion.div>
          
          {displayProjects.length === 0 && (
            <div className="py-20 text-center text-zinc-500">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
