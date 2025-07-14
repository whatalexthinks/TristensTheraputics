import { Calendar, Dumbbell, Zap, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced jungle canopy background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full opacity-40"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -20, 20, -20],
              opacity: [0.4, 0.8, 0.4, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-24 h-24 bg-earth-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <Zap className="text-jungle-dark" size={36} />
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-cinzel font-bold cream-light mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}
        >
          TRISTEN'S<br />
          <span className="text-gold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            THERAPEUTICS
          </span>
        </motion.h1>
        
        <motion.div 
          className="inline-block mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-cinzel font-medium text-earth-light px-6 py-3 bg-black/30 backdrop-blur-md rounded-2xl border border-white/20"
             style={{ 
               textShadow: "0 2px 10px rgba(0,0,0,0.8)",
               filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.4))"
             }}
          >
            Advanced Bodywork for Active Lives
          </p>
        </motion.div>
        
        <motion.p 
          className="text-lg sm:text-xl cream-light/95 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
        >
          Where massage meets movement science. Deep, focused therapeutic bodywork for people who train hard, move often, and expect real results.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 w-full max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        >
          <button 
            onClick={() => scrollToSection('contact')}
            className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-earth-light hover:bg-earth-medium text-jungle-dark font-bold rounded-full transition-all duration-300 transform hover:scale-105 button-glow font-open text-lg shadow-2xl"
          >
            <Calendar className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={20} />
            Book Your Session
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-black hover:bg-gray-800 text-cream-light font-bold rounded-full transition-all duration-300 font-open text-lg shadow-2xl"
          >
            <Dumbbell className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={20} />
            View Services
          </button>
        </motion.div>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.button
            onClick={() => scrollToSection('services')}
            className="cream-light/70 hover:cream-light transition-colors duration-300 p-3 rounded-full hover:bg-white/10"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
