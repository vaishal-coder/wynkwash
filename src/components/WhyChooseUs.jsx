import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Clock, Leaf, Award, Smile } from 'lucide-react';

const reasons = [
    {
        icon: <ShieldCheck className="text-accent" />,
        title: "Trust & Safety",
        desc: "Our team consists of verified professionals who treat your vehicle with the utmost care. We use industry-standard protocols to ensure your car's safety during the entire cleaning process."
    },
    {
        icon: <Zap className="text-accent" />,
        title: "Instant Booking",
        desc: "No complicated forms. Just one click to WhatsApp and you are booked. We value your time and offer a seamless, digital-first experience for all Bengaluru residents."
    },
    {
        icon: <Clock className="text-accent" />,
        title: "Punctuality",
        desc: "We arrive at your location exactly when promised. Our mobile units are strategically positioned across Bengaluru to minimize wait times."
    },
    {
        icon: <Leaf className="text-accent" />,
        title: "Eco-Friendly Products",
        desc: "We use high-quality, biodegradable cleaning agents that are tough on dirt but gentle on your car's paint and the environment. Save water without compromising on shine."
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-bold text-primary mb-6">Why WynkWash is Bengalurus #1 Doorstep Car Spa</h2>
                        <div className="prose prose-blue text-gray-600 space-y-4 max-w-none">
                            <p>
                                Finding a reliable car wash in a busy city like Bengaluru can be a daunting task. Taking your car to a physical service center often means losing half your day. That is where <strong>WynkWash</strong> steps in. We bring the entire car spa experience directly to your doorstep, whether you are at home or at your office.
                            </p>
                            <p>
                                Our mission is to provide premium vehicle care that combines convenience with unmatched quality. We do not just wash cars; we rejuvenate them. Our professional detailing team uses advanced pressure washers, high-grade microfiber towels, and premium waxes to ensure every inch of your vehicle shines like it just rolled out of the showroom.
                            </p>
                            <p>
                                At WynkWash, we understand that every car is different. A hatchback like an Alto requires a different approach than a luxury BMW or a rugged XUV700. That is why we offer tailored packages designed specifically for your vehicle type. From basic exterior washes to complete interior deep cleaning and paint protection, we have a solution for every need and budget.
                            </p>
                            <p>
                                We are proud to serve the vibrant communities across Bengaluru. By choosing WynkWash, you are not just getting a clean car; you are reclaiming your time and supporting a service that prioritizes quality, reliability, and customer satisfaction above all else. Our recurring maintenance plans are particularly popular, providing consistent care that preserves your car's resale value and aesthetic appeal year-round.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {reasons.map((r, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                    <div className="mt-1">{r.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{r.title}</h4>
                                        <p className="text-sm text-gray-500">{r.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1200"
                                alt="Professional Car Detailing Service"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent rounded-full -z-0 opacity-20 blur-2xl"></div>
                        <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary rounded-full -z-0 opacity-20 blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
