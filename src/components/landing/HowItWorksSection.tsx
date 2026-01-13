import { motion } from "framer-motion";
import { Search, Video, ShoppingBag, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Scroll a personalized feed of short videos from real sellers showcasing their pieces.",
    accent: "bg-blue-100 text-primary",
  },
  {
    icon: Video,
    title: "See the Fit",
    description: "Videos show real fit, condition, and details — reducing guesswork and building trust.",
    accent: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: ShoppingBag,
    title: "Buy Instantly",
    description: "Purchase in-app with simple checkout and one-way shipping. No hassle, just style.",
    accent: "bg-violet-100 text-violet-600",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-primary-soft rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Simple & Intuitive</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How Sift Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From discovery to doorstep in three simple steps. No endless scrolling through static photos.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="relative bg-card rounded-2xl p-8 lg:p-10 border border-border/50 hover:border-primary/20 hover:shadow-elevated transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`${step.accent} h-16 w-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <step.icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
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
