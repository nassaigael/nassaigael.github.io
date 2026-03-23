import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, ChevronRight, Code2, Database, Globe, Terminal, Sparkles } from 'lucide-react';
import { NeumorphButton } from '../ui/NeumorphButton';
import { cn } from '../../utils/cn';
import profile from "../../assets/profile.png";

interface HeroProps {
    className?: string;
}

const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/gaelramahandrisoa', color: 'hover:text-gray-900 dark:hover:text-white' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/gael-ramahandrisoa', color: 'hover:text-blue-600' },
    { name: 'Email', icon: Mail, url: 'mailto:gael.ramahandrisoa@gmail.com', color: 'hover:text-red-500' },
];

const techBadges = [
    { label: 'React', icon: Code2, color: 'text-blue-500', position: { top: '-15%', right: '-5%' }, delay: 0 },
    { label: 'Python', icon: Terminal, color: 'text-green-500', position: { top: '15%', right: '-12%' }, delay: 0.2 },
    { label: 'TypeScript', icon: Code2, color: 'text-blue-400', position: { top: '45%', right: '-15%' }, delay: 0.4 },
    { label: 'Node.js', icon: Globe, color: 'text-cyan-500', position: { bottom: '15%', right: '-12%' }, delay: 0.6 },
    { label: 'PostgreSQL', icon: Database, color: 'text-purple-500', position: { bottom: '20%', left: '-15%' }, delay: 1.2 },
    { label: 'Java', icon: Terminal, color: 'text-pink-500', position: { top: '30%', left: '-15%' }, delay: 1.4 },
    { label: 'Next.js', icon: Code2, color: 'text-gray-700 dark:text-gray-300', position: { top: '-8%', left: '-8%' }, delay: 1.6 },
];

export const Hero: React.FC<HeroProps> = ({ className }) => {
    const scrollToNext = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            const offsetTop = servicesSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const newLocal = "text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent";
    return (
        <section
            id="home"
            className={cn(
                'relative min-h-screen md:px-16 flex items-center justify-center overflow-hidden',
                className
            )}
        >
            {/* Éléments décoratifs d'arrière-plan */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Cercles flous */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

                {/* Grille technique */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-size-[50px_50px]" />

                {/* Points lumineux */}
                <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-2/3 left-1/2 w-0.5 h-0.5 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            <div className="container mx-auto px-4 lg:px-6 py-20 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Texte - colonne gauche */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        {/* Titre principal */}
                        <motion.div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold">
                                <span className="block text-gray-800 dark:text-gray-200">
                                    Gaël
                                </span>
                                <span className="block bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    RAMAHANDRISOA
                                </span>
                            </h1>

                            {/* Typing animation */}
                            <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                                <span className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400">
                                    Développeur
                                </span>
                                <motion.span
                                    className={newLocal}
                                    animate={{
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: [0.4, 0, 0.2, 1],
                                    }}
                                >
                                    Web & IA
                                </motion.span>
                            </div>

                            {/* Description */}
                            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Développeur fullstack spécialisé Spring Boot (backend) et React.js avec TypeScript (frontend).
                                Fort d’une formation en traitement de données, je conçois des applications web robustes et
                                prépare des datasets de qualité pour l’IA.
                            </p>
                        </motion.div>

                        {/* Boutons CTA */}
                        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                            <NeumorphButton
                                variant="primary"
                                size="lg"
                                icon={<ChevronRight size={18} />}
                                iconPosition="right"
                                onClick={() => {
                                    const contact = document.getElementById('contact');
                                    if (contact) {
                                        const offsetTop = contact.offsetTop - 80;
                                        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                                    }
                                }}
                            >
                                Me contacter
                            </NeumorphButton>

                            <NeumorphButton
                                variant="default"
                                size="lg"
                                icon={<Download size={18} />}
                                onClick={() => {
                                    window.open('/cv-gael-ramahandrisoa.pdf', '_blank');
                                }}
                            >
                                Télécharger CV
                            </NeumorphButton>
                        </motion.div>

                        {/* Réseaux sociaux */}
                        <motion.div className="flex gap-4 justify-center lg:justify-start mt-8">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="neumorph-sm p-3 rounded-xl transition-all duration-300 group"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                                >
                                    <social.icon
                                        size={20}
                                        className={cn(
                                            "transition-colors duration-300",
                                            social.color
                                        )}
                                    />
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Statistiques */}
                        <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto lg:mx-0">
                            {[
                                { value: '2+', label: "Années d'expérience" },
                                { value: '15+', label: 'Projets réalisés' },
                                { value: '10+', label: 'Technologies maîtrisées' },
                                { value: '100%', label: 'Passion et dévouement' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="neumorph-sm p-3 text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                >
                                    <div className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Image - colonne droite */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="flex justify-center items-center relative order-1 lg:order-2 mb-8 lg:mb-0"
                    >
                        <div className="relative">
                            {/* Effet de glow autour de l'image */}
                            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse" />

                            {/* Conteneur de l'image avec effet neumorphism */}
                            <div className="relative neumorph-lg p-3 rounded-full bg-neumorph-bg dark:bg-gray-900">
                                <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-linear-to-br from-blue-500/20 to-purple-500/20">
                                    <img
                                        src={profile}
                                        alt="Gaël RAMAHANDRISOA"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>

                            {/* Tous les badges techniques autour de l'image */}
                            {techBadges.map((badge) => (
                                <motion.div
                                    key={badge.label}
                                    className="absolute neumorph-sm px-2 py-1.5 md:px-3 md:py-2 rounded-full flex items-center gap-1 md:gap-2"
                                    style={{
                                        top: badge.position.top,
                                        right: badge.position.right,
                                        bottom: badge.position.bottom,
                                        left: badge.position.left,
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1 + badge.delay, duration: 0.3 }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                >
                                    <badge.icon size={10} className={`${badge.color} md:size-3`} />
                                    <span className={`text-[10px] md:text-xs font-mono ${badge.color}`}>
                                        {badge.label}
                                    </span>
                                </motion.div>
                            ))}

                            {/* Badge central flottant avec animation */}
                            <motion.div
                                className="absolute -top-6 left-1/2 transform -translate-x-1/2 neumorph-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-1 md:gap-2"
                                animate={{
                                    y: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                initial={{ opacity: 0, y: -20 }}
                            >
                                <Sparkles size={12} className="md:size-14 text-yellow-500" />
                                <span className="text-[10px] md:text-xs font-mono text-yellow-600 dark:text-yellow-400 font-semibold">
                                    Passionné
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Flèche pour scroll down */}
            <motion.button
                onClick={scrollToNext}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 neumorph-sm p-3 rounded-full cursor-pointer group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Défiler vers le bas"
            >
                <ArrowDown
                    size={24}
                    className="text-blue-500 group-hover:translate-y-1 transition-transform"
                />
            </motion.button>
        </section>
    );
};