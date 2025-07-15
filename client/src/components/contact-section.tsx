import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {

  return (
    <section id="contact" className="py-20 relative">
      {/* Dark jungle atmosphere tarzan */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-jungle-dark/80 to-black/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-black/40 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20">
            <h2 className="text-4xl sm:text-5xl font-cinzel font-bold cream-light mb-6 text-shadow">
              Book Your Session
            </h2>
            <p className="text-xl cream-medium mb-0">
              Ready to take your recovery and performance to the next level?
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start max-w-4xl mx-auto">
          <motion.div
            className="bg-black/50 backdrop-blur-sm border border-earth-light/30 rounded-2xl p-6 shadow-2xl flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-cinzel font-bold cream-light mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-earth-light rounded-full flex items-center justify-center mr-3">
                  <MapPin className="text-black" size={18} />
                </div>
                <div>
                  <h4 className="cream-light font-semibold text-sm">Location</h4>
                  <p className="cream-medium text-sm">St. George, Utah</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-earth-light rounded-full flex items-center justify-center mr-3">
                  <Phone className="text-black" size={18} />
                </div>
                <div>
                  <h4 className="cream-light font-semibold text-sm">Call or Text</h4>
                  <p className="cream-medium text-sm">
                    <a href="tel:8082808702" className="hover:text-gold transition-colors duration-300">
                      (808) 280-8702
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <a 
                href="tel:8082808702" 
                className="block w-full bg-earth-light text-jungle-dark text-center py-3 rounded-lg font-semibold hover:bg-earth-medium transition-colors duration-300"
              >
                📞 Call to Book
              </a>
              <a 
                href="sms:8082808702" 
                className="block w-full bg-jungle-medium text-cream-light text-center py-3 rounded-lg font-semibold hover:bg-jungle-light transition-colors duration-300"
              >
                💬 Text to Book
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="bg-black/30 backdrop-blur-sm border border-earth-light/30 rounded-2xl p-3 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden" style={{ height: '400px', width: '320px' }}>
              <iframe 
                src="https://calendly.com/tristen-therapeutics/session"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule Your Session"
                className="rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
