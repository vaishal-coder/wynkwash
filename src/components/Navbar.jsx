import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

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
                <a href="#" className="flex items-center gap-3">
                    {/* Logo - assuming logo.png exists */}
                    <img src="/assets/logo.png" alt="WynkWash" className="h-10 w-auto" />
                    <span className={`font-bold text-lg tracking-tight ${scrolled ? 'text-primary' : 'text-white'}`}>
                        Laggere Hub
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg shadow-blue-600/30">
                        Contact Us
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    {isOpen ? <X className={scrolled ? 'text-gray-800' : 'text-white'} /> : <Menu className={scrolled ? 'text-gray-800' : 'text-white'} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-4 md:hidden animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-800 font-medium text-lg">
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-md">
                        Contact Us
                    </a>
                </div>
            )}
        </nav>
    );
}
