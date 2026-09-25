import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X, ArrowUpRight, Github, Linkedin, Dribbble, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change and scroll to top
  useEffect(() => {
    setIsMobileMenuOpen(false);
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-white/5" : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-xl font-display font-bold tracking-tight uppercase">
            SHENAL<span className="text-primary">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.path.startsWith("/#") ? (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-zinc-900 border-b border-white/5 py-4">
            <nav className="flex flex-col px-6 gap-4">
              {navLinks.map((link) => (
                link.path.startsWith("/#") ? (
                  <a
                    key={link.name}
                    href={link.path}
                    className="text-lg font-medium text-zinc-400 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-lg font-medium ${
                      location.pathname === link.path ? "text-white" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-white/5 py-12 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-2xl font-display font-bold tracking-tight uppercase">
              SHENAL<span className="text-primary">.</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              A Senior UI/UX Designer crafting premium digital experiences with a focus on usability and aesthetics.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display font-medium text-white">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-zinc-400 hover:text-primary transition-colors w-fit">Home</Link>
              <Link to="/portfolio" className="text-sm text-zinc-400 hover:text-primary transition-colors w-fit">Portfolio</Link>
              <Link to="/about" className="text-sm text-zinc-400 hover:text-primary transition-colors w-fit">About</Link>
              <Link to="/contact" className="text-sm text-zinc-400 hover:text-primary transition-colors w-fit">Contact</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display font-medium text-white">Contact</h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:shenalrdemel@gmail.com" className="text-sm text-zinc-400 hover:text-primary transition-colors flex items-center gap-1 w-fit">
                shenalrdemel@gmail.com <ArrowUpRight size={14} />
              </a>
              <span className="text-sm text-zinc-500">Sri Lanka</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display font-medium text-white">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Dribbble size={20} /></a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Github size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Shenal Designer. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-zinc-500">
            <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
