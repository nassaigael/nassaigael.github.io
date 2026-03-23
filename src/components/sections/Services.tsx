import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { cn } from '../../utils/cn';
import { services, servicesConfig } from '../../data/services';

export const Services: React.FC = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };


    return (
        <section id="services" className="relative py-20 md:py-32 overflow-hidden px-4 sm:px-6 lg:px-16">
            {/* Éléments décoratifs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-lg h-128 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl" />
                
                {/* Grille technique */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(180deg,rgba(147,51,234,0.02)_1px,transparent_1px)] bg-size-[50px_50px]" />
            </div>

            <div className="container mx-auto max-w-7xl">
                {/* Titre de section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {servicesConfig.title}
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
                </motion.div>

                {/* Grille des services */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            onMouseEnter={() => setHoveredId(service.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="relative group"
                        >
                            {/* Badge populaire */}
                            {service.popular && (
                                <div className="absolute -top-3 -right-3 z-10">
                                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-linear-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium shadow-lg">
                                        <Star size={10} />
                                        <span>Populaire</span>
                                    </div>
                                </div>
                            )}

                            {/* Carte service */}
                            <div className={cn(
                                "relative neumorph-sm p-6 rounded-2xl transition-all duration-300 h-full",
                                "bg-neumorph-bg dark:bg-gray-900",
                                hoveredId === service.id && " scale-[1.02]"
                            )}>
                                {/* Effet de fond gradient au hover */}
                                <div className={cn(
                                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                                    `bg-linear-to-br ${service.bgGradient}`
                                )} />

                                {/* Icône */}
                                <div className={cn(
                                    "inline-flex p-3 rounded-xl mb-4 transition-all duration-300",
                                    "bg-gray-100 dark:bg-gray-800",
                                    hoveredId === service.id && "scale-110"
                                )}>
                                    <service.icon size={28} className={service.iconColor} />
                                </div>

                                {/* Titre */}
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-2 mb-6">
                                    {service.features.slice(0, 3).map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                                            <span className="text-xs text-gray-600 dark:text-gray-400">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                    {service.features.length > 3 && (
                                        <div className="text-xs text-gray-500 dark:text-gray-500 italic">
                                            +{service.features.length - 3} autres fonctionnalités
                                        </div>
                                    )}
                                </div>

                                {/* Bouton CTA */}
                                <motion.a
                                    href={servicesConfig.ctaLink}
                                    className={cn(
                                        "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                                        "neumorph-sm",
                                        "text-gray-700 dark:text-gray-300"
                                    )}
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>{servicesConfig.ctaText}</span>
                                    <ArrowRight size={14} />
                                </motion.a>

                                {/* Effet de bordure lumineuse au hover */}
                                {hoveredId === service.id && (
                                    <div 
                                        className="absolute inset-0 rounded-2xl pointer-events-none"
                                        style={{
                                            boxShadow: `0 0 20px ${service.iconColor.replace('text-', '').replace('-500', '')}40`,
                                            border: `1px solid ${service.iconColor.replace('text-', '').replace('-500', '')}30`
                                        }}
                                    />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};