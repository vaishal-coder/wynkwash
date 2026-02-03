import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const pricingData = {
    hatchback: {
        title: "Hatchback",
        desc: "Ideal for Alto, Swift, i10, Kwid, etc.",
        image: "/assets/vehicles/hatchback.jpg",
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
        image: "/assets/vehicles/sedan.jpg",
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
        image: "/assets/vehicles/suv.jpg",
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
        image: "/assets/vehicles/luxury.jpg",
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
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16 perspective-1000 px-4">
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
                            className={`relative w-full max-w-[320px] sm:w-80 bg-white p-6 sm:p-8 rounded-3xl cursor-pointer border-2 transition-all duration-300 ${selected === key ? 'border-accent' : 'border-transparent'}`}
                        >
                            <div className={`w-32 h-20 mx-auto mb-6 sm:mb-8 transition-all duration-500 relative flex items-center justify-center`}>
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    className={`w-full h-full object-contain transition-transform duration-500 ${selected === key ? 'scale-125' : 'grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100'}`}
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{data.title}</h3>
                            <p className="text-gray-500 text-center text-sm leading-relaxed">{data.desc}</p>

                            <div className="mt-6 text-center">
                                <button className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${selected === key ? 'bg-primary text-white' : 'border border-gray-300 text-gray-500'}`}>
                                    {selected === key ? 'Selected' : 'View Plans'}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pricing Display */}
                <div id="pricing" className="max-w-4xl mx-auto px-4 md:px-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selected}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100"
                        >
                            <div className="p-6 md:p-8 border-b border-gray-100 bg-gray-50 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-primary">{pricingData[selected].title} Packages</h3>
                                    <p className="text-gray-500 text-sm">Best rates with <span className="text-red-500 font-bold">10% OFF</span> included</p>
                                </div>
                                <div className="flex items-center gap-2 px-5 py-2.5 bg-primary rounded-2xl shadow-xl border border-white/10 group overflow-hidden relative active:scale-95 transition-transform">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    <ShieldCheck size={20} className="text-accent drop-shadow-[0_0_8px_rgba(0,164,204,0.6)]" />
                                    <span className="text-white font-bold text-xs md:text-sm tracking-[0.2em] uppercase">Verified</span>
                                </div>
                            </div>

                            <div className="divide-y divide-gray-100">
                                {pricingData[selected].plans.map((plan, index) => (
                                    <div key={index} className="p-5 sm:p-6 flex justify-between items-center hover:bg-gray-50 transition-colors group">
                                        <span className="font-medium text-gray-700 group-hover:text-primary transition-colors text-sm sm:text-base pr-4">{plan.name}</span>
                                        <div className="text-right shrink-0">
                                            <span className="block text-[10px] sm:text-xs text-gray-400 line-through">₹{plan.original}</span>
                                            <span className="text-base sm:text-lg font-bold text-gray-900">₹{plan.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-6 md:p-8 bg-gray-50 text-center">
                                <a
                                    href={`https://wa.me/918870037600?text=Hello%20Team!%20I%E2%80%99m%20interested%20in%20your%20premium%20doorstep%20car%20wash%20for%20my%20${pricingData[selected].title}.%20Please%20share%20the%20available%20plans%2C%20pricing%2C%20and%20next%20available%20slot.%20Thank%20you.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-blue-800 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full sm:w-auto"
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
