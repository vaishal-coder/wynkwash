import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

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
    const [selected, setSelected] = useState(null);

    const toggleSelect = (key) => {
        setSelected(selected === key ? null : key);
        if (selected !== key) {
            setTimeout(() => {
                const element = document.getElementById(`pricing-${key}`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    };

    return (
        <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Choose Your Vehicle</h2>
                    <p className="text-gray-500 text-lg">Select your car type to view exclusive doorstep plans</p>
                </div>

                <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                    {Object.entries(pricingData).map(([key, data]) => (
                        <div key={key} id={`pricing-${key}`} className="w-full">
                            <motion.div
                                onClick={() => toggleSelect(key)}
                                whileHover={{ y: -5 }}
                                className={`relative w-full bg-white p-6 sm:p-8 rounded-3xl cursor-pointer border-2 transition-all duration-300 flex flex-col sm:flex-row items-center gap-6 ${selected === key ? 'border-accent shadow-xl shadow-accent/10' : 'border-transparent shadow-sm'}`}
                            >
                                <div className="w-32 h-20 flex items-center justify-center shrink-0">
                                    <img
                                        src={data.image}
                                        alt={data.title}
                                        className={`w-full h-full object-contain transition-all duration-500 ${selected === key ? 'scale-110' : 'grayscale opacity-70 group-hover:grayscale-0'}`}
                                    />
                                </div>

                                <div className="flex-grow text-center sm:text-left">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{data.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{data.desc}</p>
                                </div>

                                <div className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-4">
                                    <button className={`flex-grow sm:flex-grow-0 px-8 py-3 rounded-full text-sm font-bold transition-all ${selected === key ? 'bg-primary text-white' : 'border border-gray-300 text-gray-400 hover:border-accent hover:text-accent'}`}>
                                        {selected === key ? 'Close' : 'View Plans'}
                                    </button>
                                    <div className={`hidden sm:block transition-transform duration-300 ${selected === key ? 'rotate-180 text-accent' : 'text-gray-300'}`}>
                                        <ChevronDown size={24} />
                                    </div>
                                </div>
                            </motion.div>

                            <AnimatePresence>
                                {selected === key && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-6 pb-4">
                                            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                                                <div className="p-6 border-b border-gray-100 bg-gray-50 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                                                    <div>
                                                        <h4 className="text-xl font-bold text-primary">{data.title} Packages</h4>
                                                        <p className="text-gray-500 text-xs">Best rates with <span className="text-red-500 font-bold">10% OFF</span> included</p>
                                                    </div>
                                                    <div className="flex items-center gap-2 px-4 py-2 bg-primary rounded-xl">
                                                        <ShieldCheck size={18} className="text-accent" />
                                                        <span className="text-white font-bold text-xs uppercase tracking-wider">Verified</span>
                                                    </div>
                                                </div>

                                                <div className="divide-y divide-gray-100">
                                                    {data.plans.map((plan, index) => (
                                                        <div key={index} className="p-5 flex justify-between items-center hover:bg-gray-50 transition-colors group">
                                                            <span className="font-medium text-gray-700 group-hover:text-primary transition-colors text-sm sm:text-base pr-4">{plan.name}</span>
                                                            <div className="text-right shrink-0">
                                                                <span className="block text-[10px] sm:text-xs text-gray-400 line-through">₹{plan.original}</span>
                                                                <span className="text-base sm:text-lg font-bold text-gray-900">₹{plan.price}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="p-6 bg-gray-50 text-center">
                                                    <a
                                                        href={`https://wa.me/918870037600?text=Hello%20Team!%20I%E2%80%99m%20interested%20in%20your%20premium%20doorstep%20car%20wash%20for%20my%20${data.title}.%20Please%20share%20the%20available%20plans%2C%20pricing%2C%20and%20next%20available%20slot.%20Thank%20you.`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-blue-800 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                                                    >
                                                        Book via WhatsApp
                                                        <ArrowRight size={18} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
