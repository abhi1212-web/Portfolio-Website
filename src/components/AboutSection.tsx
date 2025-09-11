import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, Trophy, Zap } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const AboutSection = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.2 });
  const [contentRef, contentInView] = useInView({ threshold: 0.3 });

  const highlights = [
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Passionate about machine learning, deep learning, and exploring the frontiers of artificial intelligence."
    },
    {
      icon: Code,
      title: "Full-Stack Developer", 
      description: "Building robust applications with modern technologies and best practices in software development."
    },
    {
      icon: Trophy,
      title: "Innovation Focused",
      description: "Dedicated to creating innovative solutions that bridge the gap between cutting-edge technology and real-world applications."
    },
    {
      icon: Zap,
      title: "Problem Solver",
      description: "Love tackling complex problems with creative solutions and efficient algorithms."
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${sectionInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discovering the intersection of technology and innovation
            </p>
          </div>

          <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Personal Story */}
            <div className={`space-y-6 ${contentInView ? 'animate-slide-left' : 'opacity-0'}`}>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground leading-relaxed">
                  Hello! I'm <strong className="text-primary">Abhijeetsingh Bhati</strong>, a passionate B.Tech Computer Science Engineering student 
                  with an insatiable curiosity for artificial intelligence and software development.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  My journey in technology began with a simple "Hello World" program, but it quickly evolved into a 
                  deep fascination with how machines can learn, adapt, and solve complex problems. I spend my time 
                  exploring cutting-edge AI technologies, participating in hackathons, and building projects that 
                  push the boundaries of what's possible.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  When I'm not coding, you'll find me contributing to open-source projects, writing technical blogs, 
                  or brainstorming the next big idea that could change how we interact with technology.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${contentInView ? 'animate-slide-right' : 'opacity-0'}`}>
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <Card 
                    key={index} 
                    className={`card-gradient border-border card-hover transition-all duration-300 ${
                      contentInView ? `animate-scale-in stagger-${index + 1}` : 'opacity-0'
                    }`}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;