import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Instagram, Youtube } from 'lucide-react';

const WA_URL = "https://wa.me/918870037600?text=Hello%20Team!%20I%E2%80%99m%20interested%20in%20your%20premium%20doorstep%20car%20wash%20service%20in%20Bengaluru.%20Please%20share%20the%20available%20plans%2C%20pricing%2C%20and%20next%20available%20slot.%20Thank%20you.";
const WA_PRICING_URL = "https://wa.me/918870037600?text=Hello%20Team!%20I%E2%80%99d%20like%20to%20know%20the%20pricing%20for%20your%20doorstep%20car%20wash%20service.%20Please%20share%20the%20packages%20and%20rates.%20Thank%20you.";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Pricing', href: WA_PRICING_URL, external: true },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-1' : 'bg-transparent py-2'}`}>
            <div className="container mx-auto px-4 md:px-6">

                {/* ── Main bar ── */}
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <a href="#home" className="flex items-center shrink-0">
                        <img
                            src={scrolled ? "/assets/logo_scrolled.png" : "/assets/logo.png"}
                            alt="WynkWash – Doorstep Car Wash Bangalore"
                            className="h-20 sm:h-24 md:h-28 w-auto max-w-[200px] md:max-w-[280px] transition-all duration-300 object-contain"
                        />
                    </a>

                    {/* ── Mobile: phone + QR strip between logo and hamburger ── */}
                    <div className="flex md:hidden items-center gap-3 flex-1 justify-center px-3">
                        <a
                            href="tel:+918870037600"
                            className={`flex items-center gap-1.5 font-black text-sm tracking-tight ${scrolled ? 'text-blue-700' : 'text-white'}`}
                        >
                            <Phone size={13} />
                            88700&nbsp;37600
                        </a>
                        <a
                            href={WA_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0"
                            aria-label="Scan QR to book on WhatsApp"
                        >
                            <div className={`rounded-lg overflow-hidden border-2 transition-colors ${scrolled ? 'border-blue-200' : 'border-white/30'}`}>
                                <img
                                    src="/assets/qr_code.png"
                                    alt="QR code – book WynkWash on WhatsApp"
                                    className="w-10 h-10 block"
                                />
                            </div>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-7">
                        {navLinks.map((link) =>
                            link.external ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-sm font-semibold transition-colors ${scrolled ? 'text-green-700 hover:text-green-600' : 'text-green-300 hover:text-white'}`}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
                                >
                                    {link.name}
                                </a>
                            )
                        )}

                        <div className="flex items-center gap-5 border-l border-gray-300/40 pl-7">
                            {/* Social */}
                            <a href="https://instagram.com/wynkwash" target="_blank" rel="noopener noreferrer" className={`hover:scale-110 transition-transform ${scrolled ? 'text-gray-400 hover:text-[#E4405F]' : 'text-white/70 hover:text-white'}`} aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="https://youtube.com/@wynkwash" target="_blank" rel="noopener noreferrer" className={`hover:scale-110 transition-transform ${scrolled ? 'text-gray-400 hover:text-[#FF0000]' : 'text-white/70 hover:text-white'}`} aria-label="YouTube">
                                <Youtube size={18} />
                            </a>

                            {/* Phone */}
                            <a href="tel:+918870037600" className={`flex items-center gap-1.5 text-sm font-bold ${scrolled ? 'text-blue-700' : 'text-white'}`}>
                                <Phone size={15} />
                                +91 88700 37600
                            </a>

                            {/* Book Now CTA */}
                            <a
                                href={WA_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/30"
                            >
                                <MessageCircle size={14} />
                                Book Now
                            </a>
                        </div>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden shrink-0"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen
                            ? <X size={26} className={scrolled ? 'text-gray-800' : 'text-white'} />
                            : <Menu size={26} className={scrolled ? 'text-gray-800' : 'text-white'} />
                        }
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-2xl py-8 flex flex-col items-center gap-5 md:hidden border-t border-gray-100">
                    {navLinks.map((link) =>
                        link.external ? (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="text-green-700 font-bold text-xl tracking-wide hover:text-green-600 transition-colors"
                            >
                                💬 {link.name}
                            </a>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-800 font-semibold text-xl tracking-wide hover:text-blue-600 transition-colors"
                            >
                                {link.name}
                            </a>
                        )
                    )}

                    <div className="w-full px-8 flex flex-col gap-3 mt-2">
                        <a
                            href="tel:+918870037600"
                            className="flex items-center justify-center gap-3 py-4 bg-gray-50 rounded-2xl text-blue-700 font-bold text-lg"
                        >
                            <Phone size={20} />
                            +91 88700 37600
                        </a>
                        <a
                            href={WA_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/20 transition-all"
                        >
                            <MessageCircle size={20} />
                            Book via WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
