import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Section Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
                    <p className="text-gray-500 text-lg">Premium doorstep car wash packages tailored for every vehicle</p>
                </div>

                {/* Promo Poster */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-10"
                >
                    <img
                        src="/assets/promo_poster.jpeg"
                        alt="WynkWash Promotional Poster - Doorstep Car Wash Bangalore"
                        className="w-full max-w-2xl rounded-3xl shadow-2xl object-contain border border-gray-100"
                    />
                </motion.div>

                {/* Contact for Pricing CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col items-center text-center gap-4 max-w-xl mx-auto"
                >
                    <p className="text-gray-500 text-base tracking-wide uppercase font-semibold">
                        Transparent Pricing. No Hidden Charges.
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug">
                        Interested in a package? <br className="hidden sm:block" />
                        <span className="text-primary">Reach out for a personalised quote.</span>
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Our team is available <strong className="text-gray-600">6:00 AM – 9:00 PM</strong>, all days. We'll help you choose the right plan for your vehicle.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
                        <a
                            href="https://wa.me/918870037600?text=Hello%20Team!%20I%E2%80%99m%20interested%20in%20your%20doorstep%20car%20wash%20packages.%20Please%20share%20the%20pricing%20and%20available%20slots.%20Thank%20you."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                        >
                            <MessageCircle size={20} />
                            Chat on WhatsApp
                        </a>
                        <a
                            href="tel:+918870037600"
                            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                        >
                            <Phone size={20} />
                            Call Us Now
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
