import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Layers, 
  Palette, 
  Smartphone, 
  ShieldCheck, 
  Share2, 
  Video, 
  Compass, 
  CheckCircle2, 
  Building2,
  Sparkles,
  Users,
  Code2
} from "lucide-react";

export default function About() {
  const services = [
    {
      title: "UX/UI Design",
      desc: "Creating intuitive web and mobile experiences",
      icon: Smartphone,
    },
    {
      title: "Web & App Design",
      desc: "Translating ideas and requirements into practical digital interfaces",
      icon: Layers,
    },
    {
      title: "Creative & Visual Design",
      desc: "Developing engaging visual communication across digital channels",
      icon: Palette,
    },
    {
      title: "Brand & Logo Design",
      desc: "Establishing clear and recognizable visual identities",
      icon: Sparkles,
    },
    {
      title: "Design QA",
      desc: "Ensuring the implemented product stays consistent with the intended design",
      icon: ShieldCheck,
    },
    {
      title: "Social Media & Promotional Design",
      desc: "Producing campaign and brand communication assets",
      icon: Share2,
    },
    {
      title: "Video & Interactive Content",
      desc: "Creating promotional videos, product explainers, and digital experiences",
      icon: Video,
    },
  ];

  const companies = [
    { 
      step: "01",
      name: "Neomed International", 
      role: "Creative & Design",
      highlight: "Foundational work in creative design, print media, and promotional communication."
    },
    { 
      step: "02",
      name: "Enspirer – The Web Studio", 
      role: "Web & UI Design",
      highlight: "Transition to digital experiences, responsive websites, and user interfaces."
    },
    { 
      step: "03",
      name: "Ceffectz", 
      role: "UI/UX & Product Design",
      highlight: "End-to-end UX/UI design for mobile apps, web applications, and digital products."
    },
    { 
      step: "04",
      name: "Knod Corp", 
      role: "Design & Design QA",
      highlight: "Product design systems, UI engineering alignment, and Design Quality Assurance."
    },
    { 
      step: "05",
      name: "dxdy Digital", 
      role: "Digital & Creative",
      highlight: "Creative direction, multi-channel digital design, and cross-platform experiences."
    },
  ];

  const industries = [
    "Hospitality",
    "Healthcare",
    "Apparel",
    "Finance",
    "Travel",
    "Education",
    "Technology",
    "Retail",
    "Professional Services"
  ];

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-primary/10 blur-[130px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-xs font-mono text-zinc-300">About Me • Shenal De Mel</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white max-w-4xl leading-[1.08] mb-8"
          >
            Designing digital experiences that are <span className="text-primary italic">clear</span>, <span className="text-white">useful</span>, and <span className="text-orange-400">memorable</span>.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-white/10"
          >
            <div className="md:col-span-8 flex flex-col gap-6 text-zinc-300 text-lg md:text-xl leading-relaxed font-light">
              <p>
                I’m <strong className="text-white font-medium">Shenal De Mel</strong>, a UX/UI and Creative Designer based in Sri Lanka, with over 10 years of experience creating digital products and visual experiences across web, mobile, branding, advertising, and interactive media.
              </p>
              <p className="text-zinc-400 text-base md:text-lg">
                My career has taken me through different areas of design—from creative and graphic design to web and mobile interfaces, product experiences, video content, 360° experiences, and design quality assurance. This broad background has shaped the way I approach design today: not simply as something that needs to look good, but as something that needs to work well, communicate clearly, and create value for the people using it.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col justify-center gap-4 bg-white/[0.02] border border-white/5 rounded-2xl p-6">
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-white">10+</span>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">Years of Experience</span>
              </div>
              <div className="w-full h-px bg-white/5 my-1"></div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">Based in Sri Lanka</span>
                <span className="text-xs text-zinc-500 mt-0.5">Available for Worldwide Projects</span>
              </div>
              <div className="w-full h-px bg-white/5 my-1"></div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">UX/UI & Product Strategy</span>
                <span className="text-xs text-zinc-500 mt-0.5">End-to-end design & quality assurance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Background Section */}
      <section className="py-24 px-6 bg-zinc-950 border-y border-white/5 relative">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
          
          {/* Section Header */}
          <div className="flex flex-col gap-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 w-fit text-orange-400 font-mono text-xs">
              Background & Evolution
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              From visual design to digital product experiences.
            </h2>
            <p className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed mt-2">
              I began my career working with print, promotional, and social media design before moving deeper into web design and digital experiences. Over the years, I expanded into UX/UI design for websites and applications, while continuing to work across branding, video, advertising, and digital content.
            </p>
          </div>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Perspective & Philosophy Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28"
            >
              <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col gap-6">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Holistic Lens
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  Looking beyond single touchpoints
                </h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  That journey has given me the ability to look at a product from more than one perspective—considering the user experience, visual language, technical feasibility, brand consistency, and the quality of the final implementation.
                </p>

                {/* 4 Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-white/5">
                    <Users size={16} className="text-primary shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">User Experience</h4>
                      <p className="text-[11px] text-zinc-500">Intuitive flows & clarity</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-white/5">
                    <Palette size={16} className="text-orange-400 shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Visual Language</h4>
                      <p className="text-[11px] text-zinc-500">Cohesive brand systems</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-white/5">
                    <Code2 size={16} className="text-blue-400 shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Technical Feasibility</h4>
                      <p className="text-[11px] text-zinc-500">Smooth developer handoff</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-white/5">
                    <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Design QA</h4>
                      <p className="text-[11px] text-zinc-500">Pixel-accurate execution</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Timeline */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-orange-400 uppercase tracking-wider">Experience Track</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                  Roles & Progression
                </h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  Covering everything from creative design and customer-facing digital work to UI/UX design and Design QA:
                </p>
              </div>

              {/* Connected Timeline Track */}
              <div className="relative pl-6 sm:pl-8 space-y-6 mt-2 before:absolute before:left-2 sm:before:left-3 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-orange-500 before:via-orange-500/30 before:to-zinc-800">
                {companies.map((c, index) => (
                  <motion.div 
                    key={c.name}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="relative group"
                  >
                    {/* Node Dot */}
                    <div className="absolute -left-6 sm:-left-8 top-4 -translate-x-1/2 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full border-2 border-zinc-950 bg-orange-500 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                    </div>

                    {/* Milestone Card */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-white/15 hover:bg-zinc-900/90 transition-all flex flex-col gap-2.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/5">
                            {c.step}
                          </span>
                          <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-primary transition-colors">
                            {c.name}
                          </h4>
                        </div>
                        <span className="text-xs font-mono text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                          {c.role}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed pl-0.5">
                        {c.highlight}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-primary tracking-wider uppercase">Capabilities</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white mt-2">
                What I Do
              </h2>
            </div>
            <p className="text-zinc-400 max-w-xl text-base md:text-lg">
              My work covers a combination of product and creative disciplines, bridging interface craft and strategic intent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white/[0.02] border border-white/5 rounded-2xl p-7 flex flex-col justify-between gap-6 hover:bg-white/[0.04] hover:border-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Industry Experience & Portfolio breadth */}
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Industry Footprint</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                Diverse domain and cross-media versatility
              </h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-4xl">
                Across my career, I’ve contributed to projects for businesses in industries including hospitality, healthcare, apparel, finance, travel, education, technology, retail, and professional services. My portfolio also includes mobile application concepts, commercial websites, 360° walkthrough projects, and video-based digital content.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/5">
              {industries.map((ind) => (
                <span 
                  key={ind} 
                  className="px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My Approach & More Than Just UI */}
      <section className="py-24 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Approach Card */}
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit text-primary font-mono text-xs">
              <Compass size={14} /> My Approach
            </div>
            
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
              Good design happens when business goals, user needs, and technology meet in the right place.
            </h3>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              I like understanding the problem before designing the interface—what the user is trying to accomplish, what the business needs from the product, and what is realistically possible to build. My understanding of technology also helps me communicate effectively with developers and work collaboratively throughout the design and implementation process.
            </p>

            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 mt-2">
              <p className="text-white font-medium text-base md:text-lg italic">
                “The goal is always the same: create an experience that feels simple, intentional, consistent, and easy to use.”
              </p>
            </div>
          </div>

          {/* More Than Just UI Card */}
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 w-fit text-orange-400 font-mono text-xs">
              <CheckCircle2 size={14} /> Beyond the Screen
            </div>

            <h3 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
              More Than Just UI
            </h3>

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
              While UX/UI is at the centre of what I do today, my experience across graphic design, branding, advertising, video editing, web content, customer support, and quality assurance gives me a wider view of the overall customer experience.
            </p>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              It means I can think beyond individual screens and consider how a product looks, behaves, communicates, and represents a brand across different touchpoints.
            </p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              <span className="text-xs font-mono text-zinc-500">Touchpoints:</span>
              {["User Interface", "Brand Identity", "Motion & Video", "Design QA", "Customer Journey"].map((t) => (
                <span key={t} className="text-xs font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-24 px-6">
        <div className="max-w-[1440px] mx-auto bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/10 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 relative z-10">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">Collaborate</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white">
              Let’s Create Something Meaningful.
            </h2>
            <p className="text-zinc-400 text-base md:text-xl leading-relaxed">
              I’m always interested in projects where design can simplify a complex idea, improve an existing experience, or turn a new concept into something people genuinely enjoy using.
            </p>
            <p className="text-white text-lg font-medium">
              Have an idea, product, or experience you want to improve? <br />
              Let’s build something thoughtful together.
            </p>

            <Link
              to="/contact"
              className="mt-4 px-8 py-4 rounded-full bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-all flex items-center gap-3 group"
            >
              <span>Get in touch</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
