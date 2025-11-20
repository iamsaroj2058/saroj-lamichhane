import { ArrowDown, Code, Palette, Layers, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 section-padding overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full">
              <Sparkles className="text-primary" size={20} />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                UI/UX Designer & Developer
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text block mt-2">Saroj Lamichhane</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Crafting{" "}
              <span className="text-primary font-semibold">
                stunning digital experiences
              </span>{" "}
              through thoughtful design and clean code
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button
                onClick={scrollToPortfolio}
                size="lg"
                className="gradient-primary text-white font-semibold px-8 py-6 text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 glow-effect"
              >
                Explore My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="glass-card border-primary/30 text-foreground px-8 py-6 text-lg hover:border-primary hover:bg-primary/10"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <div className="relative w-full max-w-md aspect-square">
              {/* Rotating border effect */}
              <div className="absolute inset-0 gradient-primary rounded-3xl blur-2xl opacity-40 animate-pulse-glow"></div>

              {/* Main card */}
              <div className="relative w-full h-full glass-card rounded-3xl p-8 flex items-center justify-center animate-float">
                <div className="grid grid-cols-3 gap-6 w-full">
                  {/* Top icon - centered */}
                  <div className="col-span-3 flex justify-center mb-2">
                    <div className="p-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl hover:scale-110 transition-transform duration-300 glow-effect">
                      <Code className="text-primary" size={56} />
                    </div>
                  </div>

                  {/* Bottom three icons */}
                  <div
                    className="p-4 bg-gradient-to-br from-accent/20 to-primary/10 rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <Palette className="text-accent" size={40} />
                  </div>
                  <div
                    className="p-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 animate-fade-in"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <Layers className="text-primary" size={40} />
                  </div>
                  <div
                    className="p-4 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/50 animate-fade-in"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <Code className="text-secondary" size={40} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20 animate-bounce">
          <div className="glass-card p-3 rounded-full">
            <ArrowDown className="text-primary" size={28} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
