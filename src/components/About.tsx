import { Briefcase, GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const experiences = [
    {
      role: "UI/UX Designer",
      company: "Calcgen Solutions",
      period: "Mar 2024 – Present",
      description: "Leading UI/UX design initiatives for client projects",
    },
    {
      role: "Web Developer",
      company: "TechYug",
      period: "Dec 2023 – Feb 2024",
      description: "Developed responsive web applications",
    },
    {
      role: "UX Designer Intern",
      company: "Webpoint Solutions, LLC",
      period: "Jun 2021 – Oct 2021",
      description: "Assisted in user research and interface design",
    },
  ];

  return (
    <section id="about" className="relative section-padding bg-section-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-4">
            <Award className="text-primary" size={20} />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Crafting Digital Excellence
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-in">
            <div className="glass-card p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                I'm a passionate designer exploring UI/UX for the last two
                years, blending creativity with thoughtful problem-solving. I
                enjoy exploring new technologies and understanding how digital
                products work from the inside out.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                With a practical understanding of both frontend and backend
                development, I aim to create experiences that are visually
                engaging and technically sound. My goal is simple — to create
                work that truly satisfies me and delivers meaningful value to
                users.
              </p>
            </div>

            <Card className="glass-card p-8 rounded-2xl border-l-4 border-l-primary glow-effect">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <GraduationCap className="text-primary" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-3 text-foreground">
                    Education
                  </h3>
                  <p className="text-foreground/90 font-medium mb-1">
                    Bachelor of Computer Application (BCA)
                  </p>
                  <p className="text-muted-foreground">
                    8th Semester, Axavier International College, TU University
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent/20 rounded-xl">
                <Briefcase className="text-accent" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-foreground">
                Work Experience
              </h3>
            </div>

            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="glass-card p-6 rounded-2xl hover-lift glow-effect group transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-3">
                  <h4 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h4>
                  <p className="text-accent font-semibold text-lg">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    {exp.period}
                  </p>
                  <div className="w-full h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 my-3"></div>
                  <p className="text-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
