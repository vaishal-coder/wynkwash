import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/918870037600"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-green-500/50 transition-all duration-300"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} />
        </a>
    );
}
