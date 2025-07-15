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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="bg-black/50 backdrop-blur-sm border border-earth-light/30 rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-cinzel font-bold cream-light mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-earth-light rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-black" size={20} />
                </div>
                <div>
                  <h4 className="cream-light font-semibold">Location</h4>
                  <p className="cream-medium">Serving St. George, Utah</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-earth-light rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-black" size={20} />
                </div>
                <div>
                  <h4 className="cream-light font-semibold">Phone</h4>
                  <p className="cream-medium">
                    <a href="tel:8082808702" className="hover:text-gold transition-colors duration-300">
                      (808) 280-8702
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-earth-light rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-black" size={20} />
                </div>
                <div>
                  <h4 className="cream-light font-semibold">Schedule Online</h4>
                  <p className="cream-medium">Book your appointment instantly</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-black/30 backdrop-blur-sm border border-earth-light/30 rounded-2xl p-4 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden" style={{ height: '600px' }}>
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
