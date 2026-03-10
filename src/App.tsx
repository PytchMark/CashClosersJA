import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Businesses } from './pages/Businesses';
import { Closers } from './pages/Closers';
import { Process } from './pages/Process';
import { Resources } from './pages/Resources';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/closers" element={<Closers />} />
          <Route path="/process" element={<Process />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply/business" element={<Contact />} />
          <Route path="/apply/closer" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
