import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Github, 
    ExternalLink, 
    Code2, 
    Calendar,
    Star,
    Play,
    Clock,
    ArrowRight,
    Layers,
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { projects, statusConfig, filters } from '../../data/projects';

// Map des icônes pour les statuts
const statusIcons = {
    Play: Play,
    Clock: Clock,
    Star: Star
};

export const Projects: React.FC = () => {
    const [filter, setFilter] = useState<string>('all');
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [expandedId] = useState<number | null>(null);

    const filteredProjects = projects.filter(project => {
        if (filter === 'all') return true;
        if (filter === 'featured') return project.featured;
        return project.status === filter;
    });

    return (
        <section id="projects" className="relative py-20 md:py-32 overflow-hidden px-4 sm:px-6 lg:px-16">
            {/* Éléments décoratifs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                
                {/* Points lumineux flottants */}
                <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-blue-500 rounded-full animate-ping" />
                <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto">
                {/* Titre de section amélioré */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Projets
                        </span>
                        <span className="text-gray-800 dark:text-gray-200"> récents</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Découvrez une sélection de mes projets les plus significatifs
                    </p>
                </motion.div>

                {/* Filtres avec animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {filters.map((f) => (
                        <motion.button
                            key={f.value}
                            onClick={() => setFilter(f.value)}
                            className={cn(
                                'px-5 py-2.5 rounded-xl transition-all duration-300 text-sm font-medium relative overflow-hidden',
                                filter === f.value
                                    ? 'neumorph-inset text-blue-600 dark:text-blue-400'
                                    : 'neumorph-sm text-gray-600 dark:text-gray-400 hover:shadow-neumorph-hover'
                            )}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {filter === f.value && (
                                <motion.div
                                    layoutId="activeFilter"
                                    className="absolute inset-0 bg-blue-500/10 rounded-xl"
                                    transition={{ type: "spring", duration: 0.5 }}
                                />
                            )}
                            <span className="relative z-10">{f.label}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Grille de projets améliorée */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => {
                            const status = statusConfig[project.status];
                            const StatusIcon = statusIcons[status.icon as keyof typeof statusIcons];
                            const isExpanded = expandedId === project.id;
                            
                            return (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    onHoverStart={() => setHoveredId(project.id)}
                                    onHoverEnd={() => setHoveredId(null)}
                                    className="group"
                                >
                                    <div className={cn(
                                        "relative overflow-hidden transition-all duration-500",
                                        "neumorph-sm ",
                                        isExpanded ? "scale-[1.02]" : ""
                                    )}>
                                        {/* Effet de glow au hover */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                                        
                                        {/* Image du projet améliorée */}
                                        <div className="relative h-56 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            
                                            {/* Badge de statut amélioré */}
                                            <div className={cn(
                                                "absolute top-4 right-4 px-3 py-1.5 rounded-xl flex items-center gap-2 backdrop-blur-md",
                                                status.bg,
                                                status.border,
                                                "border shadow-lg"
                                            )}>
                                                <StatusIcon size={12} className={status.color} />
                                                <span className={cn("text-xs font-semibold", status.color)}>
                                                    {status.label}
                                                </span>
                                            </div>

                                            {/* Badge featured amélioré */}
                                            {project.featured && (
                                                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md border border-yellow-500/30 shadow-lg">
                                                    <div className="flex items-center gap-1">
                                                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                                                        <span className="text-xs font-semibold text-yellow-500">En vedette</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Contenu amélioré */}
                                        <div className="p-6 space-y-4">
                                            <div className="flex items-start justify-between">
                                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {project.title}
                                                </h3>
                                                <Layers size={16} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                                            </div>
                                            
                                            <p className={cn(
                                                "text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-all duration-300",
                                                isExpanded ? "line-clamp-none" : "line-clamp-3"
                                            )}>
                                                {project.description}
                                            </p>

                                            {/* Technologies améliorées */}
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {project.technologies.map((tech, i) => (
                                                    <motion.span
                                                        key={i}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: i * 0.05 }}
                                                        className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 font-medium shadow-sm"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>

                                            {/* Date et métriques */}
                                            <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                                                {project.date && (
                                                    <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500">
                                                        <Calendar size={12} />
                                                        <span>{project.date}</span>
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500">
                                                    <Code2 size={12} />
                                                    <span>{project.technologies.length} technologies</span>
                                                </div>
                                            </div>

                                            {/* Boutons d'action améliorés */}
                                            <div className="flex gap-3 pt-2">
                                                {project.demoUrl && project.demoUrl !== '#' && (
                                                    <motion.a
                                                        href={project.demoUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 neumorph-sm px-4 py-2.5 rounded-xl text-sm font-medium text-blue-600 dark:text-blue-400 hover:shadow-neumorph-hover transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                    >
                                                        <ExternalLink size={14} />
                                                        <span>Démo</span>
                                                        <ArrowRight size={12} className="opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                                                    </motion.a>
                                                )}
                                                {project.githubUrl && (
                                                    <motion.a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 neumorph-sm px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:shadow-neumorph-hover transition-all duration-300 flex items-center justify-center gap-2"
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                    >
                                                        <Github size={14} />
                                                        <span>Code</span>
                                                    </motion.a>
                                                )}
                                                {(!project.demoUrl || project.demoUrl === '#') && !project.githubUrl && (
                                                    <div className="flex-1 text-center text-xs text-gray-400 dark:text-gray-500 italic py-2">
                                                        Bientôt disponible
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Effet de bordure lumineuse au hover */}
                                        <div className={cn(
                                            "absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500",
                                            hoveredId === project.id ? "ring-2 ring-blue-500/50 ring-offset-2 ring-offset-neumorph-bg dark:ring-offset-gray-950" : ""
                                        )} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Message si aucun projet avec animation */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16"
                    >
                        <div className="neumorph-sm p-8 inline-block">
                            <Code2 size={48} className="text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-500 dark:text-gray-400">
                                Aucun projet trouvé dans cette catégorie.
                            </p>
                        </div>
                    </motion.div>
                )}

                {/* Voir plus de projets */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="https://github.com/nassaigael"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 neumorph-sm px-6 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:shadow-neumorph-hover transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Github size={18} />
                        <span>Voir plus sur GitHub</span>
                        <ArrowRight size={16} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};