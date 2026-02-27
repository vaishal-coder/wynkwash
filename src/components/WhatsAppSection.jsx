import { MessageCircle, Phone } from 'lucide-react';

export default function WhatsAppSection() {
    return (
        <section id="book" className="py-20 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white">
            <div className="container mx-auto px-6 flex flex-col items-center md:flex-row md:justify-between gap-12">

                {/* Left: CTA text + buttons */}
                <div className="text-center md:text-left flex flex-col items-center md:items-start max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-black mb-3 leading-tight">Book Instantly on WhatsApp</h2>
                    <p className="text-lg md:text-xl opacity-90 mb-6">No login required. Just scan or click to chat.</p>

                    {/* Phone number — large & prominent */}
                    <a
                        href="tel:+918870037600"
                        className="flex items-center gap-3 mb-6 group"
                    >
                        <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                            <Phone size={20} className="text-white" />
                        </span>
                        <span className="text-3xl md:text-4xl font-black tracking-tight text-white drop-shadow-sm">
                            +91 88700 37600
                        </span>
                    </a>

                    {/* WhatsApp CTA */}
                    <a
                        href="https://wa.me/918870037600?text=Hello%20Team!%20I%E2%80%99m%20interested%20in%20your%20premium%20doorstep%20car%20wash%20service%20in%20Bengaluru.%20Please%20share%20the%20available%20plans%2C%20pricing%2C%20and%20next%20available%20slot.%20Thank%20you."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-[#128C7E] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl active:scale-95"
                    >
                        <MessageCircle size={22} />
                        Chat with Us on WhatsApp
                    </a>
                </div>

                {/* Right: large QR */}
                <div className="flex flex-col items-center gap-4">
                    <div className="bg-white p-5 rounded-[2rem] shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500">
                        <img
                            src="/assets/qr_code.png"
                            alt="Scan QR to book WynkWash on WhatsApp"
                            className="w-56 h-56 md:w-64 md:h-64 block"
                        />
                    </div>
                    <p className="text-white font-bold text-base tracking-[0.15em] uppercase opacity-90">Scan to Book Instantly</p>
                </div>

            </div>
        </section>
    );
}
