import React from "react";
import { motion } from "motion/react";
import { Project } from "../data/projects";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  key?: React.Key;
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden h-[100svh] w-full"
    >
      {/* Background Image/Block */}
      <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
        <img 
          src={project.image || `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop&sig=${index}`} 
          alt={project.title}
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <h3 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4">
          {project.title}
        </h3>
        
        <span className="text-xs md:text-sm font-mono text-white uppercase tracking-[0.2em] font-medium">
          {project.category}
        </span>
      </div>

      {/* Hidden Link for accessibility/clicking */}
      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
          <span className="sr-only">View Case Study</span>
        </a>
      ) : (
        <Link to={`/portfolio`} className="absolute inset-0 z-10">
          <span className="sr-only">View Case Study</span>
        </Link>
      )}
    </motion.div>
  );
}
