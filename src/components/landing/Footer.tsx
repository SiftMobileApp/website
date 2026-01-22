import { Linkedin } from "lucide-react";
import siftLogo from "@/assets/sift-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container">
        <div className="flex items-center justify-between">
          <a href="#" className="cursor-pointer">
            <img src={siftLogo} alt="Sift Logo" className="h-12 w-12 rounded-xl" />
          </a>
          
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Sift. All rights reserved.
          </p>
          
          <a
            href="https://www.linkedin.com/company/sift-mobile"
            target="_blank"
            className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-primary-foreground/20 hover:text-primary-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
