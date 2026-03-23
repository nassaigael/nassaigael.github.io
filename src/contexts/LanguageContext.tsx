import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traductions pour le mode dark
const translations: Record<Language, Record<string, string>> = {
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.projects': 'Projets',
        'nav.skills': 'Compétences',
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.developer': 'Développeur',
        'hero.web_ai': 'Web & IA',
        'hero.description': 'Développeur fullstack spécialisé Spring Boot (backend) et React.js avec TypeScript (frontend). Fort d’une formation en traitement de données, je conçois des applications web robustes et prépare des datasets de qualité pour l’IA.',
        'hero.contact_btn': 'Me contacter',
        'hero.cv_btn': 'Télécharger CV',
        
        // Statistiques
        'stat.experience': "Années d'expérience",
        'stat.projects': 'Projets réalisés',
        'stat.technologies': 'Technologies maîtrisées',
        'stat.passion': 'Passion et dévouement',
        
        // Footer
        'footer.description': 'Développeur web passionné par le traitement de données et la création d\'expériences numériques innovantes.',
        'footer.navigation': 'Navigation',
        'footer.services': 'Services',
        'footer.newsletter': 'Newsletter',
        'footer.newsletter_desc': 'Abonnez-vous pour recevoir les dernières actualités et opportunités.',
        'footer.newsletter_placeholder': 'Votre email *',
        'footer.copyright': 'Tous droits réservés',
        'footer.made_with': 'Fait avec',
        'footer.in': 'à Madagascar',
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.developer': 'Developer',
        'hero.web_ai': 'Web & AI',
        'hero.description': 'Fullstack developer specialized in Spring Boot (backend) and React.js with TypeScript (frontend). With a background in data processing, I build robust web applications and prepare quality datasets for AI.',
        'hero.contact_btn': 'Contact me',
        'hero.cv_btn': 'Download CV',
        
        // Statistiques
        'stat.experience': 'Years of experience',
        'stat.projects': 'Projects completed',
        'stat.technologies': 'Technologies mastered',
        'stat.passion': 'Passion & dedication',
        
        // Footer
        'footer.description': 'Web developer passionate about data processing and creating innovative digital experiences.',
        'footer.navigation': 'Navigation',
        'footer.services': 'Services',
        'footer.newsletter': 'Newsletter',
        'footer.newsletter_desc': 'Subscribe to receive the latest news and opportunities.',
        'footer.newsletter_placeholder': 'Your email *',
        'footer.copyright': 'All rights reserved',
        'footer.made_with': 'Made with',
        'footer.in': 'in Madagascar',
    },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        const stored = localStorage.getItem('language') as Language;
        return stored === 'fr' || stored === 'en' ? stored : 'fr';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};