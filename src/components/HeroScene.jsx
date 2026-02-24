import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ─── MATERIALS ─── */
function useCarMaterials() {
    return useMemo(() => ({
        body: new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(0x06101e), metalness: 0.92, roughness: 0.07,
            clearcoat: 1.0, clearcoatRoughness: 0.04, reflectivity: 1.0,
        }),
        chrome: new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(0xaabccc), metalness: 1.0, roughness: 0.02,
        }),
        glass: new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(0x0a1a33), transparent: true, opacity: 0.52,
            roughness: 0.0, metalness: 0.05,
        }),
        headlight: new THREE.MeshStandardMaterial({
            color: new THREE.Color(0x99bbff), emissive: new THREE.Color(0x2255ff), emissiveIntensity: 3,
        }),
        taillight: new THREE.MeshStandardMaterial({
            color: new THREE.Color(0xff2200), emissive: new THREE.Color(0xff1100), emissiveIntensity: 2,
        }),
        tire: new THREE.MeshStandardMaterial({ color: new THREE.Color(0x080808), roughness: 0.92 }),
        rim: new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(0x99aabb), metalness: 0.98, roughness: 0.03,
        }),
        floor: new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(0x020810), metalness: 0.88, roughness: 0.18,
            transparent: true, opacity: 0.9,
        }),
    }), []);
}

/* ─── WHEEL ─── */
function Wheel({ position, m }) {
    return (
        <group position={position}>
            <mesh rotation={[Math.PI / 2, 0, 0]} material={m.tire}>
                <torusGeometry args={[0.36, 0.16, 16, 32]} />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]} material={m.tire}>
                <cylinderGeometry args={[0.2, 0.2, 0.34, 16]} />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]} material={m.rim}>
                <cylinderGeometry args={[0.21, 0.21, 0.38, 12]} />
            </mesh>
            {[0, 1, 2, 3, 4].map(i => (
                <mesh key={i} rotation={[Math.PI / 2, (i / 5) * Math.PI * 2, 0]} material={m.rim}>
                    <boxGeometry args={[0.06, 0.3, 0.04]} />
                </mesh>
            ))}
        </group>
    );
}

