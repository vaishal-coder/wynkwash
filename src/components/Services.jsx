import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CarFront, Car, Truck, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

const pricingData = {
    hatchback: {
        title: "Hatchback",
        desc: "Ideal for Alto, Swift, i10, Kwid, etc.",
        icon: "/assets/3d/hatchback.png",
        plans: [
            { name: "Premium Doorstep Wash", price: 1079, original: 1199 },
            { name: "Interior Deep Cleaning", price: 3149, original: 3499 },
            { name: "Exterior Rubbing & Waxing", price: 3599, original: 3999 },
            { name: "Complete Car Spa", price: 5399, original: 5999 },
            { name: "Monthly Premium Maintenance (4 Washes)", price: 2699, original: 2999 }
        ]
    },
    sedan: {
        title: "Sedan",
        desc: "Ideal for City, Verna, Dzire, Amaze, etc.",
        icon: "/assets/3d/sedan.png",
        plans: [
            { name: "Premium Doorstep Wash", price: 1169, original: 1299 },
            { name: "Interior Deep Cleaning", price: 3599, original: 3999 },
            { name: "Exterior Rubbing & Waxing", price: 4049, original: 4499 },
            { name: "Complete Car Spa", price: 6299, original: 6999 },
            { name: "Monthly Premium Maintenance (4 Washes)", price: 3149, original: 3499 }
        ]
    },
    suv: {
        title: "SUV / XUV",
        desc: "Ideal for Creta, Brezza, Innova, XUV700, etc.",
        icon: "/assets/3d/suv.png",
        plans: [
            { name: "Premium Doorstep Wash", price: 1259, original: 1399 },
            { name: "Interior Deep Cleaning", price: 4049, original: 4499 },
            { name: "Exterior Rubbing & Waxing", price: 4499, original: 4999 },
            { name: "Complete Car Spa", price: 7199, original: 7999 },
            { name: "Monthly Premium Maintenance (4 Washes)", price: 3599, original: 3999 }
        ]
    },
    luxury: {
        title: "Luxury Cars",
        desc: "BMW, Mercedes, Audi, Jaguar, etc.",
        icon: "/assets/3d/luxury.png",
        plans: [
            { name: "Premium Doorstep Wash", price: 1439, original: 1599 },
            { name: "Interior Deep Cleaning", price: 4499, original: 4999 },
            { name: "Exterior Rubbing & Waxing", price: 4949, original: 5499 },
            { name: "Complete Car Spa", price: 8099, original: 8999 },
            { name: "Monthly Premium Maintenance (4 Washes)", price: 4049, original: 4499 }
        ]
    }
};

export default function Services() {
    const [selected, setSelected] = useState('hatchback');

    return (
        <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Choose Your Vehicle</h2>
                    <p className="text-gray-500 text-lg">Select your car type to view exclusive doorstep plans</p>
                </div>

                {/* 3D Cards */}
                <div className="flex flex-wrap justify-center gap-8 mb-16 perspective-1000">
                    {Object.entries(pricingData).map(([key, data]) => (
                        <motion.div
                            key={key}
                            onClick={() => setSelected(key)}
                            whileHover={{ y: -10, rotateX: 5 }}
                            animate={{
                                scale: selected === key ? 1.05 : 1,
                                borderColor: selected === key ? '#00A4CC' : 'transparent',
                                boxShadow: selected === key ? '0 20px 40px rgba(0, 164, 204, 0.2)' : '0 10px 30px rgba(0,0,0,0.05)'
                            }}
                            className={`relative w-full max-w-[340px] md:w-80 bg-white p-8 rounded-3xl cursor-pointer border-2 transition-all duration-300 ${selected === key ? 'border-accent' : 'border-transparent'}`}
                        >
                            <div className={`w-24 h-24 mx-auto rounded-3xl overflow-hidden flex items-center justify-center mb-6 transition-all duration-500 ${selected === key ? 'bg-white shadow-2xl scale-110' : 'bg-gray-100 opacity-80'}`}>
                                <img src={data.icon} alt={data.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{data.title}</h3>
                            <p className="text-gray-500 text-center text-sm">{data.desc}</p>

                            <div className="mt-6 text-center">
                                <button className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${selected === key ? 'bg-primary text-white' : 'border border-gray-300 text-gray-500'}`}>
                                    {selected === key ? 'Selected' : 'View Plans'}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pricing Display */}
                <div id="pricing" className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selected}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                        >
                            <div className="p-8 border-b border-gray-100 bg-gray-50 flex justify-between items-center flex-wrap gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-primary">{pricingData[selected].title} Packages</h3>
                                    <p className="text-gray-500 text-sm">Best rates with <span className="text-red-500 font-bold">10% OFF</span> included</p>
                                </div>
                                <div className="text-accent font-semibold flex items-center gap-2">
                                    <div className="p-2 bg-accent/10 rounded-full"><CheckCircle size={18} /></div>
                                    Verified Pricing
                                </div>
                            </div>

                            <div className="divide-y divide-gray-100">
                                {pricingData[selected].plans.map((plan, index) => (
                                    <div key={index} className="p-6 flex justify-between items-center hover:bg-gray-50 transition-colors group">
                                        <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">{plan.name}</span>
                                        <div className="text-right">
                                            <span className="block text-xs text-gray-400 line-through">₹{plan.original}</span>
                                            <span className="text-lg font-bold text-gray-900">₹{plan.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-8 bg-gray-50 text-center">
                                <a
                                    href={`https://wa.me/918870037600?text=I'm interested in ${pricingData[selected].title} service`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-800 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                                >
                                    Book Now
                                    <ArrowRight size={18} />
                                </a>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
