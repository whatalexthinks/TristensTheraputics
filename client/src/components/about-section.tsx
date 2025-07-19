import { Tag, Heart, Sparkles, Dumbbell, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const credentials = [
    {
      icon: Tag,
      title: "Licensed Massage Therapist (UT)"
    },
    {
      icon: Heart,
      title: "Certified ART® Provider"
    },
    {
      icon: Sparkles,
      title: "Reiki Master"
    },
    {
      icon: Dumbbell,
      title: "NASM Certified Trainer"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Dark jungle atmosphere with thick canopy */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-jungle-dark/70 to-black/80"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-cinzel font-bold cream-light mb-8 text-shadow">
              About Tristen
            </h2>
            <p className="text-xl cream-medium mb-8 leading-relaxed">
              True healing happens when we work with the body, mind, and spirit together. As a multi-modality bodyworker, I blend therapeutic massage, mobility therapy, and energy balancing to restore not just movement, but wholeness.
            </p>
            <p className="text-lg cream-light/90 mb-8 leading-relaxed">
              Whether you're training, recovering, or simply seeking peace in your body, I bring a grounded, intuitive approach to support your full integration and wellbeing.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((cred, index) => (
                <motion.div
                  key={index}
                  className="bg-black/60 backdrop-blur-sm border border-jungle-medium rounded-lg p-4 transition-all duration-300 hover:bg-black/70"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <cred.icon className="text-earth-light mb-2" size={24} />
                  <p className="cream-light font-semibold text-sm">{cred.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Tristen's photo with healing energy theme */}
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-earth-light/30 shadow-2xl">
                <img 
                  src="https://i.imgur.com/QHRG19x.jpeg" 
                  alt="Tristen - Licensed Massage Therapist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
            </div>
            
            {/* Compact philosophy box */}
            <div className="bg-gradient-to-br from-jungle-medium/30 to-black/50 backdrop-blur-sm rounded-xl p-6 border border-earth-light/20 shadow-xl">
              <h3 className="text-xl font-cinzel font-bold cream-light mb-3 text-center"
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
              >
                Where Strength Meets Healing
              </h3>
              <p className="cream-medium leading-relaxed text-center">
                Specializing in functional recovery, deep pressure, and athlete performance care. Whether you're an athlete, lifter, cyclist, weekend warrior, or someone recovering from injury, I combine powerful, hands-on techniques with a deep understanding of the body.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
