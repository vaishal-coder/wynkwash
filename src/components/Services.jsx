import { motion } from 'framer-motion';
import { CarFront, Wind, Sun, Gem, CheckCircle2, MessageCircle, Phone, ArrowRight } from 'lucide-react';

// Custom 3D Glowing SVG Icons to match premium aesthetic
const CustomIcon = ({ type }) => {
    const gradients = {
        emerald: { start: "#10B981", end: "#059669", glow: "rgba(16, 185, 129, 0.3)" },
        blue: { start: "#3B82F6", end: "#1D4ED8", glow: "rgba(59, 130, 246, 0.3)" },
        amber: { start: "#F59E0B", end: "#D97706", glow: "rgba(245, 158, 11, 0.3)" },
        purple: { start: "#8B5CF6", end: "#7C3AED", glow: "rgba(139, 92, 246, 0.3)" }
    };

    const icons = {
        wash: (
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="url(#bg_grad_blue)" fillOpacity="0.9" />
                <circle cx="50" cy="50" r="45" stroke="white" strokeOpacity="0.1" strokeWidth="0.5" />
                <g filter="url(#glow_blue)">
                    <path d="M50 25C43.1 25 37.5 30.6 37.5 37.5C37.5 45.4 50 60 50 60C50 60 62.5 45.4 62.5 37.5C62.5 30.6 56.9 25 50 25ZM50 42.5C47.2 42.5 45 40.3 45 37.5C45 34.7 47.2 32.5 50 32.5C52.8 32.5 55 34.7 55 37.5C55 40.3 52.8 42.5 50 42.5Z" fill="#60A5FA" />
                    <path d="M35 65H65L62 72H38L35 65Z" fill="#93C5FD" />
                    <circle cx="42" cy="74" r="3" fill="#60A5FA" />
                    <circle cx="58" cy="74" r="3" fill="#60A5FA" />
                </g>
                <defs>
                    <radialGradient id="bg_grad_blue" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 50) rotate(90) scale(45)">
                        <stop stopColor="#1E3A8A" />
                        <stop offset="1" stopColor="#0F172A" />
                    </radialGradient>
                    <filter id="glow_blue" x="20" y="20" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>
            </svg>
        ),
        sanitization: (
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="url(#bg_grad_san)" fillOpacity="0.9" />
                <g filter="url(#glow_san)">
                    <path d="M50 20L30 30V50C30 65 50 80 50 80C50 80 70 65 70 50V30L50 20Z" fill="#60A5FA" fillOpacity="0.8" />
                    <path d="M45 45L55 55M55 45L45 55" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </g>
                <defs>
                    <radialGradient id="bg_grad_san" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 50) rotate(90) scale(45)">
                        <stop stopColor="#1D4ED8" />
                        <stop offset="1" stopColor="#1E3A8A" />
                    </radialGradient>
                    <filter id="glow_san" x="20" y="20" width="60" height="70" filterUnits="userSpaceOnUse">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>
            </svg>
        ),
        restoration: (
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="url(#bg_grad_res)" fillOpacity="0.9" />
                <g filter="url(#glow_res)">
                    <circle cx="50" cy="50" r="20" stroke="#93C5FD" strokeWidth="4" strokeDasharray="10 5" />
                    <path d="M50 30V20M70 50H80M50 70V80M30 50H20" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="8" fill="white" fillOpacity="0.9" />
                </g>
                <defs>
                    <radialGradient id="bg_grad_res" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 50) rotate(90) scale(45)">
                        <stop stopColor="#1E40AF" />
                        <stop offset="1" stopColor="#111827" />
                    </radialGradient>
                    <filter id="glow_res" x="15" y="15" width="70" height="70" filterUnits="userSpaceOnUse">
                        <feGaussianBlur stdDeviation="2.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>
            </svg>
        ),
        concierge: (
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="url(#bg_grad_con)" fillOpacity="0.9" />
                <g filter="url(#glow_con)">
                    <path d="M50 25L25 45L35 75H65L75 45L50 25Z" fill="#BFDBFE" fillOpacity="0.8" />
                    <path d="M50 25V75M25 45H75M35 75L50 25L65 75" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
                    <circle cx="50" cy="50" r="15" stroke="#60A5FA" strokeWidth="2" />
                </g>
                <defs>
                    <radialGradient id="bg_grad_con" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 50) rotate(90) scale(45)">
                        <stop stopColor="#312E81" />
                        <stop offset="1" stopColor="#0F172A" />
                    </radialGradient>
                    <filter id="glow_con" x="20" y="20" width="60" height="60" filterUnits="userSpaceOnUse">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>
            </svg>
        )
    };

    return (
        <div className="w-16 h-16 relative">
            <div className="absolute inset-0 rounded-full blur-xl opacity-40 animate-pulse" style={{ backgroundColor: gradients[type].glow }}></div>
            {icons[type === 'emerald' ? 'wash' : type === 'blue' ? 'sanitization' : type === 'amber' ? 'restoration' : 'concierge']}
        </div>
    );
};

