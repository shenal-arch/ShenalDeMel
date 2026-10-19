import React from "react";
import { motion } from "motion/react";
import { Project } from "../data/projects";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  key?: React.Key;
  project: Project;
  index: number;
  variant?: "fullscreen" | "card";
}

export default function ProjectCard({ project, index, variant = "fullscreen" }: ProjectCardProps) {
  const isCard = variant === "card";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
      className={`group relative overflow-hidden w-full ${
        isCard
          ? "aspect-[4/3] sm:aspect-[16/11] rounded-3xl border border-white/10 hover:border-primary/50 transition-all duration-500 bg-zinc-900"
          : "h-[100svh]"
      }`}
    >
      {/* Background Image/Block */}
      <div className="absolute inset-0 bg-zinc-950 overflow-hidden">
        <img 
          src={project.image || `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop&sig=${index}`} 
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className={`absolute inset-0 ${isCard ? "bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-85 group-hover:opacity-60 transition-opacity duration-500" : "bg-black/30 mix-blend-multiply"}`}></div>
      </div>

      {/* Content */}
      <div className={`absolute inset-0 flex flex-col justify-end p-6 sm:p-8 ${isCard ? "text-left" : "items-center justify-center text-center"}`}>
        {isCard && (
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className={`font-display font-bold tracking-tight text-white mb-1.5 group-hover:text-primary transition-colors ${
          isCard ? "text-2xl sm:text-3xl" : "text-4xl md:text-5xl lg:text-7xl mb-4"
        }`}>
          {project.title}
        </h3>
        
        <span className={`font-mono text-zinc-400 uppercase font-medium ${
          isCard ? "text-xs tracking-wider" : "text-xs md:text-sm text-white tracking-[0.2em]"
        }`}>
          {project.category}
        </span>
      </div>

      {/* Navigation Link */}
      {project.link?.startsWith("/") ? (
        <Link to={project.link} className="absolute inset-0 z-10">
          <span className="sr-only">View {project.title}</span>
        </Link>
      ) : project.link && project.link !== "#" ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
          <span className="sr-only">View {project.title}</span>
        </a>
      ) : (
        <div className="absolute inset-0 z-10"></div>
      )}
    </motion.div>
  );
}
