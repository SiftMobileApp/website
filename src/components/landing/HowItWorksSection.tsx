import { motion } from "framer-motion";
import { Search, Video, ShoppingBag } from "lucide-react";
import discoverImage from "@/assets/Scrolling.jpg";
import seeFitImage from "@/assets/Fit.jpg";
import buyInstantImage from "@/assets/Buy.jpg";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Scroll a personalized feed of short videos from real sellers showcasing their pieces.",
    image: discoverImage,
    number: "01",
  },
  {
    icon: Video,
    title: "See the Fit",
    description: "Videos show real fit, condition, and details — reducing guesswork and building trust.",
    image: seeFitImage,
    number: "02",
  },
  {
    icon: ShoppingBag,
    title: "Buy Instantly",
    description: "Purchase in-app with simple checkout and one-way shipping. No hassle, just style.",
    image: buyInstantImage,
    number: "03",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4"
          >
            Simple & Intuitive
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How Sift Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From discovery to doorstep in three simple steps. No endless scrolling through static photos.
          </p>
        </motion.div>

        {/* Steps - Side by Side Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="flex flex-col group"
            >
              {/* Image */}
              <div className="relative mb-6">
                {/* Floating number */}
                <span className="absolute -top-4 -left-2 text-6xl lg:text-7xl font-black text-primary/10 select-none z-10">
                  {step.number}
                </span>
                
                {/* Image container */}
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
                
                {/* Decorative accent */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-primary/20 rounded-xl -z-10" />
              </div>

              {/* Content */}
              <div className="text-center">
                <div className="inline-flex items-center gap-3 mb-3">
                  <div className="bg-primary h-10 w-10 rounded-lg flex items-center justify-center shadow-lg">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Step {step.number}
                  </span>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
