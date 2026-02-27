import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, CheckCircle, Clock, Percent, Gift } from 'lucide-react';

/* ─────────────────────────────────────
   CANVAS: Water Rain + Click Ripples
───────────────────────────────────── */
function useWaterCanvas(canvasRef) {
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const ripples = [];

        const resize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resize();
        window.addEventListener('resize', resize);

        // Water droplets — right half of screen (where car would be)
        const drops = Array.from({ length: 160 }, (_, i) => ({
            x: Math.random() * 100,            // full width
            y: Math.random() * 100,
            r: 0.8 + Math.random() * 2.2,
            vx: (Math.random() - 0.5) * 0.15,
            vy: 1.2 + Math.random() * 2.2,
            opacity: 0.08 + Math.random() * 0.28,
            streak: 2 + Math.random() * 5,
        }));

        // Mouse ripple on click
        canvas.addEventListener('mousedown', (e) => {
            const rect = canvas.getBoundingClientRect();
            ripples.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, r: 0, opacity: 0.7 });
        });

        let raf;
        const W = () => canvas.offsetWidth;
        const H = () => canvas.offsetHeight;

        const animate = () => {
            ctx.clearRect(0, 0, W(), H());

            // Water drops
            drops.forEach(d => {
                const px = (d.x / 100) * W();
                const py = (d.y / 100) * H();

                // Streak
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(px + d.vx * d.streak, py + d.streak * 3);
                const grad = ctx.createLinearGradient(px, py, px, py + d.streak * 3);
                grad.addColorStop(0, `rgba(120,200,255,${d.opacity})`);
                grad.addColorStop(1, `rgba(60,140,255,0)`);
                ctx.strokeStyle = grad;
                ctx.lineWidth = d.r * 0.9;
                ctx.lineCap = 'round';
                ctx.stroke();

                // Droplet head
                ctx.beginPath();
                ctx.arc(px, py, d.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(140,210,255,${d.opacity * 1.4})`;
                ctx.fill();

                d.y += d.vy * 0.04;
                d.x += d.vx * 0.04;
                if (d.y > 102) { d.y = -3; d.x = Math.random() * 100; }
            });

            // Ripple rings
            for (let i = ripples.length - 1; i >= 0; i--) {
                const rip = ripples[i];
                ctx.beginPath();
                ctx.arc(rip.x, rip.y, rip.r, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(100,200,255,${rip.opacity})`;
                ctx.lineWidth = 2;
                ctx.stroke();
                rip.r += 3.5;
                rip.opacity -= 0.018;
                if (rip.opacity <= 0) ripples.splice(i, 1);
            }

            // Subtle water-shine sweep (horizontal shimmer)
            const time = Date.now() * 0.001;
            const shimX = ((Math.sin(time * 0.4) * 0.5 + 0.5) * W() * 0.6) + W() * 0.3;
            const shimGrad = ctx.createLinearGradient(shimX - 60, 0, shimX + 60, 0);
            shimGrad.addColorStop(0, 'rgba(120,200,255,0)');
            shimGrad.addColorStop(0.5, 'rgba(120,200,255,0.04)');
            shimGrad.addColorStop(1, 'rgba(120,200,255,0)');
            ctx.fillStyle = shimGrad;
            ctx.fillRect(0, 0, W(), H());

            raf = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
        };
    }, []);
}

/* ─────────────────────────────────────
   CONFETTI BURST — fires once on mount
───────────────────────────────────── */
function useConfetti(canvasRef, delay = 0) {
    useEffect(() => {
        const timer = setTimeout(() => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            const W = canvas.offsetWidth;
            const H = canvas.offsetHeight;
            canvas.width = W;
            canvas.height = H;

            const COLORS = [
                '#38bdf8', '#67e8f9', '#a5f3fc',
                '#60b8ff', '#ffffff', '#7dd3fc',
                '#0ea5e9', '#06b6d4', '#e0f2fe',
            ];
            const particles = Array.from({ length: 60 }, () => ({
                x: W / 2, y: H / 2,
                vx: (Math.random() - 0.5) * 10,
                vy: (Math.random() - 0.5) * 10 - 3,
                r: 3 + Math.random() * 4,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                alpha: 1,
                rot: Math.random() * Math.PI * 2,
                rotV: (Math.random() - 0.5) * 0.3,
            }));

            let raf;
            const tick = () => {
                ctx.clearRect(0, 0, W, H);
                let alive = false;
                particles.forEach(p => {
                    if (p.alpha <= 0) return;
                    alive = true;
                    p.x += p.vx;
                    p.y += p.vy;
                    p.vy += 0.25; // gravity
                    p.alpha -= 0.022;
                    p.rot += p.rotV;
                    ctx.save();
                    ctx.globalAlpha = Math.max(0, p.alpha);
                    ctx.fillStyle = p.color;
                    ctx.translate(p.x, p.y);
                    ctx.rotate(p.rot);
                    ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.6);
                    ctx.restore();
                });
                if (alive) raf = requestAnimationFrame(tick);
                else ctx.clearRect(0, 0, W, H);
            };
            tick();
            return () => cancelAnimationFrame(raf);
        }, delay);
        return () => clearTimeout(timer);
    }, []);
}

