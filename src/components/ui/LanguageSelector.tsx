import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useLanguage } from '../../contexts/LanguageContext';

interface LanguageSelectorProps {
    variant?: 'default' | 'minimal';
    className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
    variant = 'default',
    className 
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { language, setLanguage } = useLanguage();

    const languages = [
        { code: 'fr', label: 'Français', flag: '🇫🇷' },
        { code: 'en', label: 'English', flag: '🇬🇧' }
    ];

    const currentLanguage = languages.find(lang => lang.code === language);

    // Fermer le dropdown quand on clique en dehors
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (langCode: 'fr' | 'en') => {
        setLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div ref={dropdownRef} className={cn("relative", className)}>
            {/* Bouton principal */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300",
                    variant === 'default' && "neumorph-sm hover:shadow-neumorph-hover",
                    variant === 'minimal' && "hover:bg-white/10",
                    "text-gray-300"
                )}
                aria-label="Changer de langue"
            >
                <Globe size={18} className="text-blue-400" />
                <span className="text-sm font-medium uppercase">{currentLanguage?.code}</span>
                <ChevronDown 
                    size={14} 
                    className={cn(
                        "transition-transform duration-300",
                        isOpen && "rotate-180"
                    )} 
                />
            </motion.button>

            {/* Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-40 neumorph-sm rounded-xl overflow-hidden z-50"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code as 'fr' | 'en')}
                                className={cn(
                                    "w-full px-4 py-2.5 flex items-center justify-between transition-all duration-200",
                                    language === lang.code
                                        ? "neumorph-inset text-blue-400 bg-blue-500/10"
                                        : "hover:bg-gray-800 text-gray-300"
                                )}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-base">{lang.flag}</span>
                                    <span className="text-sm">{lang.label}</span>
                                </div>
                                {language === lang.code && (
                                    <Check size={14} className="text-blue-400" />
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};