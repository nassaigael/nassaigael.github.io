import React from 'react';
import { motion } from 'framer-motion';
import {
    Github,
    Linkedin,
    Heart,
    ArrowUp,
    Facebook,
    Send
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { useLanguage } from '../../contexts/LanguageContext';

interface FooterProps {
    className?: string;
}

const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/gael.ramahandrisoa', color: 'hover:text-blue-600' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/nassaigael/', color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/nassaigael/', color: 'hover:text-white' },
];

const navigationLinks = [
    { nameKey: 'nav.home', href: '#home' },
    { nameKey: 'nav.projects', href: '#projects' },
    { nameKey: 'nav.skills', href: '#skills' },
    { nameKey: 'nav.services', href: '#services' },
    { nameKey: 'nav.contact', href: '#contact' },
];

const servicesLinks = [
    { nameKey: 'services.web_dev', href: '#services' },
    { nameKey: 'services.data_processing', href: '#services' },
    { nameKey: 'services.web_scraping', href: '#services' },
    { nameKey: 'services.ai_integration', href: '#services' },
];

export const Footer: React.FC<FooterProps> = ({ className }) => {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className={cn('mt-20 px-16 relative', className)}>
            <div className="container mx-auto px-4 lg:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 text-center sm:text-left"
                    >
                        <div className="neumorph-sm inline-block px-4 py-2 mx-auto sm:mx-0">
                            <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                GR
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
                            {t('footer.description')}
                        </p>
                        <div className="flex gap-3 pt-2 justify-center sm:justify-start">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="neumorph-sm p-2 rounded-xl transition-all duration-300 group"
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

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-4 text-center sm:text-left"
                    >
                        <h3 className="text-lg font-semibold text-gray-200">
                            {t('footer.navigation')}
                        </h3>
                        <ul className="space-y-2">
                            {navigationLinks.map((link, index) => (
                                <motion.li
                                    key={link.nameKey}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2 group justify-center sm:justify-start"
                                    >
                                        <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {t(link.nameKey)}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4 text-center sm:text-left"
                    >
                        <h3 className="text-lg font-semibold text-gray-200">
                            {t('footer.services')}
                        </h3>
                        <ul className="space-y-2">
                            {servicesLinks.map((link, index) => (
                                <motion.li
                                    key={link.nameKey}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.05 }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2 group justify-center sm:justify-start"
                                    >
                                        <span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {t(link.nameKey)}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-4 text-center sm:text-left"
                    >
                        <h3 className="text-lg font-semibold text-gray-200">
                            {t('footer.newsletter')}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-sm mx-auto sm:mx-0">
                            {t('footer.newsletter_desc')}
                        </p>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                            className="relative max-w-sm mx-auto sm:mx-0"
                        >
                            <div className="neumorph-inset rounded-xl overflow-hidden">
                                <input
                                    type="email"
                                    placeholder={t('footer.newsletter_placeholder')}
                                    required
                                    className="w-full px-4 py-3 bg-transparent text-gray-200 placeholder-gray-500 outline-none text-sm"
                                />
                            </div>
                            <motion.button
                                type="submit"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 neumorph-sm p-2 rounded-lg transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Send size={16} className="text-blue-500" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <div className="mt-12 pt-8">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="neumorph-sm w-full h-px bg-linear-to-r from-transparent via-gray-700 to-transparent" />
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 pb-6">
                        <p className="text-sm text-gray-400 text-center md:text-left">
                            {t('footer.copyright').replace('{year}', currentYear.toString())}
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">
                                {t('footer.made_with')}
                            </span>
                            <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
                            <span className="text-xs text-gray-500">
                                {t('footer.in')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 neumorph-sm p-3 rounded-xl transition-all duration-300 group"
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