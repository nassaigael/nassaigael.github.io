import React from 'react';
import { motion } from 'framer-motion';
import { 
    Github, 
    Linkedin, 
    Heart, 
    ArrowUp,
    Facebook,
    Twitter,
    Instagram,
    Send
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface FooterProps {
    className?: string;
}

const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-sky-500' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/gael-ramahandrisoa', color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/gaelramahandrisoa', color: 'hover:text-gray-900 dark:hover:text-white' },
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-500' },
];

const navigationLinks = [
    { name: 'À propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
];

const servicesLinks = [
    { name: 'Développement Web', href: '#services' },
    { name: 'Traitement de données', href: '#services' },
    { name: 'Web Scraping', href: '#services' },
    { name: 'Intégration IA', href: '#services' },
];

export const Footer: React.FC<FooterProps> = ({ className }) => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className={cn('mt-20 relative', className)}>
            {/* Upper Footer */}
            <div className="container mx-auto px-4 lg:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* About Widget */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 text-center sm:text-left"
                    >
                        <div className="neumorph-sm inline-block px-4 py-2 mx-auto sm:mx-0">
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                GR
                            </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
                            Développeur web passionné par le traitement de données et la création d'expériences numériques innovantes.
                        </p>
                        <div className="flex gap-3 pt-2 justify-center sm:justify-start">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="neumorph-sm p-2 rounded-xl transition-all duration-300 hover:shadow-neumorph-hover group"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <social.icon 
                                        size={18} 
                                        className={cn(
                                            "transition-colors duration-300",
                                            social.color
                                        )}
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation Widget */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-4 text-center sm:text-left"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            Navigation
                        </h3>
                        <ul className="space-y-2">
                            {navigationLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2 group justify-center sm:justify-start"
                                    >
                                        <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services Widget */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4 text-center sm:text-left"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            Services
                        </h3>
                        <ul className="space-y-2">
                            {servicesLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.05 }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2 group justify-center sm:justify-start"
                                    >
                                        <span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter Widget */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-4 text-center sm:text-left"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            Newsletter
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm mx-auto sm:mx-0">
                            Abonnez-vous pour recevoir les dernières actualités et opportunités.
                        </p>
                        <form 
                            onSubmit={(e) => {
                                e.preventDefault();
                                // Handle newsletter subscription
                            }}
                            className="relative max-w-sm mx-auto sm:mx-0"
                        >
                            <div className="neumorph-inset rounded-xl overflow-hidden">
                                <input
                                    type="email"
                                    placeholder="Votre email *"
                                    required
                                    className="w-full px-4 py-3 bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 outline-none text-sm"
                                />
                            </div>
                            <motion.button
                                type="submit"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 neumorph-sm p-2 rounded-lg hover:shadow-neumorph-hover transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Send size={16} className="text-blue-500" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Lower Footer */}
            <div className="mt-12 pt-8">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="neumorph-sm w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 pb-6">
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
                            Copyright &copy; {currentYear} Gaël RAMAHANDRISOA. Tous droits réservés.
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400 dark:text-gray-500">
                                Fait avec
                            </span>
                            <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
                            <span className="text-xs text-gray-400 dark:text-gray-500">
                                à Madagascar
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bouton retour en haut flottant */}
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 neumorph-sm p-3 rounded-xl hover:shadow-neumorph-hover transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
            >
                <ArrowUp size={20} className="text-blue-500 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
        </footer>
    );
};