/* ─── LUXURY CAR ─── */
function LuxuryCar({ mouseRef }) {
    const groupRef = useRef();
    const m = useCarMaterials();

    useFrame(({ clock }) => {
        if (!groupRef.current) return;
        const t = clock.elapsedTime;
        groupRef.current.position.y = -0.62 + Math.sin(t * 0.45) * 0.04;
        if (mouseRef?.current) {
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, -0.22 + mouseRef.current.x * 0.1, 0.03);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouseRef.current.y * 0.04, 0.03);
        }
    });

    return (
        <group ref={groupRef} position={[1.1, -0.62, 0]} rotation={[0, -0.22, 0]}>
            {/* Lower sill */}
            <mesh material={m.body}><boxGeometry args={[4.5, 0.48, 2.2]} /></mesh>
            {/* Main body */}
            <mesh position={[0, 0.47, 0]} material={m.body}><boxGeometry args={[4.1, 0.62, 2.04]} /></mesh>
            {/* Hood slope */}
            <mesh position={[1.5, 0.51, 0]} rotation={[0, 0, 0.22]} material={m.body}><boxGeometry args={[1.2, 0.15, 1.99]} /></mesh>
            {/* Front nose */}
            <mesh position={[2.15, 0.23, 0]} material={m.body}><boxGeometry args={[0.3, 0.36, 1.94]} /></mesh>
            {/* Trunk slope */}
            <mesh position={[-1.48, 0.51, 0]} rotation={[0, 0, -0.18]} material={m.body}><boxGeometry args={[1.15, 0.15, 1.99]} /></mesh>
            {/* Rear */}
            <mesh position={[-2.1, 0.22, 0]} material={m.body}><boxGeometry args={[0.28, 0.36, 1.94]} /></mesh>
            {/* Cabin */}
            <mesh position={[-0.05, 0.94, 0]} material={m.body}><boxGeometry args={[2.65, 0.52, 1.97]} /></mesh>
            {/* Roof */}
            <mesh position={[-0.12, 1.27, 0]} material={m.body}><boxGeometry args={[2.05, 0.28, 1.87]} /></mesh>
            {/* Windshield */}
            <mesh position={[1.04, 0.97, 0]} rotation={[0, 0, -0.52]} material={m.glass}><boxGeometry args={[0.94, 0.06, 1.83]} /></mesh>
            {/* Rear window */}
            <mesh position={[-1.14, 0.97, 0]} rotation={[0, 0, 0.48]} material={m.glass}><boxGeometry args={[0.88, 0.06, 1.83]} /></mesh>
            {/* Side windows */}
            <mesh position={[-0.05, 1.07, -1.01]} material={m.glass}><boxGeometry args={[2.18, 0.47, 0.06]} /></mesh>
            <mesh position={[-0.05, 1.07, 1.01]} material={m.glass}><boxGeometry args={[2.18, 0.47, 0.06]} /></mesh>
            {/* Chrome character lines */}
            <mesh position={[0.3, 0.27, -1.11]} material={m.chrome}><boxGeometry args={[3.4, 0.04, 0.04]} /></mesh>
            <mesh position={[0.3, 0.27, 1.11]} material={m.chrome}><boxGeometry args={[3.4, 0.04, 0.04]} /></mesh>
            {/* Belt line */}
            <mesh position={[-0.05, 0.83, -1.01]} material={m.chrome}><boxGeometry args={[2.55, 0.05, 0.04]} /></mesh>
            <mesh position={[-0.05, 0.83, 1.01]} material={m.chrome}><boxGeometry args={[2.55, 0.05, 0.04]} /></mesh>
            {/* Front grille */}
            <mesh position={[2.24, 0.2, 0]} material={m.chrome}><boxGeometry args={[0.06, 0.22, 1.3]} /></mesh>
            {/* Headlights */}
            <mesh position={[2.24, 0.33, 0.72]} material={m.headlight}><boxGeometry args={[0.07, 0.12, 0.44]} /></mesh>
            <mesh position={[2.24, 0.33, -0.72]} material={m.headlight}><boxGeometry args={[0.07, 0.12, 0.44]} /></mesh>
            {/* DRL */}
            <mesh position={[2.23, 0.21, 0.6]} material={m.headlight}><boxGeometry args={[0.05, 0.05, 0.68]} /></mesh>
            <mesh position={[2.23, 0.21, -0.6]} material={m.headlight}><boxGeometry args={[0.05, 0.05, 0.68]} /></mesh>
            {/* Taillights */}
            <mesh position={[-2.23, 0.29, 0.67]} material={m.taillight}><boxGeometry args={[0.06, 0.18, 0.54]} /></mesh>
            <mesh position={[-2.23, 0.29, -0.67]} material={m.taillight}><boxGeometry args={[0.06, 0.18, 0.54]} /></mesh>
            {/* Bumpers */}
            <mesh position={[2.19, -0.08, 0]} material={m.body}><boxGeometry args={[0.27, 0.28, 2.04]} /></mesh>
            <mesh position={[-2.19, -0.08, 0]} material={m.body}><boxGeometry args={[0.25, 0.28, 2.04]} /></mesh>
            {/* Mirrors */}
            <mesh position={[1.28, 0.94, 1.1]} material={m.body}><boxGeometry args={[0.3, 0.19, 0.1]} /></mesh>
            <mesh position={[1.28, 0.94, -1.1]} material={m.body}><boxGeometry args={[0.3, 0.19, 0.1]} /></mesh>
            {/* Wheels */}
            <Wheel position={[1.54, -0.27, 1.12]} m={m} />
            <Wheel position={[1.54, -0.27, -1.12]} m={m} />
            <Wheel position={[-1.54, -0.27, 1.12]} m={m} />
            <Wheel position={[-1.54, -0.27, -1.12]} m={m} />
            {/* Underbody */}
            <mesh position={[0, -0.5, 0]} material={new THREE.MeshStandardMaterial({ color: 0x020508, roughness: 0.9 })}>
                <boxGeometry args={[3.6, 0.08, 1.74]} />
            </mesh>
        </group>
    );
}

