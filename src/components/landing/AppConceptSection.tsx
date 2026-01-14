import { motion } from "framer-motion";
import { Play, Heart, ShoppingCart, MessageCircle, Smartphone } from "lucide-react";

const AppConceptSection = () => {
  return (
    <section className="py-24 lg:py-32 gradient-soft overflow-hidden">
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
            <Smartphone className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Mobile Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Shopping that feels like scrolling
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An intuitive, video-first interface designed for the way you actually shop on your phone.
          </p>
        </motion.div>

        {/* Phone Mockup */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Phone Frame */}
            <div className="relative w-[300px] md:w-[340px] h-[620px] md:h-[700px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
              {/* Inner bezel */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-foreground rounded-b-2xl z-20" />
              
              {/* Screen */}
              <div className="relative h-full w-full bg-gradient-to-b from-slate-900 to-slate-800 rounded-[2.5rem] overflow-hidden">
                {/* Video placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-b from-blue-900/20 to-purple-900/20">
                    {/* Simulated video content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                      >
                        <Play className="h-10 w-10 text-white fill-white" />
                      </motion.div>
                    </div>

                    {/* Product info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-white font-semibold text-lg">Vintage Denim Jacket</p>
                          <p className="text-white/70 text-sm">@sarahstyles</p>
                          <p className="text-white font-bold text-xl mt-2">$45</p>
                        </div>
                        <div className="flex flex-col gap-4">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
                          >
                            <Heart className="h-6 w-6 text-white" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
                          >
                            <MessageCircle className="h-6 w-6 text-white" />
                          </motion.button>
                        </div>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="w-full mt-4 py-4 gradient-hero rounded-2xl text-white font-semibold flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="h-5 w-5" />
                        Buy Now
                      </motion.button>
                    </div>

                    {/* Top labels */}
                    <div className="absolute top-12 left-0 right-0 px-6 flex justify-between items-center">
                      <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                        <span className="text-white text-sm font-medium">Video Feed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-16 top-1/4 hidden lg:block"
            >
              <div className="bg-card rounded-2xl p-4 shadow-xl border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full gradient-hero flex items-center justify-center">
                    <Play className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium text-foreground">Video Feed</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-16 top-1/2 hidden lg:block"
            >
              <div className="bg-card rounded-2xl p-4 shadow-xl border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <ShoppingCart className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-medium text-foreground">Buy in App</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppConceptSection;
