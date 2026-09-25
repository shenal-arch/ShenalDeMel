import { motion } from "motion/react";
import { Mail, MapPin, Send, ArrowUpRight, Github, Linkedin, Dribbble, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-[1440px] mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-mono text-zinc-300">Accepting new projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
          >
            Let's build something <br className="hidden md:block"/>
            <span className="text-primary">extraordinary.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Looking to redesign your product or start a new project from scratch? Fill out the form below or reach out directly via email.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* Contact Details Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-2 flex flex-col gap-8"
            >
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col gap-8 h-full">
                <h3 className="font-display text-2xl font-medium text-white">Contact Information</h3>
                
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 mb-1">Email</p>
                      <a href="mailto:shenalrdemel@gmail.com" className="text-white hover:text-primary transition-colors">
                        shenalrdemel@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 mb-1">Location</p>
                      <p className="text-white">Sri Lanka</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-white/5">
                  <p className="text-sm text-zinc-500 mb-4">Connect with me</p>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"><Linkedin size={18} /></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"><Dribbble size={18} /></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"><Instagram size={18} /></a>
                    <a href="https://github.com/shenal-arch/ShenalDeMel" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"><Github size={18} /></a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <form className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-400">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Jane Doe"
                      className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-600"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="jane@example.com"
                      className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-zinc-400">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    placeholder="Project Inquiry"
                    className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-600"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
                  <textarea 
                    id="message" 
                    rows={6}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-600 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="mt-2 w-full sm:w-auto self-start px-8 py-4 rounded-full bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group"
                >
                  Send Message <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
