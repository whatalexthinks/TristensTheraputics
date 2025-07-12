import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-effect border-b border-jungle-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-18 w-full">
          {/* Desktop menu - centered */}
          <div className="hidden md:flex justify-center w-full">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="cream-light hover:text-gold transition-all duration-300 font-open font-medium px-4 py-3 rounded-md hover:bg-jungle-light/20 relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="cream-light hover:text-gold transition-all duration-300 font-open font-medium px-4 py-3 rounded-md hover:bg-jungle-light/20 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="cream-light hover:text-gold transition-all duration-300 font-open font-medium px-4 py-3 rounded-md hover:bg-jungle-light/20 relative group"
              >
                Pricing
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            </div>
          </div>
          
          {/* Book Now button - positioned separately on the right */}
          <div className="hidden md:block absolute right-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-earth-gradient text-jungle-dark hover:bg-earth-light transition-all duration-300 font-open font-semibold px-6 py-2 rounded-full button-glow"
            >
              Book Now
            </button>
          </div>
          
          {/* Mobile menu button - positioned on the right */}
          <div className="md:hidden absolute right-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cream-light hover:text-gold transition-colors duration-300 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden glass-effect border-t border-jungle-light/20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('services')}
              className="block px-3 py-3 cream-light hover:text-gold transition-colors duration-300 font-open font-medium w-full text-left rounded-md hover:bg-jungle-light/20"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block px-3 py-3 cream-light hover:text-gold transition-colors duration-300 font-open font-medium w-full text-left rounded-md hover:bg-jungle-light/20"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block px-3 py-3 cream-light hover:text-gold transition-colors duration-300 font-open font-medium w-full text-left rounded-md hover:bg-jungle-light/20"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-3 bg-earth-gradient text-jungle-dark font-open font-semibold w-full text-left rounded-md mt-2"
            >
              Book Now
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
