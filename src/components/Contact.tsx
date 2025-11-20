import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  MessageSquare,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sarojcal25@gmail.com",
      href: "mailto:sarojcal25@gmail.com",
      gradient: "from-primary/20 to-accent/10",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9865480707",
      href: "tel:+9779865480707",
      gradient: "from-accent/20 to-secondary/10",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sarojlamichhane1",
      href: "https://linkedin.com/in/sarojlamichhane1",
      gradient: "from-secondary/20 to-primary/10",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/iamsaroj2058",
      href: "https://github.com/iamsaroj2058",
      gradient: "from-primary/20 to-accent/10",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-4">
            <MessageSquare className="text-primary" size={20} />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Let's Connect
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to
            bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-in">
            <h3 className="text-3xl font-bold mb-8 text-foreground">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="glass-card p-6 rounded-2xl hover-lift glow-effect group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4"
                    >
                      <div
                        className={`p-4 bg-gradient-to-br ${info.gradient} rounded-xl group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="text-primary" size={28} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">
                          {info.label}
                        </p>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="glass-card p-8 md:p-10 rounded-2xl animate-fade-in glow-effect">
            <h3 className="text-3xl font-bold mb-8 text-foreground">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="glass-card border-primary/30 bg-background/50 focus:border-primary h-14 text-lg"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="glass-card border-primary/30 bg-background/50 focus:border-primary h-14 text-lg"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="glass-card border-primary/30 bg-background/50 focus:border-primary min-h-[180px] text-lg"
              />
              <Button
                type="submit"
                className="w-full gradient-primary text-white font-semibold h-14 text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 glow-effect"
                size="lg"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
