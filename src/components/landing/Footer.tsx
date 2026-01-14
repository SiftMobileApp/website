import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import siftLogo from "@/assets/sift-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16 lg:py-20">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={siftLogo} alt="Sift Logo" className="h-12 w-12 rounded-xl mb-4" />
              <p className="text-primary-foreground/60 max-w-sm mb-6">
                The video-first marketplace for second-hand fashion. Discover, trust, and buy pre-loved pieces with confidence.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: "#" },
                ].map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-primary-foreground/20 hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-semibold text-primary-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {["About", "Careers", "Press", "Blog"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold text-primary-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Sift. All rights reserved.
          </p>
          <a
            href="mailto:hello@sift.app"
            className="flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
            hello@sift.app
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
