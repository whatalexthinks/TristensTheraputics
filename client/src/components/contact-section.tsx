import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. Tristen will contact you soon.",
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact directly.",
        variant: "destructive",
        duration: 5000,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
          <h2 className="text-4xl sm:text-5xl font-cinzel font-bold cream-light mb-6 text-shadow">
            Book Your Session
          </h2>
          <p className="text-xl cream-medium mb-8">
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
                  <h4 className="cream-light font-semibold">Email</h4>
                  <p className="cream-medium">Send a message using the form</p>
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block cream-light font-semibold mb-2">Name *</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full bg-jungle-dark/50 border-jungle-medium cream-light focus:border-earth-light"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label className="block cream-light font-semibold mb-2">Email *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full bg-jungle-dark/50 border-jungle-medium cream-light focus:border-earth-light"
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div>
                <label className="block cream-light font-semibold mb-2">Phone</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full bg-jungle-dark/50 border-jungle-medium cream-light focus:border-earth-light"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label className="block cream-light font-semibold mb-2">Service Interest *</label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                  <SelectTrigger className="w-full bg-jungle-dark/50 border-jungle-medium cream-light focus:border-earth-light">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-jungle-dark border-jungle-medium">
                    <SelectItem value="massage" className="cream-light hover:bg-jungle-medium">Massage Therapy</SelectItem>
                    <SelectItem value="art" className="cream-light hover:bg-jungle-medium">Active Release Technique</SelectItem>
                    <SelectItem value="combo" className="cream-light hover:bg-jungle-medium">Combo Session</SelectItem>
                    <SelectItem value="consultation" className="cream-light hover:bg-jungle-medium">Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block cream-light font-semibold mb-2">Message *</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                  className="w-full bg-jungle-dark/50 border-jungle-medium cream-light focus:border-earth-light resize-none"
                  placeholder="Tell me about your needs and goals..."
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-earth-light hover:bg-earth-dark text-black font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 jungle-shadow"
              >
                {contactMutation.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
