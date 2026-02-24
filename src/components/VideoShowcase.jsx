import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoShowcase() {
    return (
        <section className="py-24 bg-[#001f3f] relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        See the <span className="text-accent underline decoration-accent/30">Wynk Wash</span> in Action
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Watch how our professional team transforms vehicles right at your doorstep with premium care and precision.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto relative group"
                >
                    {/* Glassmorphism Frame */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-accent rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative bg-black rounded-[2rem] overflow-hidden shadow-2xl aspect-video">
                        <video
                            className="w-full h-full object-cover"
                            controls
                            poster="/assets/logo.png" // Using logo as placeholder if video takes time
                            muted
                            loop
                            autoPlay
                            playsInline
                        >
                            <source src="/assets/ad_video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Play Overlay (Optional, since we have controls) */}
                        {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center pointer-events-none">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform group-hover:scale-110 transition-transform">
                                <Play className="text-white fill-white ml-1" size={32} />
                            </div>
                        </div> */}
                    </div>
                </motion.div>

                <div className="mt-16 flex justify-center">
                    <div className="flex flex-wrap justify-center gap-8 text-blue-200">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                            <span className="font-medium">100% Doorstep Service</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                            <span className="font-medium">Eco-Friendly Cleaning</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                            <span className="font-medium">Professional Detailing</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
