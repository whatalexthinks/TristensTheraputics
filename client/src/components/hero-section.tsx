import { Calendar, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Dense jungle canopy background with heavy mist */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"
        }}
      >
        <div className="absolute inset-0 mist-overlay"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cinzel font-bold cream-light mb-6 leading-tight text-shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          TRISTEN'S<br />
          <span className="text-earth-light">THERAPEUTICS</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl md:text-3xl font-cinzel font-medium cream-medium mb-8 text-shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Advanced Bodywork for Active Lives
        </motion.p>
        
        <motion.p 
          className="text-lg sm:text-xl cream-light/90 mb-12 max-w-3xl mx-auto leading-relaxed text-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          Where massage meets movement science. Deep, focused therapeutic bodywork for people who train hard, move often, and expect real results.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <button 
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center px-8 py-4 bg-earth-light hover:bg-earth-dark text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 jungle-shadow font-open"
          >
            <Calendar className="mr-2" size={20} />
            Book Your Session
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="inline-flex items-center px-8 py-4 border-2 border-cream-light cream-light hover:bg-cream-light hover:text-black font-semibold rounded-lg transition-all duration-300 font-open"
          >
            <Dumbbell className="mr-2" size={20} />
            View Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
