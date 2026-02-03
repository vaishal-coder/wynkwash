import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <Services />
      <WhatsAppSection />
      <Features />
      <Testimonials />
      <ServiceAreas />
      <WhatsAppFloat />
    </Layout>
  );
}

export default App;
