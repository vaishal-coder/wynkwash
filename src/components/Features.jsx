import { motion } from 'framer-motion';

/* ─────────────────────────────────────
   PREMIUM SVG ICON COMPONENTS
   Style: 3D metallic, navy/chrome/aqua
───────────────────────────────────── */

function IconDoorstep() {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
                <radialGradient id="bg1" cx="50%" cy="35%" r="55%">
                    <stop offset="0%" stopColor="#1a4a7a" />
                    <stop offset="100%" stopColor="#071829" />
                </radialGradient>
                <radialGradient id="pin_grad" cx="40%" cy="30%" r="60%">
                    <stop offset="0%" stopColor="#60c8f0" />
                    <stop offset="50%" stopColor="#1e6db5" />
                    <stop offset="100%" stopColor="#0a3060" />
                </radialGradient>
                <radialGradient id="car_chrome" cx="30%" cy="20%" r="70%">
                    <stop offset="0%" stopColor="#c8dff0" />
                    <stop offset="40%" stopColor="#7aaed4" />
                    <stop offset="100%" stopColor="#1a4a7a" />
                </radialGradient>
                <filter id="glow1">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <linearGradient id="drop1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#88ddff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#0066aa" stopOpacity="0.6" />
                </linearGradient>
            </defs>
            {/* Background orb */}
            <circle cx="40" cy="40" r="36" fill="url(#bg1)" />
            <circle cx="40" cy="40" r="36" stroke="#1e5a8a" strokeWidth="0.8" strokeOpacity="0.5" />
            {/* Rim light */}
            <circle cx="40" cy="40" r="36" stroke="url(#drop1)" strokeWidth="0.5" strokeOpacity="0.3" />
            {/* Location pin body */}
            <path d="M40 14C32 14 25.5 20.5 25.5 28.5C25.5 38 40 54 40 54C40 54 54.5 38 54.5 28.5C54.5 20.5 48 14 40 14Z"
                fill="url(#pin_grad)" filter="url(#glow1)" />
            {/* Pin shine */}
            <path d="M36 18C33 20 31 23.5 31 27.5" stroke="#88ddff" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7" />
            {/* Inner dot */}
            <circle cx="40" cy="28.5" r="5.5" fill="#071829" />
            <circle cx="40" cy="28.5" r="5.5" stroke="#60c8f0" strokeWidth="0.8" strokeOpacity="0.6" />
            {/* Pin highlight */}
            <ellipse cx="37" cy="22" rx="3" ry="2" fill="#c0e8ff" opacity="0.25" />
            {/* Car silhouette below pin */}
            <g transform="translate(27, 55) scale(0.65)">
                {/* Car body */}
                <rect x="0" y="8" width="40" height="10" rx="3" fill="url(#car_chrome)" />
                <rect x="6" y="2" width="26" height="9" rx="3" fill="url(#car_chrome)" />
                {/* Wheels */}
                <circle cx="9" cy="18" r="4" fill="#0a1a2e" stroke="#60c8f0" strokeWidth="1" />
                <circle cx="31" cy="18" r="4" fill="#0a1a2e" stroke="#60c8f0" strokeWidth="1" />
                <circle cx="9" cy="18" r="1.5" fill="#7aaed4" />
                <circle cx="31" cy="18" r="1.5" fill="#7aaed4" />
            </g>
            {/* Water drop accent */}
            <path d="M61 20C61 20 63 23.5 63 25.5C63 27.5 62.1 28.5 61 28.5C59.9 28.5 59 27.5 59 25.5C59 23.5 61 20 61 20Z"
                fill="url(#drop1)" opacity="0.8" />
        </svg>
    );
}

