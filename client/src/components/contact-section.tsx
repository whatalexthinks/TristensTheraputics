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

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information Card */}
            <motion.div
              className="bg-gradient-to-br from-black/60 to-jungle-dark/80 backdrop-blur-sm border border-earth-light/20 rounded-2xl p-8 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-cinzel font-bold cream-light mb-6 text-center">
                Contact Tristen
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-earth-light rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-black" size={20} />
                  </div>
                  <div>
                    <h4 className="cream-light font-semibold">Location</h4>
                    <p className="cream-medium">St. George, Utah</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-earth-light rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-black" size={20} />
                  </div>
                  <div>
                    <h4 className="cream-light font-semibold">Call or Text</h4>
                    <p className="cream-medium">
                      <a href="tel:8082808702" className="hover:text-gold transition-colors duration-300 text-lg">
                        (808) 280-8702
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <a 
                  href="tel:8082808702" 
                  className="flex items-center justify-center w-full bg-earth-light text-jungle-dark py-4 rounded-xl font-bold hover:bg-earth-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Phone className="mr-2" size={20} />
                  Call to Book Session
                </a>
                <a 
                  href="sms:8082808702" 
                  className="flex items-center justify-center w-full bg-jungle-medium text-cream-light py-4 rounded-xl font-bold hover:bg-jungle-light transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Mail className="mr-2" size={20} />
                  Text to Book Session
                </a>
              </div>
            </motion.div>

            {/* Booking Information Card */}
            <motion.div
              className="bg-gradient-to-br from-black/60 to-jungle-dark/80 backdrop-blur-sm border border-earth-light/20 rounded-2xl p-8 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-cinzel font-bold cream-light mb-6 text-center">
                Booking Information
              </h3>
              
              <div className="space-y-6">
                <div className="bg-black/30 rounded-xl p-4 border border-earth-light/10">
                  <h4 className="cream-light font-semibold mb-2">Session Types</h4>
                  <ul className="cream-medium space-y-1 text-sm">
                    <li>• Massage Therapy (60-90 min)</li>
                    <li>• Active Release Technique</li>
                    <li>• Combination Sessions</li>
                    <li>• Consultation Available</li>
                  </ul>
                </div>
                
                <div className="bg-black/30 rounded-xl p-4 border border-earth-light/10">
                  <h4 className="cream-light font-semibold mb-2">Availability</h4>
                  <p className="cream-medium text-sm">
                    Call or text to schedule your appointment. 
                    Same-day bookings may be available.
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-xl p-4 border border-earth-light/10">
                  <h4 className="cream-light font-semibold mb-2">What to Expect</h4>
                  <p className="cream-medium text-sm">
                    Professional therapeutic bodywork tailored to your specific needs 
                    and athletic goals.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
