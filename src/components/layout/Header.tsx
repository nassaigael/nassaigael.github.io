import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { ThemeToggle } from '../ui/ThemeToggle';
import { NavLink } from '../ui/NavLink';
import { MobileMenu } from './MobileMenu';
import { cn } from '../../utils/cn';

interface HeaderProps {
    transparent?: boolean;
}

const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Expériences', href: '#experience' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

export const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { isDark } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Détecter la section active
            const sections = navLinks.map(link => link.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);

        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    const headerClasses = cn(
        'fixed px-16 top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled || !transparent
            ? 'py-3 neumorph-sm rounded-none'
            : 'py-5 bg-transparent'
    );

    return (
        <>
            <header className={headerClasses}>
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.a
                            href="#home"
                            onClick={(e) => handleLinkClick(e, '#home')}
                            className="relative group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="neumorph-sm px-4 py-2 transition-all duration-300  relative overflow-hidden">
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative z-10">
                                    GR
                                </span>
                            </div>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-2">
                            {navLinks.map((link, index) => (
                                <NavLink
                                    key={link.name}
                                    name={link.name}
                                    href={link.href}
                                    isActive={activeSection === link.href.substring(1)}
                                    onClick={handleLinkClick}
                                    index={index}
                                />
                            ))}
                        </nav>

                        {/* Theme Toggle & Mobile Menu Button */}
                        <div className="flex items-center gap-3">
                            <ThemeToggle variant="glowing" />

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden neumorph-sm p-2 rounded-xl transition-all duration-300 relative overflow-hidden group"
                                aria-label="Menu"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                {isMobileMenuOpen ? (
                                    <X size={20} className="relative z-10" />
                                ) : (
                                    <Menu size={20} className="relative z-10" />
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Component */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navLinks={navLinks}
                activeSection={activeSection}
                onLinkClick={handleLinkClick}
                isDark={isDark}
            />
        </>
    );
};