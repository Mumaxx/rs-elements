import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import logoImg from './assets/logo.png';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
      </main>
      <footer style={{
        padding: '80px 5%',
        textAlign: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderTop: '1px solid #eee',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        <img src={logoImg} alt="RS Elements Logo" style={{ height: '60px', width: 'auto', marginBottom: '10px' }} />
        <p style={{ fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>© 2026 RS Elements — Marketing & Social Media</p>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Feito por <a href="https://instagram.com/sc_sistemass" target="_blank" style={{ color: 'var(--gold)', fontWeight: 'bold', textDecoration: 'none' }}>@sc_sistemass</a></p>
        <div style={{ display: 'flex', gap: '25px', marginTop: '10px' }}>
          <a href="https://instagram.com" target="_blank" style={{ color: '#E4405F', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 'bold' }}>Instagram</a>
          <a href="https://wa.me/something" target="_blank" style={{ color: '#25D366', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 'bold' }}>WhatsApp</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
