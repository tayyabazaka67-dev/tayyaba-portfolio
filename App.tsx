import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Background from '@/components/Background';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Background />
      <div className="grain-overlay" />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}
