import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import WhatsAppSection from '../components/WhatsAppSection';
import ServiceAreas from '../components/ServiceAreas';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <WhatsAppSection />
            <Features />
            <ServiceAreas />
            <WhatsAppFloat />
        </>
    );
}
