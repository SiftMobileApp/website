import { motion } from "framer-motion";
import { Search, Video, ShoppingBag, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Scroll a personalized feed of short videos from real sellers showcasing their pieces.",
    gradient: "from-primary/20 to-primary/5",
    iconBg: "bg-primary",
    number: "01",
  },
  {
    icon: Video,
    title: "See the Fit",
    description: "Videos show real fit, condition, and details — reducing guesswork and building trust.",
    gradient: "from-cyan-400/20 to-cyan-400/5",
    iconBg: "bg-cyan-400",
    number: "02",
  },
  {
    icon: ShoppingBag,
    title: "Buy Instantly",
    description: "Purchase in-app with simple checkout and one-way shipping. No hassle, just style.",
    gradient: "from-primary/20 to-primary/5",
    iconBg: "bg-primary",
    number: "03",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
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

        {/* Steps - Staggered Layout */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex items-center gap-8 lg:gap-16 mb-12 lg:mb-16 ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Card */}
              <div className="flex-1">
                <div className={`relative bg-gradient-to-br ${step.gradient} rounded-3xl p-8 lg:p-10 border border-border/30 backdrop-blur-sm group hover:shadow-xl transition-all duration-500`}>
                  {/* Floating number */}
                  <span className="absolute -top-4 -left-4 text-6xl lg:text-7xl font-black text-primary/10 select-none">
                    {step.number}
                  </span>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`${step.iconBg} h-14 w-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-7 w-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex flex-col items-center gap-2">
                  <div className="w-px h-24 bg-gradient-to-b from-primary/50 to-transparent" />
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5 text-primary/50 rotate-90" />
                  </motion.div>
                </div>
              )}

              {/* Visual element on opposite side */}
              <div className="hidden md:block flex-1">
                <motion.div
                  whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative"
                >
                  {/* Decorative circles */}
                  <div className={`absolute inset-0 ${step.iconBg}/10 rounded-full blur-2xl scale-75`} />
                  <div className="relative aspect-square max-w-[200px] mx-auto">
                    <div className={`absolute inset-4 ${step.iconBg}/20 rounded-full animate-pulse`} />
                    <div className={`absolute inset-8 ${step.iconBg}/30 rounded-full`} />
                    <div className={`absolute inset-12 ${step.iconBg} rounded-full flex items-center justify-center shadow-2xl`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
