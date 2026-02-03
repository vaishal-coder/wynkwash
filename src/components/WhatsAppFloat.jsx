import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/918870037600?text=Hello%20Team!%20I%E2%80%99m%20interested%20in%20your%20premium%20doorstep%20car%20wash%20service%20in%20Bengaluru.%20Please%20share%20the%20available%20plans%2C%20pricing%2C%20and%20next%20available%20slot.%20Thank%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-green-500/50 transition-all duration-300"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
        </a>
    );
}
