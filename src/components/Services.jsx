import React from 'react';
import { Instagram, Layout, Camera, Video } from 'lucide-react';
import './Services.css';

const services = [
  {
    title: 'Social Media',
    description: 'Gestão estratégica de redes sociais para aumentar sua autoridade e conexão com o público.',
    icon: <Instagram size={32} />,
    color: '#D4AF37',
  },
  {
    title: 'Branding & Design',
    description: 'Design visual premium que comunica os valores da sua marca de forma impactante.',
    icon: <Layout size={32} />,
    color: '#8B4513',
  },
  {
    title: 'Story Maker',
    description: 'Conteúdo dinâmico e envolvente para stories que convertem seguidores em clientes.',
    icon: <Camera size={32} />,
    color: '#5C5C5C',
  },
  {
    title: 'Video Maker',
    description: 'Produção audiovisual de alta qualidade para Reels, TikTok e vídeos institucionais.',
    icon: <Video size={32} />,
    color: '#D4AF37',
  },
];

// Triple for seamless loop
const allServices = [...services, ...services, ...services];

const Services = () => (
  <section id="serviços" style={{ padding: '100px 0', overflow: 'hidden' }}>
    <div style={{ textAlign: 'center', marginBottom: '60px', padding: '0 5%' }}>
      <span
        className="gold-gradient"
        style={{ fontWeight: '600', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}
      >
        EXCELÊNCIA EM SERVIÇOS
      </span>
      <h2>
        O QUE FAZEMOS <span className="gold-gradient">MELHOR</span>
      </h2>
    </div>

    {/* Pure CSS marquee — zero JS, runs on GPU compositor thread */}
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {allServices.map((service, index) => (
          <div key={index} className="service-card">
            <div style={{ marginBottom: '20px', color: service.color }}>{service.icon}</div>
            <h3 style={{ marginBottom: '12px', fontSize: '1.15rem', fontWeight: '700' }}>{service.title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
