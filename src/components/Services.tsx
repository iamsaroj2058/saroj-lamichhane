import {
  Smartphone,
  Globe,
  Palette,
  Code,
  Layers,
  Search,
  Target,
  Rocket,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging user interfaces with a focus on user experience",
      icon: Layers,
      gradient: "from-primary/20 to-accent/10",
    },
    {
      title: "Mobile App Design",
      description:
        "Designing beautiful and functional mobile applications for iOS and Android",
      icon: Smartphone,
      gradient: "from-accent/20 to-secondary/10",
    },
    {
      title: "Website Design",
      description:
        "Crafting responsive and modern website designs that convert visitors",
      icon: Globe,
      gradient: "from-secondary/20 to-primary/10",
    },
    {
      title: "Web Development",
      description:
        "Building robust and scalable web applications with modern technologies",
      icon: Code,
      gradient: "from-primary/20 to-secondary/10",
    },
    {
      title: "Prototyping",
      description:
        "Creating interactive prototypes to validate ideas and test user flows",
      icon: Target,
      gradient: "from-accent/20 to-primary/10",
    },
    {
      title: "UX Research",
      description:
        "Conducting user research to inform design decisions and improve experiences",
      icon: Search,
      gradient: "from-secondary/20 to-accent/10",
    },
    {
      title: "Branding",
      description:
        "Developing cohesive brand identities that resonate with target audiences",
      icon: Palette,
      gradient: "from-primary/20 to-accent/20",
    },
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-4">
            <Rocket className="text-primary" size={20} />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              What I Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Services & Solutions
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive design and development services to bring your digital
            vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="glass-card p-8 rounded-2xl hover-lift glow-effect group transition-all relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/5 transition-all duration-500 rounded-2xl"></div>

                <div className="relative z-10 space-y-4">
                  <div
                    className={`inline-block p-5 bg-gradient-to-br ${service.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      className="text-primary group-hover:text-accent transition-colors"
                      size={40}
                    />
                  </div>
                  <h3 className="font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
