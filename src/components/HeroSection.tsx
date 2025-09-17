import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-5" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Content */}
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Hi, I'm <span className="text-primary animate-pulse-glow">Abhijeet</span> – 
              <br />
              <span className="text-shimmer">
                AI & Coding Enthusiast
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-up stagger-1">
              B.Tech CSE student passionate about Artificial Intelligence, competitive coding, 
              and hackathons. Building the future one line of code at a time.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up stagger-2">
            {/* ✅ Scroll to Projects */}
            <Button 
              size="lg" 
              className="button-gradient hover-lift hover-glow text-lg px-8 py-6 rounded-xl font-semibold animate-pulse-glow"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>

            {/* ✅ Resume download */}
            <a 
              href="/AbhijeetSingh_Resume.pdf" 
              download 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 rounded-xl font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift hover-scale"
              >
                Download Resume
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-16 animate-fade-up stagger-3">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift hover-rotate"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift hover-rotate"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:bhatiyash267@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift hover-rotate"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-float">
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
