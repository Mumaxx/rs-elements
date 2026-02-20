import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, X, ChevronLeft, ChevronRight, Play, Image } from 'lucide-react';

// ── Logos ──────────────────────────────────────────────────────────────
import brambilaLogo from '../assets/portfolio/brambila.jpg';
import diegoSchuLogo from '../assets/portfolio/diego-schu.png';
import arymanaLogo from '../assets/portfolio/arymana.png';
import polyannnaLogo from '../assets/portfolio/polyanna.jpg';
import prisaLogo from '../assets/portfolio/prisa.jpg';
import sharkLogo from '../assets/portfolio/shark.jpg';
// ── Posts extras ───────────────────────────────────────────────────────
import prisaPost from '../assets/portfolio/prisa-post.jpg';
import polyPost from '../assets/portfolio/polyanna-post.jpg';
import arymanaPost from '../assets/portfolio/arymana-post.jpg';
import sharkPost1 from '../assets/portfolio/shark-post1.png';
import sharkPost2 from '../assets/portfolio/shark-post2.png';

// ─────────────────────────────────────────────────────────────────────
//  PROJETOS — cada cliente tem um array media[] com os conteúdos
//  type: 'reel' → embed de vídeo do Instagram
//  type: 'photo' → imagem local
// ─────────────────────────────────────────────────────────────────────
const projects = [
    {
        id: 1,
        title: 'Brambila Idiomas',
        category: 'Escola de Idiomas',
        logo: brambilaLogo,
        bgColor: '#8B0000',
        instagramHandle: '@brambilaidiomas',
        instagramProfileUrl: 'https://www.instagram.com/brambilaidiomas',
        media: [
            { type: 'reel', embedUrl: 'https://www.instagram.com/reel/DTybGtKj88k/embed/' },
            { type: 'reel', embedUrl: 'https://www.instagram.com/reel/DUbn1PvDA0j/embed/' },
        ],
    },
    {
        id: 2,
        title: 'Dr. Diego Schú',
        category: 'Odontologia & Estética',
        logo: diegoSchuLogo,
        bgColor: '#F8F6F2',
        instagramHandle: '@drdiegoschu',
        instagramProfileUrl: 'https://www.instagram.com/drdiegoschu',
        media: [
            { type: 'reel', embedUrl: 'https://www.instagram.com/reel/DUWXcp5DnDQ/embed/' },
            { type: 'reel', embedUrl: 'https://www.instagram.com/reel/DU9CwrFAWK7/embed/' },
        ],
    },
    {
        id: 3,
        title: 'Quiosque Arymana',
        category: 'Gastronomia',
        logo: arymanaLogo,
        bgColor: '#FFF8DC',
        instagramHandle: '@quiosquearymana',
        instagramProfileUrl: 'https://www.instagram.com/quiosquearymana',
        media: [
            { type: 'reel', embedUrl: 'https://www.instagram.com/reel/DT0vO_CgVQi/embed/' },
            { type: 'photo', src: arymanaPost, alt: 'Pastel de carne com caldo de cana' },
        ],
    },
    {
        id: 4,
        title: 'Polyanna Confeitaria',
        category: 'Confeitaria Artesanal',
        logo: polyannnaLogo,
        bgColor: '#F5E6D3',
        instagramHandle: '@polyanna.confeitaria',
        instagramProfileUrl: 'https://www.instagram.com/polyanna.confeitaria',
        media: [
            { type: 'reel', embedUrl: 'https://www.instagram.com/reel/DQMqoYiDpdx/embed/' },
            { type: 'photo', src: polyPost, alt: 'Donuts coloridos Polyanna' },
        ],
    },
    {
        id: 5,
        title: 'Prisa Moda',
        category: 'Moda Feminina',
        logo: prisaLogo,
        bgColor: '#FFD6E0',
        instagramHandle: '@prisa.moda',
        instagramProfileUrl: 'https://www.instagram.com/prisa.moda',
        media: [
            { type: 'reel', embedUrl: 'https://www.instagram.com/reel/DRkHv6hkc7V/embed/' },
            { type: 'photo', src: prisaPost, alt: 'Look Amarelo Manteiga - Prisa Moda' },
        ],
    },
    {
        id: 6,
        title: 'Shark Cleaning',
        category: 'Limpeza Profissional',
        logo: sharkLogo,
        bgColor: '#0A2342',
        instagramHandle: '@sharkcleaning',
        instagramProfileUrl: 'https://www.instagram.com/sharkcleaning',
        media: [
            { type: 'photo', src: sharkPost1, alt: 'Deep Clean Essentials' },
            { type: 'photo', src: sharkPost2, alt: 'What they say - Shark Cleaning' },
        ],
    },
];

