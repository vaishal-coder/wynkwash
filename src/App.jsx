import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WhatsAppRedirect from './pages/WhatsAppRedirect';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main landing page */}
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />

        {/* WhatsApp redirect page */}
        <Route path="/whatsapp" element={<WhatsAppRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;

