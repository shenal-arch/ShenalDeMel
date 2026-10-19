import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Sparkles, Trophy, Utensils } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { caseStudies } from "../data/caseStudies";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const featuredProjects = projects.slice(0, 5);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if autoplay policy needs user interaction
      });
    }
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center overflow-hidden px-6 pt-32 pb-20">
        
        {/* Central Large Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-full z-10 pointer-events-none"
        >
          <div className="w-full h-full flex justify-center items-center relative">
            <video 
              ref={videoRef}
              src="/hero-video-1.mp4" 
              autoPlay
              muted 
              playsInline
              onEnded={(e) => {
                e.currentTarget.pause();
              }}
              className="w-auto h-full object-contain scale-[1.35] origin-center"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)'
              }}
            />
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="max-w-[1440px] mx-auto w-full z-20 flex flex-col md:grid md:grid-cols-12 gap-8 items-center md:items-center justify-between h-full relative">
          
          {/* Left Side: Role */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-6 lg:col-span-5 flex flex-col items-start gap-6 self-start md:self-auto w-full mt-2 md:-mt-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-xs font-mono text-zinc-300">Available for Work</span>
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight text-white leading-[1.05]">
              Designing Digital <br /> Experiences That <br /> Feel Effortless
            </h2>
          </motion.div>

          {/* Spacer for mobile to push the right side below the face */}
          <div className="h-[45vh] md:hidden w-full"></div>

          {/* Right Side: Bio & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9 flex flex-col items-start gap-8 self-end md:self-auto w-full"
          >
            <p className="text-zinc-400 text-lg leading-relaxed bg-zinc-950/40 p-4 rounded-2xl backdrop-blur-sm md:bg-transparent md:p-0 md:rounded-none md:backdrop-blur-none border border-white/5 md:border-none">
              Hi, I’m Shenal. I design modern, intuitive interfaces that blend strategy, creativity, and usability to help brands connect with their audience.
            </p>
            
            <Link
              to="/portfolio"
              className="group px-6 py-3 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500 hover:text-white transition-all flex items-center gap-4 backdrop-blur-md"
            >
              <span className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowRight size={16} className="text-current" />
              </span>
              <span className="font-medium pr-2">See my work</span>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Statement Section */}
      <section className="py-24 md:py-32 bg-[#09090B] text-zinc-950">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display text-[64px] leading-[78px] text-[#e1e1e1] font-bold tracking-tighter max-w-6xl mx-auto text-center"
          >
            I’m a <span className="text-[#8be00b]">Senior UI/UX Designer</span> with a passion for creating intuitive, user-centered digital experiences that solve real problems.
          </motion.h2>
        </div>
      </section>

      {/* About Section - Minimalist */}
      <section id="about" className="py-32 bg-zinc-950 border-y border-white/5 relative">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left: Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <h2 className="font-display text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-bold tracking-tight text-white">
                Design that <br />
                drives <br />
                <span className="text-primary italic font-medium">results.</span>
              </h2>
            </motion.div>

            {/* Right: Text & Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 flex flex-col gap-10 lg:pt-4"
            >
              <div className="flex flex-col gap-8">
                <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed font-light">
                  With a decade of experience in the design industry, I bridge the gap between user needs and business goals through <span className="text-white">user research</span>, <span className="text-white">strategic thinking</span>, and <span className="text-white">visual execution</span>.
                </p>
                <p className="text-zinc-500 text-lg md:text-xl leading-relaxed">
                  I turn complex problems into elegant, accessible, and intuitive digital products — from early wireframes to polished design systems.
                </p>
              </div>

              {/* Minimal Services List */}
              <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-zinc-400 font-mono text-sm tracking-wide uppercase">
                  <span>Product Design</span>
                  <span className="text-zinc-700">/</span>
                  <span>Design Systems</span>
                  <span className="text-zinc-700">/</span>
                  <span>UI/UX Design</span>
                  <span className="text-zinc-700">/</span>
                  <span>User Research</span>
                </div>

                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors whitespace-nowrap"
                >
                  <span>More about me</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pt-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                Selected Work
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl">
                A showcase of recent projects focusing on problem-solving, intuitive interfaces, and premium aesthetics.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                to="/portfolio"
                className="group flex items-center gap-2 text-white font-medium hover:text-primary transition-colors"
              >
                View all projects <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>

          {/* Featured Projects Stack */}
          <div className="flex flex-col w-full">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="w-full relative">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
      </section>

      {/* Featured Case Studies Spotlight */}
      <section className="py-24 px-6 border-t border-white/5 bg-zinc-950/60 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-primary uppercase tracking-wider mb-3">
                <Sparkles size={12} />
                Deep-Dive UX Research
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
                Product Case Studies
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mt-2">
                Detailed breakdowns of complex product systems, multi-role UX architecture, and end-to-end design strategy.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                to="/case-studies"
                className="group flex items-center gap-2 text-white font-medium hover:text-primary transition-colors"
              >
                View all case studies <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                to={`/case-studies#${study.id}`}
                className="group p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between gap-8 relative overflow-hidden"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-primary uppercase tracking-wider flex items-center gap-2">
                      {study.id === "koachhub" ? <Trophy size={14} /> : <Utensils size={14} />}
                      {study.domain}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      CASE STUDY / {study.pageNumber}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-400 line-clamp-3 leading-relaxed">
                    {study.tagline} — {study.overview}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-white font-medium">Scope: {study.scope}</span>
                  <span className="flex items-center gap-1 text-primary group-hover:translate-x-1 transition-transform">
                    Read Case Study <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