/* ─── WATER SPRAY ─── */
function WaterSpray() {
    const ref = useRef();
    const N = 700;

    const { geo, vels, lives } = useMemo(() => {
        const pos = new Float32Array(N * 3);
        const vels = new Float32Array(N * 3);
        const lives = new Float32Array(N);
        for (let i = 0; i < N; i++) {
            pos[i * 3] = 0.8 + (Math.random() - 0.5) * 0.5;
            pos[i * 3 + 1] = -0.4 + Math.random() * 1.2;
            pos[i * 3 + 2] = -1.1 + Math.random() * 2.2;
            vels[i * 3] = 0.006 + Math.random() * 0.014;
            vels[i * 3 + 1] = 0.006 + Math.random() * 0.018;
            vels[i * 3 + 2] = (Math.random() - 0.5) * 0.008;
            lives[i] = Math.random();
        }
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        return { geo: g, vels, lives };
    }, []);

    const mat = useMemo(() => new THREE.PointsMaterial({
        color: new THREE.Color(0x88ccff), size: 0.022, transparent: true,
        opacity: 0.65, blending: THREE.AdditiveBlending, depthWrite: false,
    }), []);

    useFrame(() => {
        if (!ref.current) return;
        const pos = ref.current.geometry.attributes.position.array;
        for (let i = 0; i < N; i++) {
            lives[i] += 0.009;
            if (lives[i] > 1) {
                lives[i] = 0;
                pos[i * 3] = 0.8 + (Math.random() - 0.5) * 0.4;
                pos[i * 3 + 1] = -0.4 + Math.random() * 0.9;
                pos[i * 3 + 2] = -1.1 + Math.random() * 2.2;
            } else {
                pos[i * 3] += vels[i * 3];
                pos[i * 3 + 1] += vels[i * 3 + 1] - 0.0001 * lives[i] * 70;
                pos[i * 3 + 2] += vels[i * 3 + 2];
            }
        }
        ref.current.geometry.attributes.position.needsUpdate = true;
    });

    return <points ref={ref} geometry={geo} material={mat} position={[-0.3, 0, 0]} />;
}

/* ─── MIST ─── */
function MistParticles() {
    const ref = useRef();
    const N = 250;

    const geo = useMemo(() => {
        const pos = new Float32Array(N * 3);
        for (let i = 0; i < N; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 12;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 9;
        }
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        return g;
    }, []);

    const mat = useMemo(() => new THREE.PointsMaterial({
        color: new THREE.Color(0x2255aa), size: 0.07, transparent: true,
        opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false,
    }), []);

    useFrame(({ clock }) => {
        if (!ref.current) return;
        const t = clock.elapsedTime;
        const pos = ref.current.geometry.attributes.position.array;
        for (let i = 0; i < N; i++) {
            pos[i * 3 + 1] += 0.0008 * (1 + Math.sin(t * 0.5 + i));
            if (pos[i * 3 + 1] > 3.5) pos[i * 3 + 1] = -2.5;
        }
        ref.current.geometry.attributes.position.needsUpdate = true;
        ref.current.rotation.y = t * 0.008;
    });

    return <points ref={ref} geometry={geo} material={mat} />;
}

/* ─── WATER ARC ─── */
function WaterArc() {
    const ref = useRef();
    const geo = useMemo(() => {
        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-2.8, 2.4, 0.3),
            new THREE.Vector3(-0.8, 2.9, 0.6),
            new THREE.Vector3(0.8, 1.9, -0.4),
            new THREE.Vector3(2.4, 0.4, 0.1),
        ]);
        return new THREE.TubeGeometry(curve, 24, 0.042, 8, false);
    }, []);

    const mat = useMemo(() => new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0x3377ff), transparent: true, opacity: 0.38,
        roughness: 0.0, metalness: 0.0,
        emissive: new THREE.Color(0x0a2266), emissiveIntensity: 0.6,
    }), []);

    useFrame(({ clock }) => {
        if (!ref.current) return;
        const t = clock.elapsedTime;
        ref.current.material.opacity = 0.28 + Math.sin(t * 0.9) * 0.14;
        ref.current.position.y = Math.sin(t * 0.35) * 0.06;
    });

    return <mesh ref={ref} geometry={geo} material={mat} position={[0.3, 0, 0]} />;
}

