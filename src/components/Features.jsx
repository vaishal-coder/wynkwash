import { MapPinned, ShieldCheck, Sparkle, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: "/assets/3d/location.png",
        isImage: true,
        title: "Doorstep Convenience",
        desc: "We come to you using our own water and power supply if needed."
    },
    {
        icon: "/assets/3d/team.png",
        isImage: true,
        title: "Pro Team",
        desc: "Trained professionals who treat your car with care and precision."
    },
    {
        icon: Sparkle,
        isImage: false,
        title: "Premium Products",
        desc: "We use high-quality wax and shampoos for a lasting shine."
    },
    {
        icon: Tag,
        isImage: false,
        title: "Detailed Pricing",
        desc: "No hidden costs. What you see is exactly what you pay."
    }
];

export default function Features() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Why WynkWash?</h2>
                    <p className="text-gray-500 text-lg">Detailed care for your vehicle, right at your home.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, rotateY: 5 }}
                            className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,164,204,0.15)] transition-all duration-500 text-center group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150"></div>

                            <div className="w-20 h-20 mx-auto bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-xl transition-all duration-300 relative z-10">
                                {feature.isImage ? (
                                    <img src={feature.icon} alt={feature.title} className="w-16 h-16 object-cover" />
                                ) : (
                                    <feature.icon size={32} className="text-primary group-hover:text-accent transition-colors" />
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 relative z-10">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed relative z-10">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
