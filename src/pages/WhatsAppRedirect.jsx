import { useEffect } from 'react';

export default function WhatsAppRedirect() {
    useEffect(() => {
        // Redirect to WhatsApp immediately on component mount
        window.location.href = "https://wa.me/918870037600?text=Hello%20Team!%20I%E2%80%99m%20interested%20in%20your%20premium%20doorstep%20car%20wash%20service%20in%20Bengaluru.%20Please%20share%20the%20available%20plans%2C%20pricing%2C%20and%20next%20available%20slot.%20Thank%20you.";
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center">
            <div className="text-center text-white">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-white mx-auto mb-4"></div>
                <p className="text-xl font-semibold">Redirecting to WhatsApp...</p>
                <p className="text-sm opacity-80 mt-2">Please wait a moment</p>
            </div>
        </div>
    );
}