/* ─── CLICK RIPPLES ─── */
function ClickRipples({ ripplesRef }) {
    const groupRef = useRef();

    useFrame(() => {
        if (!groupRef.current) return;
        // Ripples managed externally via ripplesRef
    });

    return <group ref={groupRef} />;
}

/* ─── RIPPLE MESHES (stateless, driven by ref array) ─── */
function RippleMeshes({ ripplesRef }) {
    const meshRefs = useRef([]);
    const MAX = 6;

    useFrame(() => {
        for (let i = 0; i < MAX; i++) {
            const r = ripplesRef.current[i];
            const mesh = meshRefs.current[i];
            if (!mesh) continue;
            if (r && r.opacity > 0) {
                mesh.visible = true;
                mesh.scale.setScalar(r.scale);
                mesh.material.opacity = r.opacity;
                mesh.position.set(r.x, r.y, r.z);
                r.scale += 0.07;
                r.opacity -= 0.028;
            } else {
                mesh.visible = false;
            }
        }
    });

    return (
        <>
            {Array.from({ length: MAX }).map((_, i) => (
                <mesh
                    key={i}
                    ref={el => meshRefs.current[i] = el}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={false}
                >
                    <ringGeometry args={[0.9, 1.0, 48]} />
                    <meshBasicMaterial
                        color={new THREE.Color(0x3399ff)}
                        transparent opacity={0}
                        side={THREE.DoubleSide} depthWrite={false}
                    />
                </mesh>
            ))}
        </>
    );
}

/* ─── GROUND ─── */
function Ground() {
    const mat = useMemo(() => new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0x020810), metalness: 0.88,
        roughness: 0.18, transparent: true, opacity: 0.88,
    }), []);
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.26, 0]} receiveShadow material={mat}>
            <planeGeometry args={[40, 40]} />
        </mesh>
    );
}

/* ─── LIGHTING ─── */
function Lighting({ mouseRef }) {
    const cursorLight = useRef();
    useFrame(() => {
        if (!cursorLight.current || !mouseRef?.current) return;
        cursorLight.current.position.x = THREE.MathUtils.lerp(cursorLight.current.position.x, mouseRef.current.x * 5, 0.04);
        cursorLight.current.position.y = THREE.MathUtils.lerp(cursorLight.current.position.y, mouseRef.current.y * 3 + 2.5, 0.04);
    });

    return (
        <>
            <ambientLight color={0x0a1a2e} intensity={1.4} />
            <directionalLight color={0x3366cc} intensity={3.2} position={[5, 8, 3]} castShadow />
            <directionalLight color={0x0044ff} intensity={4.5} position={[-7, 3, -4]} />
            <pointLight color={0x003366} intensity={1.0} position={[0, -2, 2]} />
            <pointLight color={0x7799ff} intensity={3.5} position={[3.8, 0.5, 0.2]} distance={7} />
            <pointLight color={0xff2200} intensity={1.2} position={[-3.8, 0.5, 0]} distance={5} />
            <pointLight color={0x2266ff} intensity={2.2} position={[-0.5, 0.8, 0]} distance={6} />
            <pointLight ref={cursorLight} color={0x4488ff} intensity={1.8} position={[0, 3, 3]} distance={9} />
        </>
    );
}

/* ─── EXPORTED SCENE ─── */
export default function HeroScene({ mouseRef, ripplesRef }) {
    return (
        <>
            <color attach="background" args={['#071929']} />
            <fog attach="fog" args={['#071929', 12, 32]} />
            <Lighting mouseRef={mouseRef} />
            <Ground />
            <LuxuryCar mouseRef={mouseRef} />
            <WaterSpray />
            <MistParticles />
            <WaterArc />
            <RippleMeshes ripplesRef={ripplesRef} />
        </>
    );
}
