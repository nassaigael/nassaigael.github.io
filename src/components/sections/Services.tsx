import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { cn } from '../../utils/cn';
import { services, servicesConfig } from '../../data/services';
import { useLanguage } from '../../contexts/LanguageContext';

export const Services: React.FC = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const { t } = useLanguage();

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

    // Fonction pour extraire la couleur hexadécimal depuis une classe Tailwind
    const getColorFromClass = (colorClass: string): string => {
        const colorMap: Record<string, string> = {
            'text-blue-500': '#3b82f6',
            'text-green-500': '#22c55e',
            'text-purple-500': '#a855f7',
            'text-cyan-500': '#06b6d4',
            'text-indigo-500': '#6366f1',
            'text-emerald-500': '#10b981',
            'text-rose-500': '#f43f5e',
            'text-orange-500': '#f97316',
        };
        return colorMap[colorClass] || '#3b82f6';
    };

    return (
        <section id="services" className="relative py-20 md:py-32 overflow-hidden px-4 sm:px-6 lg:px-16">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-lg h-128 bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(180deg,rgba(147,51,234,0.02)_1px,transparent_1px)] bg-size-[50px_50px]" />
            </div>

            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {t(servicesConfig.titleKey)}
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {services.map((service) => {
                        const isHovered = hoveredId === service.id;
                        const glowColor = getColorFromClass(service.iconColor);

                        return (
                            <motion.div
                                key={service.id}
                                onMouseEnter={() => setHoveredId(service.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className="relative group h-full"
                            >
                                {service.popular && (
                                    <div className="absolute -top-3 -right-3 z-10">
                                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-linear-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium shadow-lg">
                                            <Star size={10} />
                                            <span>{t('services.popular')}</span>
                                        </div>
                                    </div>
                                )}

                                <div className={cn(
                                    "relative neumorph-sm p-6 rounded-2xl transition-all duration-300 h-full flex flex-col",
                                    "bg-neumorph-bg",
                                    isHovered && "scale-[1.02]"
                                )}>
                                    <div className={cn(
                                        "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                                        `bg-linear-to-br ${service.bgGradient}`
                                    )} />

                                    <div className={cn(
                                        "inline-flex p-3 rounded-xl mb-4 transition-all duration-300",
                                        "bg-gray-800",
                                        isHovered && "scale-110"
                                    )}>
                                        <service.icon size={28} className={service.iconColor} />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-200 mb-2">
                                        {t(service.titleKey)}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 grow">
                                        {t(service.descriptionKey)}
                                    </p>

                                    <div className="space-y-2 mb-6">
                                        {service.featuresKeys.slice(0, 3).map((featureKey, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                                                <span className="text-xs text-gray-400">
                                                    {t(featureKey)}
                                                </span>
                                            </div>
                                        ))}
                                        {service.featuresKeys.length > 3 && (
                                            <div className="text-xs text-gray-500 italic">
                                                +{service.featuresKeys.length - 3} {t('services.more_features')}
                                            </div>
                                        )}
                                    </div>

                                    <motion.a
                                        href={servicesConfig.ctaLink}
                                        className={cn(
                                            "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 w-full",
                                            "neumorph-sm",
                                            "text-gray-300"
                                        )}
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span>{t(servicesConfig.ctaTextKey)}</span>
                                        <ArrowRight size={14} />
                                    </motion.a>

                                    {isHovered && (
                                        <div
                                            className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300"
                                            style={{
                                                boxShadow: `0 0 20px ${glowColor}40`,
                                                border: `1px solid ${glowColor}30`
                                            }}
                                        />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};




