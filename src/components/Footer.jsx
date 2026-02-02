import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#002244] text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <img src="/assets/logo.png" alt="WynkWash" className="h-10 w-fit opacity-90" />
                            <h4 className="text-blue-200 font-bold text-xl">Laggere Hub</h4>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Premium doorstep car wash service in Bengaluru. We bring the shine to your doorstep with our professional team and eco-friendly products.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-3">
                        <h4 className="text-lg font-semibold text-blue-200 mb-2">Quick Links</h4>
                        <a href="#hero" className="text-gray-400 hover:text-white transition-colors">Home</a>
                        <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
                        <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
                        <a href="#areas" className="text-gray-400 hover:text-white transition-colors">Service Areas</a>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-blue-200 mb-2">Contact Us</h4>
                        <div className="flex items-start gap-3 text-gray-400">
                            <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                            <span>Laggere, Bangalore</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                            <Phone size={18} className="text-blue-400" />
                            <span>+91 88700 37600</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                            <MessageCircle size={18} className="text-blue-400" />
                            <span>Book via WhatsApp</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} WynkWash. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
