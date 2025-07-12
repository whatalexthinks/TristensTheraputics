import { motion } from "framer-motion";

export default function PricingSection() {
  const pricingData = [
    {
      title: "Massage Therapy",
      subtitle: "(In-Home)",
      services: [
        { duration: "75 min", price: "$120" },
        { duration: "90 min", price: "$140" },
        { duration: "120 min", price: "$180" }
      ],
      note: "First-time clients: No mobile service charge"
    },
    {
      title: "Active Release Technique",
      subtitle: "(ART Only)",
      services: [
        { duration: "30 min", price: "$50" },
        { duration: "45 min", price: "$75" }
      ],
      note: "Mobile ART: Add $20 travel fee"
    },
    {
      title: "Combo Sessions",
      subtitle: "ART + Massage",
      services: [
        { duration: "90 min", price: "$140", detail: "30 ART + 60 massage" },
        { duration: "120 min", price: "$180", detail: "45 ART + 75 massage" }
      ],
      note: "Best value for comprehensive treatment"
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      {/* Misty jungle fog canopy */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-jungle-dark/85"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-cinzel font-bold cream-light mb-6 text-shadow">
            Pricing
          </h2>
          <p className="text-xl cream-medium">
            Investment in your recovery and performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((category, index) => (
            <motion.div
              key={index}
              className="bg-black/70 backdrop-blur-sm border border-jungle-medium rounded-lg p-8 jungle-shadow hover:bg-black/80 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-cinzel font-bold cream-light mb-2 text-center">
                {category.title}
              </h3>
              <p className="text-center cream-medium mb-6 text-sm">
                {category.subtitle}
              </p>
              
              <div className="space-y-4 mb-6">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex justify-between items-center py-2 border-b border-jungle-medium">
                    <div>
                      <span className="cream-light block font-medium">{service.duration}</span>
                      {service.detail && (
                        <span className="cream-medium text-sm">{service.detail}</span>
                      )}
                    </div>
                    <span className="text-earth-light font-bold text-xl">{service.price}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-sm cream-medium italic text-center">
                {category.note}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg cream-light mb-4">
            <strong>Serving St. George, Utah</strong>
          </p>
          <p className="cream-medium">
            $20 mobile service fee applies to all mobile services except first-time massage clients
          </p>
        </motion.div>
      </div>
    </section>
  );
}
