import { useState } from "react";
import { Menu, X } from "lucide-react";
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
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-jungle-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <motion.h1 
              className="text-xl font-cinzel font-bold cream-light"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Tristen's Therapeutics
            </motion.h1>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="cream-light hover:text-earth-light transition-colors duration-300 font-open"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="cream-light hover:text-earth-light transition-colors duration-300 font-open"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="cream-light hover:text-earth-light transition-colors duration-300 font-open"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="cream-light hover:text-earth-light transition-colors duration-300 font-open"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cream-light hover:text-earth-light"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-black/95 backdrop-blur-sm border-t border-jungle-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('services')}
              className="block px-3 py-2 cream-light hover:text-earth-light transition-colors duration-300 font-open"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 cream-light hover:text-earth-light transition-colors duration-300 font-open"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block px-3 py-2 cream-light hover:text-earth-light transition-colors duration-300 font-open"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 cream-light hover:text-earth-light transition-colors duration-300 font-open"
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
