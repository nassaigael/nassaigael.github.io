import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navLinks: Array<{ name: string; href: string }>;
    activeSection: string;
    onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
    t: (key: string) => string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
    isOpen,
    onClose,
    navLinks,
    activeSection,
    onLinkClick,
    t,
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 bottom-0 w-80 z-50 lg:hidden neumorph-sm rounded-l-2xl"
                    >
                        <div className="flex flex-col h-full">
                            {/* Menu Header */}
                            <div className="flex items-center justify-between p-5">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="neumorph-sm px-3 py-1.5"
                                >
                                    <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        GR
                                    </span>
                                </motion.div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onClose}
                                    className="neumorph-sm p-2 rounded-xl"
                                >
                                    <X size={20} />
                                </motion.button>
                            </div>

                            {/* Menu Links */}
                            <nav className="flex-1 p-5 space-y-3">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => onLinkClick(e, link.href)}
                                        className={cn(
                                            'block px-5 py-3 rounded-xl transition-all duration-300 font-medium cursor-pointer text-center',
                                            activeSection === link.href.substring(1)
                                                ? 'neumorph-inset text-blue-600'
                                                : 'neumorph-sm text-gray-300'
                                        )}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        {t(link.name)}
                                    </motion.a>
                                ))}
                            </nav>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};