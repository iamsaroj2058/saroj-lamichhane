import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import rockTechImage from "@/assets/project-rocktech.jpg";
import eiaImage from "@/assets/project-eia.jpg";
import icanImage from "@/assets/project-ican.jpg";
import bodhiImage from "@/assets/project-bodhi.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "ROCK TECH SHOP APP",
      description:
        "Complete UI/UX design and frontend development for an e-commerce mobile application. Features intuitive product browsing, cart management, and seamless checkout experience.",
      image: rockTechImage,
      tags: ["UI/UX Design", "Frontend", "Mobile App"],
      type: "Mobile",
      featured: true,
    },
    {
      title: "EIA",
      description:
        "Web application UI/UX design with functional frontend integration. Enterprise-level dashboard with data visualization and comprehensive user management.",
      image: eiaImage,
      tags: ["UI/UX Design", "Web App", "Dashboard"],
      type: "Web",
      featured: true,
    },
    {
      title: "ICAN MOBILE APP",
      description:
        "Mobile app UI/UX and prototyping for a mindfulness and meditation platform. Focus on calming aesthetics and user-friendly navigation.",
      image: icanImage,
      tags: ["UI/UX Design", "Prototyping", "Mobile"],
      type: "Mobile",
      featured: false,
    },
    {
      title: "BODHI TREE",
      description:
        "Travel package booking system UI/UX design and frontend development. Features destination browsing, package comparison, and booking flow.",
      image: bodhiImage,
      tags: ["UI/UX Design", "Frontend", "Travel"],
      type: "Web",
      featured: false,
    },
  ];

  return (
    <section
      id="portfolio"
      className="section-padding bg-section-bg relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-4">
            <Star className="text-primary" size={20} />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              My Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing design thinking and
            technical execution
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card overflow-hidden hover-lift glow-effect group transition-all rounded-2xl"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Overlay content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0">
                      {project.type}
                    </Badge>
                    {project.featured && (
                      <Badge className="bg-accent/90 text-white border-0">
                        <Star size={14} className="mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <h3 className="font-bold text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="glass-card border border-primary/20 text-foreground/80 hover:border-primary/40 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
