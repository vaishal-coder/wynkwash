import { MessageCircle } from 'lucide-react';

export default function WhatsAppSection() {
    return (
        <section className="py-20 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="text-center md:text-left">
                    <h2 className="text-4xl font-bold mb-4">Book Instantly on WhatsApp</h2>
                    <p className="text-xl opacity-90 mb-8">No login required. Just scan or click to chat.</p>
                    <a
                        href="https://wa.me/918870037600"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-[#128C7E] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        <MessageCircle size={24} />
                        Chat with Us on WhatsApp
                    </a>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-xl text-center">
                    <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/918870037600"
                        alt="Scan QR code to book via WhatsApp"
                        className="w-48 h-48 mb-2"
                        width="200"
                        height="200"
                        loading="lazy"
                        decoding="async"
                    />
                    <p className="text-gray-800 font-medium">Scan to Book</p>
                </div>
            </div>
        </section>
    );
}
