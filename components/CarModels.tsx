// components/CarModels.tsx
'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Fuel, Settings, Star } from 'lucide-react';

interface Car {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  specs: {
    passengers: number;
    fuel: string;
    transmission: string;
  };
}

const cars: Car[] = [
  {
    id: 1,
    name: "BMW 3 Series",
    category: "Luxury Sedan",
    price: 89,
    image: "🚙",
    rating: 4.9,
    specs: {
      passengers: 5,
      fuel: "Petrol",
      transmission: "Automatic"
    }
  },
  {
    id: 2,
    name: "Mercedes C-Class",
    category: "Premium Sedan",
    price: 95,
    image: "🚗",
    rating: 4.8,
    specs: {
      passengers: 5,
      fuel: "Hybrid",
      transmission: "Automatic"
    }
  },
  {
    id: 3,
    name: "Audi Q7",
    category: "Luxury SUV",
    price: 120,
    image: "🚐",
    rating: 4.9,
    specs: {
      passengers: 7,
      fuel: "Diesel",
      transmission: "Automatic"
    }
  },
  {
    id: 4,
    name: "Range Rover Sport",
    category: "Premium SUV",
    price: 150,
    image: "🚙",
    rating: 5.0,
    specs: {
      passengers: 5,
      fuel: "Petrol",
      transmission: "Automatic"
    }
  },
  {
    id: 5,
    name: "Tesla Model S",
    category: "Electric Luxury",
    price: 110,
    image: "🏎️",
    rating: 4.9,
    specs: {
      passengers: 5,
      fuel: "Electric",
      transmission: "Automatic"
    }
  },
  {
    id: 6,
    name: "Porsche Cayenne",
    category: "Sports SUV",
    price: 180,
    image: "🚗",
    rating: 4.8,
    specs: {
      passengers: 5,
      fuel: "Petrol",
      transmission: "Automatic"
    }
  }
];

const CarModels: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Premium <span className="text-blue-600">Fleet</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our extensive collection of luxury and premium vehicles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Car Image */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-8 h-48 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotateY: 15 }}
                  transition={{ duration: 0.3 }}
                  className="text-6xl"
                >
                  {car.image}
                </motion.div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{car.rating}</span>
                </div>
              </div>

              {/* Car Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{car.name}</h3>
                  <p className="text-blue-600 font-medium">{car.category}</p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{car.specs.passengers}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Fuel className="w-4 h-4" />
                    <span>{car.specs.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Settings className="w-4 h-4" />
                    <span>Auto</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      ${car.price}
                      <span className="text-sm font-normal text-gray-500">/day</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                    Rent Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarModels;
