import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/useInView";

const SkillsSection = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.2 });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java","REACT","HTML","CSS"]
    },
    {
      title: "Ongoing Learning On AI/ML Technologies",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "Hugging Face"]
    },
    {
      title: "Web Development",
      skills: ["React", "Next.js", "Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB"]
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${sectionInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building intelligent solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className={`card-gradient border-border card-hover transition-all duration-300 ${
                  cardsInView ? `animate-scale-in stagger-${(index % 6) + 1}` : 'opacity-0'
                }`}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className={`bg-skill-bg text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover-scale ${
                          cardsInView ? `animate-fade-up` : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className={`mt-16 text-center ${cardsInView ? 'animate-fade-up stagger-6' : 'opacity-0'}`}>
            <Card className="card-gradient border-border inline-block hover-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Always Learning
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Technology evolves rapidly, and so do I. Currently exploring <span className="text-primary font-semibold">LLMs</span>, 
                  <span className="text-primary font-semibold"> Blockchain</span>, and <span className="text-primary font-semibold">Quantum Computing</span>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;