import { motion } from "framer-motion";
import { Camera, TrendingUp, Users, Heart } from "lucide-react";
import sellerImage from "@/assets/seller-filming.jpg";

const benefits = [
  {
    icon: Camera,
    title: "Expressive Video Listings",
    description: "Show off your pieces with personality. Videos let you tell the story behind every item.",
  },
  {
    icon: TrendingUp,
    title: "Faster Sales",
    description: "Buyers trust what they can see moving. Video listings convert up to 3x faster.",
  },
  {
    icon: Users,
    title: "Build Your Audience",
    description: "Create a following around your personal style. Your closet, your brand.",
  },
];

const ForSellersSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 gradient-hero rounded-3xl blur-3xl opacity-20" />
              <img
                src={sellerImage}
                alt="Seller creating video content for their listings"
                className="relative rounded-3xl w-full shadow-xl"
              />

              {/* Stats overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-5 shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-xl gradient-hero flex items-center justify-center">
                    <Heart className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">3x</p>
                    <p className="text-sm text-muted-foreground">Faster sales with video</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 bg-primary-soft rounded-full px-4 py-2 mb-6">
              <Camera className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">For Sellers</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Turn your closet into a creative outlet
            </h2>

            <p className="text-lg text-muted-foreground mb-10">
              Sift makes selling as fun as scrolling. Create quick videos, reach buyers who match your style, and watch your pieces find new homes.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary-soft flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForSellersSection;