function IconProTeam() {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
                <radialGradient id="bg2" cx="50%" cy="35%" r="55%">
                    <stop offset="0%" stopColor="#1a3a6a" />
                    <stop offset="100%" stopColor="#060e1c" />
                </radialGradient>
                <linearGradient id="shield_grad" x1="20%" y1="0%" x2="80%" y2="100%">
                    <stop offset="0%" stopColor="#b8cee8" />
                    <stop offset="30%" stopColor="#5a8ec4" />
                    <stop offset="100%" stopColor="#0e3060" />
                </linearGradient>
                <linearGradient id="wrench_grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c8dff0" />
                    <stop offset="100%" stopColor="#3a78b8" />
                </linearGradient>
                <filter id="glow2">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <radialGradient id="aqua2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#38d4f5" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#0055aa" stopOpacity="0" />
                </radialGradient>
            </defs>
            <circle cx="40" cy="40" r="36" fill="url(#bg2)" />
            <circle cx="40" cy="40" r="36" stroke="#2a5090" strokeWidth="0.8" strokeOpacity="0.4" />
            {/* Aqua glow center */}
            <circle cx="40" cy="40" r="20" fill="url(#aqua2)" />
            {/* Shield */}
            <path d="M40 16L56 22V36C56 46 40 58 40 58C40 58 24 46 24 36V22L40 16Z"
                fill="url(#shield_grad)" filter="url(#glow2)" />
            {/* Shield inner border */}
            <path d="M40 20L52 25V36C52 44 40 53.5 40 53.5C40 53.5 28 44 28 36V25L40 20Z"
                fill="none" stroke="#88c8f0" strokeWidth="0.7" strokeOpacity="0.5" />
            {/* Shield shine */}
            <path d="M33 22C31 24.5 30 27.5 30 30" stroke="#c0e8ff" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.6" />
            {/* Wrench icon inside shield */}
            <g transform="translate(40,37) rotate(-45)" filter="url(#glow2)">
                <rect x="-2.5" y="-10" width="5" height="20" rx="2.5" fill="url(#wrench_grad)" />
                <circle cx="0" cy="-10" r="5" fill="none" stroke="url(#wrench_grad)" strokeWidth="3" />
                <circle cx="0" cy="10" r="3.5" fill="none" stroke="url(#wrench_grad)" strokeWidth="2.5" />
            </g>
            {/* Star accents */}
            <circle cx="22" cy="22" r="1.5" fill="#38d4f5" opacity="0.8" />
            <circle cx="58" cy="22" r="1" fill="#38d4f5" opacity="0.6" />
            <circle cx="20" cy="52" r="1" fill="#38d4f5" opacity="0.5" />
        </svg>
    );
}

function IconPremiumProducts() {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
                <radialGradient id="bg3" cx="45%" cy="30%" r="60%">
                    <stop offset="0%" stopColor="#103560" />
                    <stop offset="100%" stopColor="#060d1a" />
                </radialGradient>
                <radialGradient id="drop_main" cx="35%" cy="25%" r="65%">
                    <stop offset="0%" stopColor="#a8e8ff" />
                    <stop offset="35%" stopColor="#30a0e0" />
                    <stop offset="100%" stopColor="#0a3566" />
                </radialGradient>
                <radialGradient id="pad_grad" cx="30%" cy="20%" r="70%">
                    <stop offset="0%" stopColor="#8aaac8" />
                    <stop offset="50%" stopColor="#3a6898" />
                    <stop offset="100%" stopColor="#0e2a4a" />
                </radialGradient>
                <filter id="glow3">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="softglow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>
            <circle cx="40" cy="40" r="36" fill="url(#bg3)" />
            <circle cx="40" cy="40" r="36" stroke="#1a5080" strokeWidth="0.8" strokeOpacity="0.5" />
            {/* Wax pad (bottom) */}
            <ellipse cx="40" cy="56" rx="18" ry="6" fill="url(#pad_grad)" />
            <ellipse cx="40" cy="56" rx="18" ry="6" stroke="#5a90c0" strokeWidth="0.7" strokeOpacity="0.5" />
            <ellipse cx="36" cy="54.5" rx="5" ry="1.5" fill="#a0c8e8" opacity="0.25" />
            {/* Pad handle */}
            <rect x="37" y="46" width="6" height="12" rx="3" fill="url(#pad_grad)" />
            {/* Main water droplet */}
            <path d="M40 14C40 14 28 30 28 38C28 44.6 33.4 50 40 50C46.6 50 52 44.6 52 38C52 30 40 14 40 14Z"
                fill="url(#drop_main)" filter="url(#softglow)" />
            {/* Droplet inner shine convex */}
            <path d="M35 25C33 28 32 32 32 35" stroke="#c8f0ff" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.55" />
            {/* Reflective highlight */}
            <ellipse cx="36.5" cy="30" rx="3.5" ry="5" fill="#d8f4ff" opacity="0.22" transform="rotate(-15 36.5 30)" />
            {/* Sparkle top */}
            <g filter="url(#glow3)">
                <line x1="55" y1="16" x2="55" y2="22" stroke="#38d4f5" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="52.5" y1="19" x2="57.5" y2="19" stroke="#38d4f5" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="53" y1="17" x2="57" y2="21" stroke="#38d4f5" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.6" />
                <line x1="57" y1="17" x2="53" y2="21" stroke="#38d4f5" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.6" />
            </g>
            {/* Small sparkle */}
            <g filter="url(#glow3)" opacity="0.7">
                <line x1="22" y1="30" x2="22" y2="34" stroke="#88ccff" strokeWidth="1" strokeLinecap="round" />
                <line x1="20" y1="32" x2="24" y2="32" stroke="#88ccff" strokeWidth="1" strokeLinecap="round" />
            </g>
        </svg>
    );
}

