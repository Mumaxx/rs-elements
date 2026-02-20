import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: '5%',
                paddingRight: '5%'
            }}
        >
            <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img src={logoImg} alt="RS Elements Logo" style={{ height: '45px', width: 'auto' }} />
                <span className="font-bold text-2xl gold-gradient" style={{ letterSpacing: '1px' }}>RS Elements</span>
            </div>
            <div className="links" style={{ display: 'flex', gap: '30px', marginRight: '5%' }}>
                {['Sobre', 'Serviços', 'Portfólio'].map((item) => (
                    <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        whileHover={{ y: -2, color: 'var(--gold)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            textDecoration: 'none',
                            color: 'var(--text-primary)',
                            fontWeight: '600',
                            fontSize: '0.95rem',
                            position: 'relative',
                            transition: 'color 0.2s ease'
                        }}
                    >
                        {item}
                        <motion.div
                            className="link-underline"
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%' }}
                            style={{
                                position: 'absolute',
                                bottom: '-4px',
                                left: 0,
                                height: '2px',
                                background: 'var(--gold)',
                                borderRadius: '2px'
                            }}
                        />
                    </motion.a>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navbar;
