import Hero from '../components/Hero';
import VideoShowcase from '../components/VideoShowcase';
import Services from '../components/Services';
import Features from '../components/Features';
import WhatsAppSection from '../components/WhatsAppSection';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function Home() {
    return (
        <>
            <Hero />
            <VideoShowcase />
            <Services />
            <WhatsAppSection />
            <Features />
            <WhatsAppFloat />
        </>
    );
}
