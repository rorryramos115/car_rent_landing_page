// components/Features.tsx
'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Clock, DollarSign, MapPin, Headphones, Award } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Fully Insured",
    description: "All our vehicles come with comprehensive insurance coverage for your peace of mind."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Flexible Timing",
    description: "24/7 pickup and drop-off service to fit your schedule perfectly."
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Best Prices",
    description: "Competitive rates with no hidden fees. Get the best value for your money."
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Multiple Locations",
    description: "Convenient pickup locations across the city and at major airports."
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you whenever you need help."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Premium Quality",
    description: "Well-maintained, luxury vehicles that guarantee a comfortable ride."
  }
];

const Features: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">RentCar Pro</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide exceptional car rental services with unmatched quality and customer satisfaction
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 group"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;