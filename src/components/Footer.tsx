import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Twitter, Github, MessageCircle, Mail, Leaf } from "lucide-react";

const Footer = () => {
  const links = [
    {
      title: "Protocol",
      items: [
        { name: "Documentation", href: "#" },
        { name: "Whitepaper", href: "#" },
        { name: "Smart Contracts", href: "#" },
        { name: "Tokenomics", href: "#" }
      ]
    },
    {
      title: "Developers", 
      items: [
        { name: "API Reference", href: "#" },
        { name: "SDK", href: "#" },
        { name: "Move Contracts", href: "#" },
        { name: "Integration Guide", href: "#" }
      ]
    },
    {
      title: "Community",
      items: [
        { name: "Discord", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "GitHub", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "Help Center", href: "#" },
        { name: "Media Kit", href: "#" },
        { name: "Brand Guidelines", href: "#" },
        { name: "Terms of Service", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "@GUI_INU" },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <MessageCircle className="h-5 w-5" />, href: "#", label: "Discord" },
    { icon: <Mail className="h-5 w-5" />, href: "#", label: "Contact" }
  ];

  return (
    <footer className="bg-card/30 backdrop-blur-xl border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Leaf className="h-7 w-7 text-primary" />
              </div>
              <span className="text-2xl font-display font-bold text-foreground">TerraMesh</span>
            </div>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              EcoCredit Protocol for Tokenized Public Goods. Rewarding real-world environmental impact with blockchain technology.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button key={index} variant="ghost" size="icon" className="hover:bg-primary/20 hover:text-primary transition-all duration-300 rounded-xl">
                  {social.icon}
                </Button>
              ))}
            </div>
          </div>

          {/* Links */}
          {links.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-bold text-foreground text-lg tracking-tight">{section.title}</h4>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide hover:underline decoration-primary/30 underline-offset-4"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="bg-gradient-ocean/10 rounded-lg p-8 mb-12 border border-primary/20">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest updates on TerraMesh development, token launches, and ecosystem news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-card/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2025 TerraMesh. All rights reserved.
              </p>
              <Badge variant="glow" className="text-xs">
                Built on Aptos
              </Badge>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;