export default function Hero() {
    const canvasRef = useRef();
    const sectionRef = useRef();
    const confettiL = useRef();
    const confettiR = useRef();
    const [sideAdsVisible, setSideAdsVisible] = useState(true);
    useWaterCanvas(canvasRef);
    useConfetti(confettiL, 700);   // fires 700ms after mount (left card)
    useConfetti(confettiR, 900);   // fires 900ms after mount (right card)

    // Hide side ads once user scrolls past the hero section
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const heroBottom = sectionRef.current.getBoundingClientRect().bottom;
            setSideAdsVisible(heroBottom > 80);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} id="home" className="relative w-full overflow-hidden bg-[#060f1a]" style={{ minHeight: '100svh' }}>

            {/* ── Full-screen video background ── */}
            <video
                autoPlay muted loop playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
                style={{ objectPosition: 'center 30%' }}
            >
                <source src="/assets/promo_video.mp4" type="video/mp4" />
            </video>

            {/* ── Multi-layer gradient overlay ── */}
            <div className="absolute inset-0 z-10 pointer-events-none" style={{
                background: `
          linear-gradient(to bottom, rgba(6,15,26,0.55) 0%, rgba(6,15,26,0.1) 40%, rgba(6,15,26,0.7) 100%),
          linear-gradient(to right,  rgba(6,15,26,0.96) 0%, rgba(6,15,26,0.75) 38%, rgba(6,15,26,0.15) 100%)
        `
            }} />

            {/* ── Brand color tint ── */}
            <div className="absolute inset-0 z-10 pointer-events-none" style={{
                background: 'linear-gradient(135deg, rgba(11,46,79,0.55) 0%, transparent 60%)'
            }} />

            {/* ── Canvas particles ── */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full z-20 pointer-events-none"
                style={{ mixBlendMode: 'screen' }}
            />

            {/* ── Bottom section fade ── */}
            <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none" style={{
                height: '160px',
                background: 'linear-gradient(to bottom, transparent, #060f1a)'
            }} />
            {/* ── HERO CONTENT ── */}
            <div className="relative z-30 container mx-auto px-6 flex flex-col items-center justify-center" style={{ minHeight: '100svh' }}>
                <div className="max-w-2xl w-full text-center py-24 sm:py-28 md:py-32 px-2 sm:px-4">

                    {/* ── Location badge ── */}
                    <motion.a
                        href="https://maps.app.goo.gl/8Sbyn1KqPxS33LTs7"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.7, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 18, delay: 0.05 }}
                        whileHover={{ scale: 1.07, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2.5 mb-7 px-5 py-2.5 rounded-full text-sm font-bold cursor-pointer select-none"
                        style={{
                            background: 'linear-gradient(135deg, rgba(14,165,233,0.18) 0%, rgba(6,182,212,0.12) 100%)',
                            border: '1.5px solid rgba(56,189,248,0.35)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 0 24px rgba(14,165,233,0.18), inset 0 1px 0 rgba(255,255,255,0.06)',
                            textDecoration: 'none',
                        }}
                    >
                        {/* Pulsing live-dot */}
                        <span className="relative flex items-center justify-center w-4 h-4 shrink-0">
                            <motion.span
                                animate={{ scale: [1, 1.9, 1], opacity: [0.7, 0, 0.7] }}
                                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                                className="absolute inset-0 rounded-full bg-cyan-400/50"
                            />
                            <span className="relative w-2 h-2 rounded-full bg-cyan-400" />
                        </span>

                        <MapPin size={13} className="text-sky-300 shrink-0" />

                        <span style={{
                            background: 'linear-gradient(90deg, #e0f2fe, #67e8f9, #38bdf8)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            Now Live in Bangalore
                        </span>

                        {/* Chevron */}
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-sky-400 shrink-0">
                            <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.a>

                    {/* Large Hero Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="flex justify-center mb-8"
                    >
                        <img
                            src="/assets/onlylogo.png"
                            alt="WynkWash Logo"
                            className="h-40 sm:h-52 md:h-64 w-auto object-contain drop-shadow-2xl"
                        />
                    </motion.div>


                    {/* Main Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 36 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.08 }}
                        className="font-black leading-[1.02] tracking-tight mb-6"
                        style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
                    >

                        <div className="text-white">
                            Your Premium
                        </div>

                        {/* Doorstep in Blue Gradient */}
                        <div
                            className="-mt-2"
                            style={{
                                background: 'linear-gradient(90deg, #60b8ff 0%, #a8ddff 40%, #38d9f5 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Doorstep
                        </div>

                        {/* Car Wash Service in Blue Gradient */}
                        <div
                            className="-mt-2"
                            style={{
                                background: 'linear-gradient(90deg, #60b8ff 0%, #a8ddff 40%, #38d9f5 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Car Wash Service
                        </div>

                    </motion.div>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.22 }}
                        className="text-blue-100/70 text-lg mb-10 leading-relaxed max-w-lg mx-auto"
                    >
                        No queues. No travel.
                        Just spotless results — at your home or office.
                    </motion.p>

                    {/* ── Service Timings ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.26 }}
                        className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-md border border-cyan-400/25 bg-cyan-400/10 text-cyan-200 text-sm font-semibold"
                    >
                        <Clock size={14} className="text-cyan-400" />
                        Available <span className="text-white font-black ml-1">6:00 AM – 9:00 PM</span>&nbsp;· All Days
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
                    >
                        <a
                            href="https://wa.me/918870037600?text=Hello%20Team!%20I%E2%80%99m%20interested%20in%20a%20premium%20doorstep%20car%20wash.%20Please%20share%20pricing%20and%20availability."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-3 text-white font-bold px-9 py-4 rounded-md shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            style={{
                                background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #075985 100%)',
                                boxShadow: '0 8px 32px rgba(14,165,233,0.35)',
                            }}
                        >
                            Book Doorstep Wash
                            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="tel:+918870037600"
                            className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-md border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300"
                        >
                            <Phone size={17} />
                            88700 37600
                        </a>
                    </motion.div>

                    {/* Feature pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.42 }}
                        className="flex flex-wrap gap-3 mb-8 justify-center"
                    >
                        {[
                            { dot: 'bg-blue-400', label: '3M Branded Products' },
                            { dot: 'bg-cyan-400', label: 'No Prepayment Required' },
                            { dot: 'bg-blue-400', label: 'Trained Professionals' },
                            { dot: 'bg-cyan-400', label: '6 AM – 9 PM, All Days' },
                            { dot: 'bg-amber-400', label: 'Background Verified' },
                            { dot: 'bg-green-400', label: 'GST Invoice Included' },
                            { dot: 'bg-purple-400', label: 'Monthly Packages' },
                            { dot: 'bg-rose-400', label: 'Group Discounts' },
                        ].map(({ dot, label }) => (
                            <span
                                key={label}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-medium text-white/70 border border-white/10 bg-white/5 backdrop-blur-sm"
                            >
                                <span className={`w-1.5 h-1.5 rounded-full ${dot} opacity-80 shrink-0`} />
                                {label}
                            </span>
                        ))}
                    </motion.div>

                    {/* Trust row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.56 }}
                        className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/45 border-t border-white/10 pt-7"
                    >
                        <span className="flex items-center gap-2">
                            <CheckCircle size={13} className="text-blue-400 shrink-0" />
                            Verified Professionals
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle size={13} className="text-blue-400 shrink-0" />
                            5.0★ Rated Service
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle size={13} className="text-blue-400 shrink-0" />
                            GST Invoice Included
                        </span>
                    </motion.div>

                </div>
            </div>

            {/* ── LEFT SIDE AD — confetti burst on entry (lg+ only) ── */}
            <motion.a
                href="#book"
                initial={{ opacity: 0, x: -80, scale: 0.5 }}
                animate={{
                    opacity: sideAdsVisible ? 1 : 0,
                    x: sideAdsVisible ? 0 : -80,
                    scale: sideAdsVisible ? 1 : 0.5,
                    pointerEvents: sideAdsVisible ? 'auto' : 'none',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.6 }}
                whileHover={{ scale: 1.06, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="hidden lg:flex fixed left-4 xl:left-8 top-1/2 -translate-y-1/2 z-[60] flex-col items-center gap-3 w-36 xl:w-44 cursor-pointer group"
                style={{ textDecoration: 'none' }}
            >
                <div
                    className="w-full rounded-2xl p-px"
                    style={{ background: 'linear-gradient(160deg, #3b82f6 0%, #06b6d4 50%, #3b82f6 100%)' }}
                >
                    <div
                        className="relative w-full rounded-2xl px-4 py-5 flex flex-col items-center gap-2 text-center"
                        style={{ background: 'rgba(6,15,26,0.90)', backdropFilter: 'blur(14px)' }}
                    >
                        {/* Confetti canvas — overlays the card */}
                        <canvas
                            ref={confettiL}
                            className="absolute inset-0 w-full h-full rounded-2xl pointer-events-none"
                            style={{ zIndex: 10 }}
                        />
                        <div
                            className="font-black leading-none"
                            style={{
                                fontSize: '3.5rem',
                                background: 'linear-gradient(135deg, #60b8ff, #38d9f5)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            10%
                        </div>
                        <div className="text-white font-black text-lg -mt-2 tracking-tight">OFF</div>
                        <div
                            className="w-8 h-px my-1"
                            style={{ background: 'linear-gradient(90deg, transparent, #38d9f5, transparent)' }}
                        />
                        <div className="text-blue-200/80 text-xs font-semibold uppercase tracking-widest">Launching</div>
                        <div className="text-white text-xs font-bold">Offer</div>
                    </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-cyan-300/70 group-hover:text-cyan-200 transition-colors">
                    View Services <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
            </motion.a>

            {/* ── RIGHT SIDE AD — spring pop entry (lg+ only) ── */}
            <motion.div
                initial={{ opacity: 0, x: 80, scale: 0.6 }}
                animate={{
                    opacity: sideAdsVisible ? 1 : 0,
                    x: sideAdsVisible ? 0 : 80,
                    scale: sideAdsVisible ? 1 : 0.6,
                    pointerEvents: sideAdsVisible ? 'auto' : 'none',
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.75 }}
                whileHover={{ scale: 1.06, y: -4 }}
                className="hidden lg:flex fixed right-4 xl:right-8 top-1/2 -translate-y-1/2 z-[60] flex-col items-center gap-3 w-36 xl:w-44"
            >
                <div
                    className="w-full rounded-2xl p-px"
                    style={{ background: 'linear-gradient(160deg, #06b6d4 0%, #3b82f6 50%, #06b6d4 100%)' }}
                >
                    <div
                        className="relative w-full rounded-2xl px-4 py-5 flex flex-col items-center gap-2 text-center"
                        style={{ background: 'rgba(6,15,26,0.90)', backdropFilter: 'blur(14px)' }}
                    >
                        {/* Confetti canvas — overlays the card */}
                        <canvas
                            ref={confettiR}
                            className="absolute inset-0 w-full h-full rounded-2xl pointer-events-none"
                            style={{ zIndex: 10 }}
                        />
                        <Gift size={28} className="text-cyan-400" strokeWidth={1.5} />
                        <div className="text-white font-black text-sm leading-tight">Free Bike Wash</div>
                        <div
                            className="font-black text-2xl leading-none"
                            style={{
                                background: 'linear-gradient(135deg, #60b8ff, #38d9f5)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            &#8377;550
                        </div>
                        <div
                            className="w-8 h-px my-1"
                            style={{ background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)' }}
                        />
                        <div className="text-blue-200/70 text-xs leading-snug">with any Premium+<br />Service</div>
                    </div>
                </div>
                <div className="text-xs font-semibold text-blue-300/50 text-center">Limited Time Offer</div>
            </motion.div>

            {/* ── Scroll indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none"
            >
                <motion.div
                    animate={{ y: [0, 9, 0] }}
                    transition={{ repeat: Infinity, duration: 1.7, ease: 'easeInOut' }}
                    className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
                >
                    <div className="w-1 h-2 bg-blue-300/60 rounded-full" />
                </motion.div>
            </motion.div>

        </section>
    );
}
