import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
    {
        name: "Satish K.",
        location: "Rajajinagar",
        text: "The best doorstep service in Bengaluru. They brought their own water and power. My SUV looks brand new!",
        rating: 5
    },
    {
        name: "Megha Rao",
        location: "Malleshwaram",
        text: "Super convenient. I didn't even have to leave my office. The interior deep cleaning is top notch.",
        rating: 5
    },
    {
        name: "Arjun V.",
        location: "Laggere Hub",
        text: "Professional team and great attention to detail. Worth every rupee for the quality they provide.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Customer Stories</h2>
                    <p className="text-gray-500 text-lg">Why Bengaluru loves the Wynk Shine</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-gray-50 border border-gray-100 relative"
                        >
                            <Quote size={40} className="text-accent/10 absolute top-6 right-6" />
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                            <div>
                                <h4 className="font-bold text-gray-900">{review.name}</h4>
                                <p className="text-gray-500 text-sm whitespace-nowrap">{review.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
