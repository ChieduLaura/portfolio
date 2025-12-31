import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/ChieduLaura", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/laura-chiedu-067224308/", label: "LinkedIn" },
  { icon: Mail, href: "chiedulaura200@gmail.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <Link to="/" className="font-serif text-xl font-bold text-gradient">
              Laura Chiedu
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Full Stack Developer • Data Science • AI Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
           LauraChiedu <Heart className="h-4 w-4 text-primary fill-primary" /> © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};
