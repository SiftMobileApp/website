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
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
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

        {/* Steps - Alternating Layout */}
        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  {/* Floating number */}
                  <span className="absolute -top-6 -left-4 lg:-left-8 text-7xl lg:text-8xl font-black text-primary/10 select-none z-10">
                    {step.number}
                  </span>
                  
                  {/* Image container */}
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Decorative accent */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="bg-primary h-12 w-12 rounded-xl flex items-center justify-center shadow-lg">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Step {step.number}
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
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
