import { MessageCircle } from 'lucide-react';

export default function WhatsAppSection() {
    return (
        <section className="py-20 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white">
            <div className="container mx-auto px-6 flex flex-col items-center md:flex-row md:justify-between gap-12">
                <div className="text-center md:text-left flex flex-col items-center md:items-start max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Instantly on WhatsApp</h2>
                    <p className="text-lg md:text-xl opacity-90 mb-8 px-4 md:px-0">No login required. Just scan or click to chat.</p>
                    <a
                        href="https://wa.me/918870037600?text=Hello%20Team!%20I%E2%80%99m%20interested%20in%20your%20premium%20doorstep%20car%20wash%20service%20in%20Bengaluru.%20Please%20share%20the%20available%20plans%2C%20pricing%2C%20and%20next%20available%20slot.%20Thank%20you."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-[#128C7E] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg active:scale-95"
                    >
                        <MessageCircle size={24} />
                        Chat with Us on WhatsApp
                    </a>
                </div>

                <div className="bg-white p-6 rounded-[2rem] shadow-2xl text-center rotate-2 md:rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img
                        src="/assets/qr_code.png"
                        alt="Scan to Book"
                        className="w-40 h-40 md:w-48 md:h-48 mb-3 mx-auto"
                    />
                    <p className="text-gray-800 font-bold tracking-wide">SCAN TO BOOK</p>
                </div>
            </div>
        </section>
    );
}