// ─────────────────────────────
//  Card de logo (1 por cliente)
// ─────────────────────────────
const ProjectCard = ({ project, onClick }) => (
    <div
        className="portfolio-card"
        onClick={() => onClick(project)}
        style={{ background: project.bgColor }}
    >
        {/* Logo */}
        <img
            src={project.logo}
            alt={project.title}
            style={{ width: '68%', height: '68%', objectFit: 'contain', position: 'relative', zIndex: 1 }}
        />

        {/* Gradient bottom */}
        <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '48%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)',
            pointerEvents: 'none',
        }} />

        {/* Info bar */}
        <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', zIndex: 2 }}>
            <span style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--gold-light)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                {project.category}
            </span>
            <h4 style={{ margin: '3px 0 0', color: '#fff', fontSize: '0.95rem', fontWeight: '700' }}>
                {project.title}
            </h4>
        </div>

        {/* CSS hover overlay */}
        <div className="portfolio-card-overlay">
            <div style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                background: 'rgba(255,255,255,0.2)',
                padding: '8px 18px', borderRadius: '50px',
            }}>
                {project.media.some(m => m.type === 'reel')
                    ? <Play size={18} color="#fff" fill="#fff" />
                    : <Image size={18} color="#fff" />}
                <span style={{ color: '#fff', fontWeight: '700', fontSize: '0.82rem' }}>
                    Ver conteúdo ({project.media.length})
                </span>
            </div>
        </div>
    </div>
);

// ─────────────────────────────
//  Slide individual no modal
// ─────────────────────────────
const MediaSlide = ({ item }) => {
    if (item.type === 'reel') {
        return (
            <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#000', flexShrink: 0, width: '100%' }}>
                <iframe
                    src={item.embedUrl}
                    width="100%"
                    height="520"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency="true"
                    allow="encrypted-media"
                    style={{ display: 'block' }}
                    title="Instagram Reel"
                />
            </div>
        );
    }
    return (
        <div style={{ width: '100%', flexShrink: 0 }}>
            <img
                src={item.src}
                alt={item.alt}
                style={{ width: '100%', borderRadius: '16px', display: 'block', maxHeight: '520px', objectFit: 'contain' }}
            />
        </div>
    );
};

