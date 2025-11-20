import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-section-bg border-t border-primary/10 py-12">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">© {currentYear} <span className="font-semibold text-primary">Saroj Lamichhane</span>. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {/* <span>Made with</span> <Heart size={16} className="text-accent fill-accent animate-pulse" /> <span>and <span className="font-semibold text-primary">creativity</span></span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
