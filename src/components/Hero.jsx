import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, Instance, Instances } from '@react-three/drei';
import { motion } from 'framer-motion';
import { MessageCircle, ChevronRight } from 'lucide-react';
import * as THREE from 'three';

function Bubbles() {
    const ref = useRef();
    const count = 30;

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -5 + Math.random() * 10;
            const yFactor = -5 + Math.random() * 10;
            const zFactor = -5 + Math.random() * 10;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, []);

    useFrame((state) => {
        if (ref.current) {
            ref.current.children.forEach((child, i) => {
                const { t, factor, speed, xFactor, yFactor, zFactor } = particles[i];

                // Update time
                particles[i].t += speed / 2;
                const a = Math.cos(t) + Math.sin(t * 1) / 10;
                const b = Math.sin(t) + Math.cos(t * 2) / 10;
                const s = Math.cos(t);

                // Update position
                child.position.set(
                    (particles[i].mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                    (particles[i].my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                    (particles[i].my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
                );

                // Update scale
                child.scale.setScalar(s * 0.5 + 1); // Varied size
            });
        }
    });

    return (
        <group ref={ref}>
            {particles.map((_, i) => (
                <mesh key={i}>
                    <sphereGeometry args={[0.05, 32, 32]} />
                    <meshStandardMaterial color="#00A4CC" transparent opacity={0.6} roughness={0} metalness={0.1} />
                </mesh>
            ))}
        </group>
    );
}

function AnimatedBackground() {
    return (
        <group>
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
            <Bubbles />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#003366" />
        </group>
    );
}

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen w-full bg-gradient-to-b from-[#001f3f] to-[#003366] overflow-hidden">
            {/* 3D Canvas Layer */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]} performance={{ min: 0.5 }}>
                    <AnimatedBackground />
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wide mb-6 uppercase">
                        Serving West Bengaluru
                    </span>
                </motion.div>

                <h1
                    className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
                >
                    Premium Doorstep Car Wash in Bengaluru
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl"
                >
                    Serving Laggere, Malleshwaram, Rajajinagar, Basaveshwaranagar & Vijayanagar
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mb-8 flex flex-col items-center gap-2"
                >
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2 rounded-2xl backdrop-blur-sm">
                        <span className="text-blue-200 text-sm font-medium uppercase tracking-widest">Call or WhatsApp</span>
                        <span className="text-2xl font-bold text-white leading-none">+91 88700 37600</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 mb-12"
                >
                    <a href="https://wa.me/918870037600" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-green-500/30 hover:shadow-green-500/50">
                        <MessageCircle size={24} />
                        Book via WhatsApp
                    </a>
                    <a href="#services" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
                        View Plans
                        <ChevronRight size={20} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-blue-200"
                >
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        Doorstep Service
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        Premium Cleaning
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        Reliable & Professional
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent mx-auto"></div>
            </motion.div>
        </section>
    );
}
