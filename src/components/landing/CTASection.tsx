import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Bell } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="join-waitlist" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8"
          >
            <Sparkles className="h-5 w-5 text-white" />
            <span className="text-sm font-medium text-white">Launching Soon</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Be the first to experience the future of resale
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join our waitlist for early access. We're building something special, and we want you to be part of it.
          </p>

          {!isSubmitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 h-14 px-6 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
              />
              <Button variant="heroOutline" size="lg" type="submit" className="h-14 px-8">
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-lg mx-auto"
            >
              <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Bell className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">You're on the list! 🎉</h3>
              <p className="text-white/70">We'll notify you when Sift launches. Get ready to discover amazing finds.</p>
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-sm text-white/60"
          >
            Early users get priority access and exclusive perks
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
