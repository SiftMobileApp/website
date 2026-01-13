import { motion } from "framer-motion";
import { X, Check, AlertTriangle, Eye, Zap, Target } from "lucide-react";

const problems = [
  { icon: AlertTriangle, text: "Static photos hide true fit and condition" },
  { icon: Eye, text: "Hard to trust sellers you've never seen" },
  { icon: X, text: "Discovery feels random, not personalized" },
  { icon: X, text: "Outdated marketplace experience" },
];

const solutions = [
  { icon: Check, text: "Video shows every detail — fit, fabric, flaws" },
  { icon: Check, text: "See real people wearing real clothes" },
  { icon: Zap, text: "AI-powered feed learns your style" },
  { icon: Target, text: "Built exclusively for resale" },
];

const WhySiftSection = () => {
  return (
    <section className="py-24 lg:py-32 gradient-soft">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Sift Exists
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're building the future of second-hand shopping because the current experience is broken.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-3xl p-8 lg:p-10 border border-destructive/10 h-full">
              <div className="inline-flex items-center gap-2 bg-destructive/10 rounded-full px-4 py-2 mb-8">
                <X className="h-4 w-4 text-destructive" />
                <span className="text-sm font-medium text-destructive">The Problem</span>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Today's resale platforms make it hard to trust what you're buying.
              </h3>

              <ul className="space-y-5">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                      <problem.icon className="h-5 w-5 text-destructive" />
                    </div>
                    <span className="text-foreground/80 pt-2">{problem.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-card rounded-3xl p-8 lg:p-10 border border-primary/10 shadow-soft h-full">
              <div className="inline-flex items-center gap-2 bg-primary-soft rounded-full px-4 py-2 mb-8">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">The Sift Solution</span>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Video-first shopping builds confidence before you buy.
              </h3>

              <ul className="space-y-5">
                {solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary-soft flex items-center justify-center">
                      <solution.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground/80 pt-2">{solution.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySiftSection;
