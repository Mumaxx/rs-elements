import React from 'react';
import { motion } from 'framer-motion';
import teamImg from '../assets/team.jpg';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ maxWidth: '1200px', width: '100%', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                    <span className="gold-gradient" style={{ fontWeight: '700', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', marginBottom: '15px' }}>
                        Transformando Presença Digital
                    </span>
                    <h1 style={{
                        marginTop: '0',
                        fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
                        lineHeight: '1.05',
                        fontWeight: '800',
                        letterSpacing: '-2px',
                        marginBottom: '25px'
                    }}>
                        Rhuan & <br /> Stephany <br />
                        <span className="gold-gradient" style={{ letterSpacing: '-1px' }}>Marketing <br /> Estratégico</span>
                    </h1>
                    <p style={{ maxWidth: '550px', marginBottom: '45px', fontSize: '1.25rem', color: 'var(--text-secondary)', fontWeight: '400', lineHeight: '1.6' }}>
                        Elevamos sua marca com conteúdo autêntico, design premium e estratégias de posicionamento que geram resultados reais.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <motion.a
                            href="https://wa.me/5519991922432?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20come%C3%A7ar%20um%20projeto%20com%20a%20RS%20Elements."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gold-btn"
                            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            Começar Agora
                        </motion.a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '12px 32px',
                                border: '2px solid #E4405F',
                                borderRadius: '50px',
                                color: '#E4405F',
                                fontWeight: '700',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                transition: 'opacity 0.2s ease',
                            }}
                        >
                            Instagram
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                >
                    {/* Fundo decorativo complexo */}
                    <div style={{
                        position: 'absolute',
                        width: '140%',
                        height: '140%',
                        background: 'radial-gradient(circle, var(--gold-light) 0%, transparent 60%)',
                        zIndex: -1,
                        opacity: 0.2,
                        top: '-20%',
                        left: '-20%'
                    }} />

                    <div
                        className="animated-border"
                        style={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: '1/1',
                            borderRadius: '50% 50% 20% 20%',
                            overflow: 'hidden',
                        }}>
                        <img
                            src={teamImg}
                            alt="Rhuan & Stephany"
                            style={{
                                width: '100%',
                                height: '110%',
                                objectFit: 'cover',
                                transform: 'translateY(-5%)'
                            }}
                        />
                    </div>

                    {/* Badge estático */}
                    <div
                        className="glass"
                        style={{
                            position: 'absolute',
                            top: '10%',
                            right: '-30px',
                            padding: '20px',
                            borderRadius: '20px',
                            borderLeft: '5px solid var(--gold)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}
                    >
                        <h4 style={{ margin: 0, color: 'var(--gold)' }}>RS Elements</h4>
                        <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: '500' }}>Marketing que Vende</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