// ─────────────────────────────
//  Modal com carrossel
// ─────────────────────────────
const Modal = ({ project, onClose }) => {
    const [index, setIndex] = useState(0);
    const total = project.media.length;

    const prev = (e) => { e.stopPropagation(); setIndex(i => (i - 1 + total) % total); };
    const next = (e) => { e.stopPropagation(); setIndex(i => (i + 1) % total); };

    const currentItem = project.media[index];
    const isReel = currentItem.type === 'reel';

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                    position: 'fixed', inset: 0, zIndex: 1000,
                    background: 'rgba(0,0,0,0.88)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '20px',
                    backdropFilter: 'blur(14px)',
                }}
            >
                <motion.div
                    initial={{ scale: 0.88, opacity: 0, y: 24 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.88, opacity: 0, y: 24 }}
                    transition={{ type: 'spring', damping: 22 }}
                    onClick={e => e.stopPropagation()}
                    style={{
                        background: '#fff',
                        borderRadius: '28px',
                        padding: '28px 24px 24px',
                        width: '100%',
                        maxWidth: '440px',
                        position: 'relative',
                        maxHeight: '92vh',
                        overflowY: 'auto',
                    }}
                >
                    {/* Close */}
                    <button onClick={onClose} style={{
                        position: 'absolute', top: '14px', right: '14px',
                        background: '#f2f2f2', border: 'none', borderRadius: '50%',
                        width: '34px', height: '34px', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <X size={17} />
                    </button>

                    {/* Header */}
                    <div style={{ marginBottom: '18px', paddingRight: '40px' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--gold)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            {project.category}
                        </span>
                        <h3 style={{ margin: '3px 0 2px', color: 'var(--text-primary)', fontSize: '1.2rem' }}>
                            {project.title}
                        </h3>
                        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                            {project.instagramHandle}
                        </p>
                    </div>

                    {/* Content type badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '5px',
                            background: isReel
                                ? 'linear-gradient(45deg, #f09433, #dc2743, #bc1888)'
                                : '#f0f0f0',
                            color: isReel ? '#fff' : 'var(--text-secondary)',
                            padding: '4px 12px', borderRadius: '50px',
                            fontSize: '0.72rem', fontWeight: '700',
                        }}>
                            {isReel ? <><Play size={11} fill="white" /> Reel</> : <><Image size={11} /> Post</>}
                        </span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
                            {index + 1} / {total}
                        </span>
                    </div>

                    {/* Media */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.22 }}
                        >
                            <MediaSlide item={currentItem} />
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation arrows */}
                    {total > 1 && (
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '18px' }}>
                            <motion.button
                                onClick={prev}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    padding: '10px 20px', background: '#f2f2f2',
                                    border: 'none', borderRadius: '50px',
                                    cursor: 'pointer', fontWeight: '700', fontSize: '0.85rem',
                                    color: 'var(--text-primary)',
                                }}
                            >
                                <ChevronLeft size={18} />
                                Anterior
                            </motion.button>
                            <motion.button
                                onClick={next}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    padding: '10px 20px', background: '#f2f2f2',
                                    border: 'none', borderRadius: '50px',
                                    cursor: 'pointer', fontWeight: '700', fontSize: '0.85rem',
                                    color: 'var(--text-primary)',
                                }}
                            >
                                Próximo
                                <ChevronRight size={18} />
                            </motion.button>
                        </div>
                    )}

                    {/* Dot indicators */}
                    {total > 1 && (
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '7px', marginTop: '12px' }}>
                            {project.media.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                                    style={{
                                        width: i === index ? '22px' : '8px',
                                        height: '8px',
                                        borderRadius: '50px',
                                        background: i === index
                                            ? 'linear-gradient(45deg, #f09433, #dc2743)'
                                            : '#ddd',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        padding: 0,
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {/* CTA Instagram */}
                    <a
                        href={project.instagramProfileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                            marginTop: '18px', padding: '13px',
                            background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                            borderRadius: '50px', color: '#fff',
                            fontWeight: '700', textDecoration: 'none', fontSize: '0.92rem',
                        }}
                    >
                        <Instagram size={19} />
                        Seguir {project.instagramHandle}
                    </a>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

// ─────────────────────────────
//  Seção principal
// ─────────────────────────────
const Portfolio = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section id="portfólio" style={{ padding: '100px 5%' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="gold-gradient"
                        style={{ fontWeight: '700', letterSpacing: '3px', fontSize: '0.85rem' }}
                    >
                        NOSSOS CLIENTES
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ marginBottom: '15px' }}
                    >
                        PORTFÓLIO de <span className="gold-gradient">RESULTADOS</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto', fontSize: '1.05rem' }}
                    >
                        Clique em qualquer cliente para ver os conteúdos que produzimos — fotos e vídeos num só lugar.
                    </motion.p>
                </div>

                {/* Grid — 6 cards, 1 por cliente */}
                <div className="portfolio-grid">
                    {projects.slice(0, 6).map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                        >
                            <ProjectCard project={project} onClick={setSelected} />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginTop: '70px' }}
                >
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', fontSize: '1.05rem' }}>
                        Quer ver mais do nosso trabalho?
                    </p>
                    <motion.a
                        href="https://www.instagram.com/rs.elements"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            padding: '14px 35px',
                            background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                            borderRadius: '50px', color: '#fff', fontWeight: '700',
                            textDecoration: 'none', fontSize: '1rem',
                            boxShadow: '0 10px 30px rgba(220, 39, 67, 0.3)',
                        }}
                    >
                        <Instagram size={22} />
                        Seguir @rs.elements
                    </motion.a>
                </motion.div>
            </div>

            {/* Modal */}
            {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
        </section>
    );
};

export default Portfolio;