function IconPricing() {
    return (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
                <radialGradient id="bg4" cx="50%" cy="35%" r="55%">
                    <stop offset="0%" stopColor="#162848" />
                    <stop offset="100%" stopColor="#060c18" />
                </radialGradient>
                <linearGradient id="badge_outer" x1="20%" y1="0%" x2="80%" y2="100%">
                    <stop offset="0%" stopColor="#a8c4e0" />
                    <stop offset="40%" stopColor="#4888c4" />
                    <stop offset="100%" stopColor="#0a2850" />
                </linearGradient>
                <linearGradient id="badge_inner" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a3860" />
                    <stop offset="100%" stopColor="#0c1e38" />
                </linearGradient>
                <linearGradient id="tag_grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c8dff0" />
                    <stop offset="100%" stopColor="#4488c0" />
                </linearGradient>
                <filter id="glow4">
                    <feGaussianBlur stdDeviation="1.8" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>
            <circle cx="40" cy="40" r="36" fill="url(#bg4)" />
            <circle cx="40" cy="40" r="36" stroke="#2a5090" strokeWidth="0.8" strokeOpacity="0.4" />
            {/* Octagonal badge outer ring */}
            <path d="M40 12L53 17.5L62.5 27L65 40L62.5 53L53 62.5L40 65L27 62.5L17.5 53L15 40L17.5 27L27 17.5Z"
                fill="url(#badge_outer)" filter="url(#glow4)" />
            {/* Badge inner fill */}
            <path d="M40 17L51 21.5L58.5 29L61 40L58.5 51L51 58.5L40 61L29 58.5L21.5 51L19 40L21.5 29L29 21.5Z"
                fill="url(#badge_inner)" />
            {/* Badge inner stroke shine */}
            <path d="M40 17L51 21.5L58.5 29L61 40L58.5 51L51 58.5L40 61L29 58.5L21.5 51L19 40L21.5 29L29 21.5Z"
                fill="none" stroke="#60a0d8" strokeWidth="0.6" strokeOpacity="0.4" />
            {/* Price tag symbol - ₹ */}
            <text
                x="40" y="46"
                textAnchor="middle"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontWeight="700"
                fontSize="22"
                fill="url(#tag_grad)"
                filter="url(#glow4)"
            >₹</text>
            {/* Shine on badge */}
            <path d="M28 20C25 23 23 27 22 31" stroke="#c0e0f8" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.5" />
            {/* Tick mark bottom right */}
            <g filter="url(#glow4)" transform="translate(50, 52)">
                <circle cx="0" cy="0" r="7.5" fill="#0ea5e9" />
                <path d="M-3.5 0L-1 2.5L4 -2.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    );
}

/* ─────────────────────────────────────
   FEATURES DATA
───────────────────────────────────── */
const features = [
    {
        Icon: IconDoorstep,
        title: "Doorstep Convenience",
        desc: "We come to you — at home or office — with our own water supply and professional equipment.",
        glow: "#0ea5e9",
    },
    {
        Icon: IconProTeam,
        title: "Pro Team",
        desc: "Background-verified professionals trained in precision detailing for every vehicle type.",
        glow: "#3b82f6",
    },
    {
        Icon: IconPremiumProducts,
        title: "Premium Products",
        desc: "3M branded wax, shampoos and microfiber tools — the same quality used by auto showrooms.",
        glow: "#06b6d4",
    },
    {
        Icon: IconPricing,
        title: "Transparent Pricing",
        desc: "No hidden charges. Fixed pricing upfront. No prepayment required — pay only after service.",
        glow: "#0284c7",
    },
];

/* ─────────────────────────────────────
   SECTION COMPONENT
───────────────────────────────────── */
export default function Features() {
    return (
        <section className="py-28 relative overflow-hidden bg-white">

            <div className="container mx-auto px-6 relative z-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-xs font-bold tracking-[0.25em] uppercase text-blue-500 mb-4">
                        Why Choose Us
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                        Why WynkWash?
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
                        International-standard care delivered to your parking spot.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map(({ Icon, title, desc, glow }, i) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: i * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative rounded-3xl p-7 text-center transition-all duration-500 cursor-default bg-white shadow-lg hover:shadow-2xl hover:shadow-blue-100 border border-gray-100"
                        >
                            {/* Hover top border */}
                            <div
                                className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-3/4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `linear-gradient(90deg, transparent, ${glow}, transparent)` }}
                            />

                            {/* Icon */}
                            <div className="relative w-20 h-20 mx-auto mb-7 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                <div
                                    className="absolute inset-0 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                                    style={{ background: glow }}
                                />
                                <Icon />
                            </div>

                            {/* Text */}
                            <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">{title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
