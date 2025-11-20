import { Code, Figma, Smartphone, Globe, Layers, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    { name: "UI/UX Design", icon: Layers, level: 90, color: "primary" },
    { name: "Figma", icon: Figma, level: 95, color: "accent" },
    { name: "Wireframing", icon: Layers, level: 85, color: "secondary" },
    { name: "Prototyping", icon: Smartphone, level: 90, color: "primary" },
    { name: "Frontend Development", icon: Code, level: 80, color: "accent" },
    { name: "Backend Development", icon: Globe, level: 70, color: "secondary" },
  ];

  return (
    <section
      id="skills"
      className="relative section-padding bg-section-bg overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-4">
            <Zap className="text-primary" size={20} />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Mastery
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="glass-card p-8 rounded-2xl hover-lift glow-effect group transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl group-hover:scale-110 transition-transform">
                      <Icon className={`text-${skill.color}`} size={32} />
                    </div>
                    <h3 className="font-bold text-xl text-foreground flex-1">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Proficiency
                      </span>
                      <span className="text-sm font-bold text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-3 bg-muted/30 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          boxShadow: `0 0 20px hsl(var(--glow-primary) / 0.5)`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
