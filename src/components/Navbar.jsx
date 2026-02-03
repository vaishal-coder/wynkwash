import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Services', href: '#services' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Areas', href: '#areas' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2">
                    {/* Logo - assuming logo.png exists */}
                    <img src="/assets/logo.png" alt="WynkWash" className="h-12 w-auto" />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
                            {link.name}
                        </a>
                    ))}

                    <div className="flex items-center gap-6 border-l border-gray-200 pl-8 h-6">
                        <div className="flex items-center gap-3">
                            <a href="https://instagram.com/wynkwash" target="_blank" rel="noopener noreferrer" className={`hover:scale-110 transition-transform ${scrolled ? 'text-gray-400 hover:text-[#E4405F]' : 'text-white/70 hover:text-white'}`}>
                                <Instagram size={18} />
                            </a>
                            <a href="https://youtube.com/@wynkwash" target="_blank" rel="noopener noreferrer" className={`hover:scale-110 transition-transform ${scrolled ? 'text-gray-400 hover:text-[#FF0000]' : 'text-white/70 hover:text-white'}`}>
                                <Youtube size={18} />
                            </a>
                        </div>
                        <a href="tel:+918870037600" className={`flex items-center gap-2 text-sm font-bold ${scrolled ? 'text-primary' : 'text-white'}`}>
                            <Phone size={16} />
                            +91 88700 37600
                        </a>
                        <a href="https://wa.me/918870037600?text=Hello%20Team!%20I%E2%80%99m%20interested%20in%20your%20premium%20doorstep%20car%20wash%20service%20in%20Bengaluru.%20Please%20share%20the%20available%20plans%2C%20pricing%2C%20and%20next%20available%20slot.%20Thank%20you." target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-600/30">
                            Book Now
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    {isOpen ? <X className={scrolled ? 'text-gray-800' : 'text-white'} /> : <Menu className={scrolled ? 'text-gray-800' : 'text-white'} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-2xl py-8 flex flex-col items-center gap-6 md:hidden animate-in slide-in-from-top-5 border-t border-gray-100">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-800 font-semibold text-xl tracking-wide hover:text-blue-600 transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <div className="w-full px-10 flex flex-col gap-4 mt-4">
                        <a href="tel:+918870037600" className="flex items-center justify-center gap-3 py-4 bg-gray-50 rounded-2xl text-primary font-bold text-lg">
                            <Phone size={20} />
                            +91 88700 37600
                        </a>
                        <a href="https://wa.me/918870037600?text=Hello%20Team!%20I%E2%80%99m%20interested%20in%20your%20premium%20doorstep%20car%20wash%20service%20in%20Bengaluru.%20Please%20share%20the%20available%20plans%2C%20pricing%2C%20and%20next%20available%20slot.%20Thank%20you." target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white py-4 rounded-2xl font-bold font-lg shadow-xl shadow-blue-600/20 text-center">
                            Book via WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
