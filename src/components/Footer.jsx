import { MessageCircle, MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const WA_URL = "https://wa.me/918870037600?text=Hello%20Team!%20I%E2%80%99m%20interested%20in%20your%20premium%20doorstep%20car%20wash%20service%20in%20Bengaluru.%20Please%20share%20the%20available%20plans%2C%20pricing%2C%20and%20next%20available%20slot.%20Thank%20you.";
const WA_PRICING_URL = "https://wa.me/918870037600?text=Hello%20Team!%20I%E2%80%99d%20like%20to%20know%20the%20pricing%20for%20your%20doorstep%20car%20wash%20service.%20Please%20share%20the%20packages%20and%20rates.%20Thank%20you.";

export default function Footer() {
    return (
        <footer className="bg-[#002244] text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand */}
                    <div className="space-y-6">
                        <img src="/assets/logo.png" alt="WynkWash – Doorstep Car Wash Bangalore" className="h-16 md:h-20 opacity-90 object-contain" />
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Premium doorstep car wash service in Bengaluru. We bring the shine to your doorstep with our professional team and eco-friendly products.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://instagram.com/wynkwash" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] transition-all duration-300 group">
                                <Instagram size={20} className="text-gray-400 group-hover:text-white" />
                            </a>
                            <a href="https://facebook.com/wynkwash" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300 group">
                                <Facebook size={20} className="text-gray-400 group-hover:text-white" />
                            </a>
                            <a href="https://youtube.com/@wynkwash" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF0000] transition-all duration-300 group">
                                <Youtube size={20} className="text-gray-400 group-hover:text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-3">
                        <h4 className="text-lg font-semibold text-blue-200 mb-2">Quick Links</h4>
                        <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
                        <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
                        <a
                            href={WA_PRICING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
                        >
                            <MessageCircle size={14} />
                            Pricing (Chat with us)
                        </a>
                    </div>

                    {/* Contact Us — all links active */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-blue-200 mb-2">Contact Us</h4>

                        {/* Location */}
                        <a
                            href="https://maps.app.goo.gl/8Sbyn1KqPxS33LTs7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                        >
                            <MapPin size={18} className="text-blue-400 mt-0.5 shrink-0 group-hover:text-blue-300" />
                            <span>Bengaluru, Karnataka, India</span>
                        </a>

                        {/* Phone — clickable */}
                        <a href="tel:+918870037600" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                            <Phone size={18} className="text-blue-400 group-hover:text-blue-300 shrink-0" />
                            <span className="font-semibold">+91 88700 37600</span>
                        </a>

                        {/* WhatsApp — clickable */}
                        <a
                            href={WA_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
                        >
                            <MessageCircle size={18} className="text-green-500 group-hover:text-green-400 shrink-0" />
                            <span>Book via WhatsApp</span>
                        </a>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Cloudcouch Tech Pvt Ltd. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
