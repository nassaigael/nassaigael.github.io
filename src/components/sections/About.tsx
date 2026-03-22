import React from 'react';
import { motion } from 'framer-motion';
import { 
    Award, 
    Heart,
    Users,
    Rocket,
    Code2,
    Sparkles,
    Zap,
    Star
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface AboutProps {
    className?: string;
}

const qualities = [
    { icon: Rocket, title: 'Innovant', description: 'Toujours à la recherche de nouvelles solutions', color: 'text-blue-500', delay: 0 },
    { icon: Users, title: 'Collaboratif', description: 'Excellent travail d\'équipe et communication', color: 'text-purple-500', delay: 0.1 },
    { icon: Heart, title: 'Passionné', description: 'Amour du code et des nouvelles technologies', color: 'text-red-500', delay: 0.2 },
    { icon: Award, title: 'Rigoureux', description: 'Attention aux détails et qualité du code', color: 'text-green-500', delay: 0.3 },
];

export const About: React.FC<AboutProps> = ({ className }) => {
    return (
        <section
            id="about"
            className={cn(
                'relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden',
                className
            )}
        >
            {/* Éléments décoratifs d'arrière-plan */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Cercles flous */}
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                
                {/* Points lumineux */}
                <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-blue-500 rounded-full animate-ping" />
                <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                
                {/* Lignes décoratives */}
                <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                <div className="absolute top-1/2 right-0 w-32 h-px bg-gradient-to-l from-transparent via-purple-500/30 to-transparent" />
            </div>

            <div className="container mx-auto px-4 lg:px-6 max-w-5xl">
                {/* Titre de section avec animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    {/* Badge décoratif */}
                    <div className="inline-flex items-center gap-2 neumorph-sm px-4 py-2 rounded-full mb-6">
                        <Sparkles size={14} className="text-blue-500" />
                        <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                            Qui suis-je ?
                        </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            À propos
                        </span>
                        <span className="text-gray-800 dark:text-gray-200"> de moi</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Découvrez mon parcours, mes compétences et ce qui me passionne dans le développement web.
                    </p>
                </motion.div>

                {/* Contenu centré */}
                <div className="flex flex-col items-center justify-center">
                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center max-w-3xl mx-auto mb-12"
                    >
                        <div className="relative inline-block mb-6">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-20" />
                            <Code2 size={48} className="relative text-blue-500 mx-auto" />
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                            Gaël RAMAHANDRISOA
                        </h3>
                        
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Zap size={16} className="text-yellow-500" />
                            <span className="text-sm font-mono text-blue-600 dark:text-blue-400">
                                Développeur Web & IA
                            </span>
                            <Zap size={16} className="text-yellow-500" />
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                            Je suis un développeur web passionné par le traitement de données et l'intelligence artificielle. 
                            Actuellement étudiant en informatique, je combine mes compétences techniques avec une forte 
                            rigueur et une capacité d'apprentissage rapide.
                        </p>
                        
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto my-6" />
                        
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                            Mon parcours m'a permis de développer une expertise en web scraping, nettoyage de données 
                            et création de datasets pour l'IA. Je suis constamment à la recherche de nouveaux défis 
                            et d'opportunités pour innover.
                        </p>
                    </motion.div>

                    {/* Qualités */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="w-full"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {qualities.map((quality) => (
                                <motion.div
                                    key={quality.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 + quality.delay }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="neumorph-sm p-6 text-center group cursor-pointer"
                                >
                                    {/* Icône avec effet de glow */}
                                    <div className="relative inline-block mb-4">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                                        <quality.icon 
                                            size={32} 
                                            className={cn(
                                                "relative transition-all duration-300 group-hover:scale-110",
                                                quality.color
                                            )} 
                                        />
                                    </div>
                                    
                                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                                        {quality.title}
                                    </h4>
                                    
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                        {quality.description}
                                    </p>
                                    
                                    {/* Décoration au hover */}
                                    <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 group-hover:w-12 transition-all duration-300" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Citation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-16 text-center"
                    >
                        <div className="neumorph-inset p-6 max-w-2xl mx-auto">
                            <Star size={24} className="text-yellow-500 mx-auto mb-3" />
                            <p className="text-gray-600 dark:text-gray-400 italic text-sm md:text-base">
                                "Le code est comme la poésie, chaque ligne raconte une histoire. 
                                La mienne est dédiée à l'innovation et à l'excellence."
                            </p>
                            <div className="mt-3 text-xs text-gray-500 dark:text-gray-500">
                                — Gaël RAMAHANDRISOA
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};