import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-thrifting.jpg";
import siftLogo from "@/assets/sift-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      
      <div className="container relative z-10 flex min-h-screen items-center py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <img 
                src={siftLogo} 
                alt="Sift Logo" 
                className="h-14 w-14 rounded-xl"
              />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              Discover pre-loved fashion
              <span className="block mt-2 text-primary-foreground/90">through video</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto lg:mx-0"
            >
              The video-first marketplace where you see real fit, real condition, and buy instantly. Sustainable style has never been this easy.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="heroOutline" size="lg" className="group" asChild>
                <a href="#join-waitlist">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="#how-it-works">
                  <Play className="mr-2 h-5 w-5" />
                  See How It Works
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Happy young adults discovering second-hand fashion"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-primary-foreground rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Play className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Video First</p>
                    <p className="text-xs text-muted-foreground">See real fit & details</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-6 bg-primary-foreground rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <span className="text-2xl">♻️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Sustainable</p>
                    <p className="text-xs text-muted-foreground">Fashion with purpose</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute -bottom-px left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
