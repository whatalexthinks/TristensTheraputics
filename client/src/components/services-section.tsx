import { HandHeart, Sparkles, Flame, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      icon: HandHeart,
      title: "Active Release Technique (ART®)",
      description: "For overuse injuries, chronic tightness, and movement restrictions. ART is a precise, hands-on method used to break up adhesions, improve tissue quality, and restore nerve mobility.",
      features: [
        "Shoulder or neck pain",
        "Low back stiffness or sciatica",
        "Tennis/golfer's elbow",
        "Carpal tunnel, knee pain, plantar fasciitis",
        "Mobility limitations from overtraining"
      ],
      note: "Sessions available as 30 or 45-minute focused treatments."
    },
    {
      icon: Sparkles,
      title: "Therapeutic Massage Therapy",
      description: "Not your average massage. This is strategic, restorative, and deeply healing. I tailor every session to your goals—combining advanced bodywork techniques.",
      features: [
        "Deep Tissue",
        "Trigger Point Therapy",
        "Myofascial Release",
        "Structural Integration",
        "Guided Breathwork",
        "Optional Reiki/Energy Balancing"
      ],
      note: "Sessions: 75, 90, or 120 minutes. Available in-home or mobile."
    },
    {
      icon: Flame,
      title: "Combo Sessions: ART + Massage",
      description: "The best of both worlds: targeted tissue therapy and full-body recovery. Perfect for athletes or rehab clients who need both precision and reset.",
      features: [
        "90 min: 30 min ART + 60 min massage",
        "120 min: 45 min ART + 75 min massage"
      ],
      note: "Ideal for comprehensive treatment and recovery."
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Mysterious jungle atmosphere background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-jungle-dark/90"></div>
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
            What I Offer
          </h2>
          <p className="text-xl cream-medium max-w-3xl mx-auto">
            Advanced massage, mobility therapy, and energy work for athletes, active individuals, and anyone seeking relief, resilience, or reconnection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-black/60 backdrop-blur-sm border border-jungle-medium rounded-lg p-8 hover:bg-black/70 transition-all duration-300 jungle-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-earth-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="text-2xl text-black" size={32} />
                </div>
                <h3 className="text-2xl font-cinzel font-bold cream-light mb-4">
                  {service.title}
                </h3>
              </div>
              
              <p className="cream-medium mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start cream-light">
                    <Check className="text-earth-light mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-sm cream-medium italic">
                {service.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
