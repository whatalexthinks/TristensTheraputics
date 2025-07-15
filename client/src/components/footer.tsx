import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-jungle-medium py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-cinzel font-bold cream-light mb-4">
            Tristen's Therapeutics
          </h3>
          <p className="text-earth-light font-cinzel text-lg mb-6">
            🌀 Where strength meets healing
          </p>
          <p className="cream-medium mb-4">
            Advanced Bodywork for Active Lives • Serving St. George, Utah
          </p>
          <p className="text-earth-light font-semibold">
            <a href="tel:8082808702" className="hover:text-gold transition-colors duration-300">
              (808) 280-8702
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
