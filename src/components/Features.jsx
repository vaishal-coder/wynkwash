import { motion } from 'framer-motion';

const features = [
    {
        image: "/assets/icons/convenience.jpg",
        title: "Doorstep Convenience",
        desc: "We come to you using our own water and power supply if needed.",
        color: "bg-blue-500"
    },
    {
        image: "/assets/icons/pro_team.png",
        title: "Pro Team",
        desc: "Trained professionals who treat your car with care and precision.",
        color: "bg-indigo-500"
    },
    {
        image: "/assets/icons/premium_products.jpg",
        title: "Premium Products",
        desc: "We use high-quality wax and shampoos for a lasting shine.",
        color: "bg-cyan-500"
    },
    {
        image: "/assets/icons/pricing.jpg",
        title: "Detailed Pricing",
        desc: "No hidden costs. What you see is exactly what you pay.",
        color: "bg-teal-500"
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
                            whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
                            className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 text-center group perspective-1000"
                        >
                            <div className={`w-24 h-24 mx-auto mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 flex items-center justify-center relative`}>
                                {feature.image ? (
                                    <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                        <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                                    </div>
                                ) : (
                                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-2xl ${feature.color} relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                                        <feature.icon size={36} strokeWidth={2.5} />
                                    </div>
                                )}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                            <p className="text-gray-500 text-base leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
