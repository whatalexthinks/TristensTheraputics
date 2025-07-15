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
          <h2 className="text-4xl sm:text-5xl font-cinzel font-bold cream-light mb-6 text-shadow bg-black/30 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/10 inline-block">
            Book Your Session
          </h2>
          <p className="text-xl cream-medium mb-8 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10 inline-block">
            Ready to take your recovery and performance to the next level?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-cinzel font-bold cream-light mb-6 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10 inline-block">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center bg-black/30 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-earth-light rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-black" size={20} />
                </div>
                <div>
                  <h4 className="cream-light font-semibold">Location</h4>
                  <p className="cream-medium">Serving St. George, Utah</p>
                </div>
              </div>
              <div className="flex items-center bg-black/30 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10">
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
              <div className="flex items-center bg-black/30 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-earth-light rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-black" size={20} />
                </div>
                <div>
                  <h4 className="cream-light font-semibold">Email</h4>
                  <p className="cream-medium">Schedule directly via calendar</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-black/70 backdrop-blur-sm border border-jungle-medium rounded-lg p-8 jungle-shadow"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-xl font-cinzel font-bold cream-light mb-6 text-center bg-black/30 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10">
                Schedule Your Appointment
              </h3>
              <div className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4">
                <iframe 
                  src="https://calendly.com/your-calendly-link"
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  className="rounded-lg"
                  title="Book an appointment with Tristen's Therapeutics"
                ></iframe>
              </div>
              <p className="text-center cream-medium text-sm bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                Select your preferred time slot and service type. You'll receive a confirmation email with all the details.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
