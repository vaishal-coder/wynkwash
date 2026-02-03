import { MessageSquare, Car, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: MessageSquare,
        title: "1. Select & Book",
        desc: "Choose your vehicle type and plan. Send us a quick 'Hi' on WhatsApp to schedule your slot."
    },
    {
        icon: Car,
        title: "2. We Arrive",
        desc: "Our professional team arrives at your doorstep with all necessary equipment, including water and power."
    },
    {
        icon: Sparkles,
        title: "3. Car is Wynked",
        desc: "Enjoy your fresh, sparkling car. No hassle, no driving to a wash — just pure convenience."
    }
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">How It Works</h2>
                    <p className="text-gray-500 text-lg">Your car's spa day in 3 simple steps</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative text-center group">
                            {index < 2 && (
                                <div className="hidden md:block absolute top-12 left-2/3 w-full border-t-2 border-dashed border-blue-200 z-0"></div>
                            )}
                            <div className="relative z-10">
                                <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-accent shadow-xl mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <step.icon size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                                <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