const services = [
    {
        title: "Signature Doorstep Wash",
        icon: <CustomIcon type="emerald" />,
        color: "emerald",
        accent: "#10B981",
        description: "Restore your vehicle’s exterior brilliance with our pH-balanced foam treatment and meticulous touchless drying. A professional <strong>doorstep car wash</strong> designed for those who value time and vehicle preservation.",
        shortDesc: "The Gold Standard in Mobile Maintenance",
        features: [
            "pH-Neutral Foam Encapsulation",
            "Swirl-Free Hand Wash Technique",
            "Deep-Clensed Wheel Arches",
            "Hydrophobic Glass Treatment"
        ]
    },
    {
        title: "Intensive Interior Sanitization",
        icon: <CustomIcon type="blue" />,
        color: "blue",
        accent: "#3B82F6",
        description: "Beyond surface level, we eliminate deep-seated allergens and bacteria using industrial-grade extraction. Restore the tactile quality of your upholstery and the factory-fresh aesthetics of your cabin with professional <strong>interior car cleaning</strong>.",
        shortDesc: "Medical-Grade Hygiene & Restoration",
        features: [
            "Deep-Fiber Steam Extraction",
            "Leather Conditioning & Feeding",
            "Ozone Odor Elimination",
            "Precision Dashboard Detailing"
        ]
    },
    {
        title: "Precision Paint Restoration",
        icon: <CustomIcon type="amber" />,
        color: "amber",
        accent: "#F59E0B",
        description: "Rejuvenate your vehicle’s clear coat through multi-stage machine correction. Finished with a high-grade carnauba infusion for deep optical clarity and long-lasting <strong>exterior car polishing</strong> performance.",
        shortDesc: "Showroom Gloss & Paint Protection",
        features: [
            "Multi-Stage Machine Correction",
            "High-Carnuaba Polymer Sealant",
            "Oxidation & Swirl Removal",
            "Chrome & Brightwork Polishing"
        ]
    },
    {
        title: "Total Vehicle Rejuvenation",
        icon: <CustomIcon type="purple" />,
        color: "purple",
        accent: "#8B5CF6",
        description: "Our most rigorous protocol consolidating intensive paint correction and full cabin sanitization. A comprehensive <strong>car detailing service</strong> that resets your vehicle to its peak aesthetic and structural condition.",
        shortDesc: "The Ultimate Detailing Concierge",
        features: [
            "All-Inclusive Detailing Protocol",
            "Engine Bay Steam Cleaning",
            "Roof & Headliner Restoration",
            "Resale Value Optimization"
        ]
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-slate-50 relative overflow-hidden font-['Inter']">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            
            <div className="container mx-auto px-6 relative z-10">

                {/* Section Heading */}
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 inline-block font-['Poppins']"
                    >
                        Elite Detailing Studio
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-['Poppins']"
                    >
                        Professional <span className="text-blue-700">Doorstep</span> Care
                    </motion.h2>
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"
                    ></motion.div>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Experience premium automotive preservation. We bring high-end workshop expertise directly to your location with uncompromising precision.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[2.5rem] p-1 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] group transition-all duration-300 border border-transparent hover:border-slate-100 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]"
                        >
                            <div className="h-full p-8 md:p-10 rounded-[2.3rem] flex flex-col">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="group-hover:scale-110 transition-all duration-300">
                                        {service.icon}
                                    </div>
                                    <div 
                                        className="h-12 w-1.5 rounded-full"
                                        style={{ backgroundColor: service.accent }}
                                    ></div>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-slate-800 mb-4 font-['Poppins'] group-hover:text-blue-700 transition-colors">
                                    {service.title}
                                </h3>
                                
                                <p className="text-slate-400 font-medium mb-6 uppercase tracking-wider text-xs">
                                    {service.shortDesc}
                                </p>
                                
                                <p 
                                    className="text-slate-600 mb-8 leading-relaxed text-base"
                                    dangerouslySetInnerHTML={{ __html: service.description }}
                                ></p>
                                
                                <div className="mt-auto">
                                    <div className="w-full h-px bg-slate-100 mb-8"></div>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-2">
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-center gap-3 text-slate-500 font-medium text-sm">
                                                <div className={`w-5 h-5 rounded-full flex items-center justify-center`} style={{ color: service.accent }}>
                                                    <CheckCircle2 size={16} strokeWidth={3} />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Offer Section */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-blue-700 rounded-[3rem] p-10 md:p-16 text-center mb-20 relative overflow-hidden shadow-2xl shadow-blue-900/20"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-900/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
                    
                    <div className="relative z-10">
                        <span className="bg-white/20 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-8 inline-block backdrop-blur-md border border-white/20 font-['Poppins']">
                            Limited Launch Offer
                        </span>
                        <h4 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-['Poppins']">
                            Exclusive <span className="text-blue-200">10% OFF</span> on All Packages
                        </h4>
                        <div className="max-w-xl mx-auto h-px bg-white/20 mb-8"></div>
                        <p className="text-blue-100 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                            Grab a <span className="text-white font-bold underline decoration-white-400 underline-offset-4">FREE BIKE WASH</span> worth ₹550 when you book any Premium+ cleaning service today!
                        </p>
                    </div>
                </motion.div>

                {/* Final CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center relative py-12"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                    
                    <div className="max-w-3xl mx-auto px-4 mt-8">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 font-['Poppins'] leading-tight">
                            Book Your <span className="text-blue-700">Doorstep Car Wash</span> Today
                        </h3>
                        <p className="text-slate-500 text-lg mb-10 font-medium">
                            Affordable plans. Professional service. At your convenience.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <motion.a
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                href="https://wa.me/918870037600?text=Hello%20Team!%20I%E2%80%99m%20interested%20in%20your%20doorstep%20car%20wash%20packages."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-emerald-500/20 transition-all w-full sm:w-auto text-lg"
                            >
                                <MessageCircle size={24} />
                                <span>Book on WhatsApp</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            
                            <motion.a
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                href="tel:+918870037600"
                                className="inline-flex items-center justify-center gap-3 bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-700 hover:text-blue-700 px-10 py-5 rounded-full font-bold shadow-lg transition-all w-full sm:w-auto text-lg"
                            >
                                <Phone size={22} />
                                Call Us Now
                            </motion.a>
                        </div>
                        
                        <div className="mt-12 flex items-center justify-center gap-8 grayscale opacity-50 overflow-hidden">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Trusted by 1000+ car owners in Bangalore</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
