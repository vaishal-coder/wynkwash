import { useState, useEffect, useRef } from 'react';
import { Menu, X, MessageCircle, Phone, Instagram, Youtube, QrCode } from 'lucide-react';

const WA_URL = "https://wa.me/918870037600?text=Hello%20Team!%20I%E2%80%99m%20interested%20in%20your%20premium%20doorstep%20car%20wash%20service%20in%20Bengaluru.%20Please%20share%20the%20available%20plans%2C%20pricing%2C%20and%20next%20available%20slot.%20Thank%20you.";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showQR, setShowQR] = useState(false);
    const qrRef = useRef();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close QR popover when clicking outside
    useEffect(() => {
        const handler = (e) => {
            if (qrRef.current && !qrRef.current.contains(e.target)) setShowQR(false);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Pricing', href: '#book' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-1' : 'bg-transparent py-2'}`}>
            <div className="container mx-auto px-4 md:px-6">

                {/* ── Main bar ── */}
                <div className="flex items-center justify-between gap-3">

                    {/* Logo */}
                    <a href="#home" className="flex items-center shrink-0">
                        <img
                            src={scrolled ? "/assets/logo_scrolled.png" : "/assets/logo.png"}
                            alt="WynkWash – Doorstep Car Wash Bangalore"
                            className="h-14 sm:h-16 w-auto max-w-[160px] md:max-w-[200px] transition-all duration-300 object-contain"
                        />
                    </a>

                    {/* ── Desktop Menu ── */}
                    <div className="hidden md:flex items-center gap-5">

                        {/* Nav links */}
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="flex items-center gap-4 border-l border-gray-300/40 pl-5">

                            {/* Social icons */}
                            <a href="https://instagram.com/wynkwash" target="_blank" rel="noopener noreferrer"
                                className={`hover:scale-110 transition-transform ${scrolled ? 'text-gray-400 hover:text-[#E4405F]' : 'text-white/70 hover:text-white'}`}
                                aria-label="Instagram">
                                <Instagram size={17} />
                            </a>
                            <a href="https://youtube.com/@wynkwash" target="_blank" rel="noopener noreferrer"
                                className={`hover:scale-110 transition-transform ${scrolled ? 'text-gray-400 hover:text-[#FF0000]' : 'text-white/70 hover:text-white'}`}
                                aria-label="YouTube">
                                <Youtube size={17} />
                            </a>

                            {/* Phone */}
                            <a href="tel:+918870037600"
                                className={`flex items-center gap-1.5 text-sm font-bold whitespace-nowrap ${scrolled ? 'text-blue-700' : 'text-white'}`}>
                                <Phone size={14} />
                                +91 88700 37600
                            </a>

                            {/* QR Popover trigger */}
                            <div className="relative" ref={qrRef}>
                                <button
                                    onClick={() => setShowQR(v => !v)}
                                    className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${scrolled
                                        ? 'border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-600'
                                        : 'border-white/25 text-white/80 hover:border-white hover:text-white'
                                        }`}
                                    aria-label="Show QR code"
                                >
                                    <QrCode size={14} />
                                    Scan QR
                                </button>

                                {/* QR Popover */}
                                {showQR && (
                                    <div className="absolute right-0 top-full mt-3 z-50 bg-white rounded-2xl shadow-2xl p-4 flex flex-col items-center gap-2 w-52 border border-gray-100"
                                        style={{ animation: 'fadeInDown .18s ease' }}>
                                        <img
                                            src="/assets/qr_code.png"
                                            alt="Scan QR to book WynkWash on WhatsApp"
                                            className="w-36 h-36 rounded-xl"
                                        />
                                        <p className="text-[#128C7E] font-bold text-xs text-center">Scan to Book on WhatsApp</p>
                                        <p className="text-gray-400 text-[10px] text-center">No login · No prepayment</p>
                                    </div>
                                )}
                            </div>

                            {/* WhatsApp CTA */}
                            <a
                                href={WA_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-white text-sm font-bold px-4 py-2 rounded-full transition-all shadow-lg whitespace-nowrap"
                                style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', boxShadow: '0 4px 16px rgba(37,211,102,0.35)' }}
                            >
                                <MessageCircle size={14} />
                                WhatsApp
                            </a>

                            {/* Book Now CTA */}
                            <a
                                href={WA_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/30 whitespace-nowrap"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>

                    {/* Mobile: Quick phone + Hamburger */}
                    <div className="md:hidden flex items-center gap-3">
                        <a href="tel:+918870037600"
                            className={`flex items-center gap-1 text-xs font-bold ${scrolled ? 'text-blue-700' : 'text-white'}`}>
                            <Phone size={14} />
                            <span className="hidden sm:inline">88700 37600</span>
                        </a>
                        <button
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
            </div>

            {/* ── Mobile Dropdown ── */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-5 md:hidden border-t border-gray-200">

                    {/* Nav links */}
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-900 font-semibold text-lg tracking-wide hover:text-blue-600 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* QR Code block */}
                    <div className="flex flex-col items-center gap-2 px-6 w-full">
                        <div className="bg-white rounded-2xl p-3 shadow-md border border-gray-100 inline-block">
                            <img
                                src="/assets/qr_code.png"
                                alt="Scan to Book WynkWash on WhatsApp"
                                className="w-32 h-32 rounded-xl"
                            />
                        </div>
                        <p className="text-[#128C7E] font-bold text-sm">Scan to Book on WhatsApp</p>
                        <p className="text-gray-400 text-xs">No login · No prepayment required</p>
                    </div>

                    {/* Action buttons */}
                    <div className="w-full px-6 flex flex-col gap-3">
                        {/* Phone */}
                        <a
                            href="tel:+918870037600"
                            className="flex items-center justify-center gap-2 py-3 bg-gray-100 rounded-xl text-blue-700 font-bold text-base"
                        >
                            <Phone size={18} />
                            +91 88700 37600
                        </a>

                        {/* WhatsApp */}
                        <a
                            href={WA_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 text-white py-3 rounded-xl font-bold text-base transition-all"
                            style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)' }}
                        >
                            <MessageCircle size={18} />
                            Contact via WhatsApp
                        </a>

                        {/* Book Now */}
                        <a
                            href={WA_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-base transition-all"
                        >
                            Book Now
                        </a>
                    </div>

                    {/* Social row */}
                    <div className="flex items-center gap-6 pt-1">
                        <a href="https://instagram.com/wynkwash" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                            className="text-gray-400 hover:text-[#E4405F] transition-colors">
                            <Instagram size={22} />
                        </a>
                        <a href="https://youtube.com/@wynkwash" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                            className="text-gray-400 hover:text-[#FF0000] transition-colors">
                            <Youtube size={22} />
                        </a>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </nav>
    );
}
