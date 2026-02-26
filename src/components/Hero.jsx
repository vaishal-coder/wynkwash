import { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, CheckCircle } from 'lucide-react';

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
   HERO COMPONENT
───────────────────────────────────── */
export default function Hero() {
    const canvasRef = useRef();
    useWaterCanvas(canvasRef);

    return (
        <section id="home" className="relative w-full overflow-hidden bg-[#060f1a]" style={{ minHeight: '100svh' }}>

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
                <div className="max-w-2xl w-full text-center py-32">

                    {/* Location badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-md text-sm font-semibold text-blue-200 border border-blue-400/25 bg-blue-500/10 backdrop-blur-sm"
                    >
                        <MapPin size={13} className="text-blue-400" />
                        Now in Bangalore
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 36 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.08 }}
                        className="font-black text-white leading-[1.02] tracking-tight mb-2"
                        style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
                    >
                        Your Premium Doorstep
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: 36 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.14 }}
                        className="font-black leading-[1.02] tracking-tight mb-6"
                        style={{
                            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                            background: 'linear-gradient(90deg, #60b8ff 0%, #a8ddff 40%, #38d9f5 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Car Wash Service
                    </motion.h1>

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
