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
import { projects, statusConfig, filters, type Project } from '../../data/projects';
import { useLanguage } from '../../contexts/LanguageContext';

const statusIcons = {
    Play: Play,
    Clock: Clock,
    Star: Star
};

const projectDescriptionKeys: Record<number, string> = {
    1: 'projects.ecrivia_desc',
    2: 'projects.fizanakara_cotisation_desc',
    3: 'projects.planifieo_desc',
    4: 'projects.eloria_desc',
    5: 'projects.fizanakara_desc',
    6: 'projects.portfolio_desc',
};

const Projects: React.FC = () => {
    const { t } = useLanguage();
    const [filter, setFilter] = useState<string>('all');
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [expandedId] = useState<number | null>(null);

    const filteredProjects = projects.filter(project => {
        if (filter === 'all') return true;
        if (filter === 'featured') return project.featured;
        return project.status === filter;
    });

    const filterLabels: Record<string, string> = {
        all: t('projects.filter_all'),
        featured: t('projects.filter_featured'),
        completed: t('projects.filter_completed'),
        'in-progress': t('projects.filter_in_progress'),
        planned: t('projects.filter_planned'),
    };

    const statusLabels: Record<string, string> = {
        completed: t('projects.status_completed'),
        'in-progress': t('projects.status_in_progress'),
        planned: t('projects.status_planned'),
    };

    const getProjectDescription = (projectId: number, defaultDescription: string): string => {
        const descriptionKey = projectDescriptionKeys[projectId];
        if (descriptionKey) {
            const translated = t(descriptionKey);
            if (translated !== descriptionKey) {
                return translated;
            }
        }
        return defaultDescription;
    };

    const hasValidDemo = (demoUrl?: string): boolean => {
        return !!demoUrl && demoUrl !== '#';
    };

    const hasValidGithub = (githubUrl?: string): boolean => {
        return !!githubUrl && githubUrl !== '';
    };

    const getCardRedirectUrl = (project: Project): string | undefined => {
        if (hasValidDemo(project.demoUrl)) {
            return project.demoUrl;
        }
        if (hasValidGithub(project.githubUrl)) {
            return project.githubUrl;
        }
        return undefined;
    };

    const handleCardClick = (project: Project) => {
        const redirectUrl = getCardRedirectUrl(project);
        if (redirectUrl) {
            window.open(redirectUrl, '_blank');
        }
    };

    return (
        <section id="projects" className="relative py-20 md:py-32 overflow-hidden px-4 sm:px-6 lg:px-16">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-blue-500 rounded-full animate-ping" />
                <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {t('projects.title')}
                        </span>
                        <span className="text-gray-200"> {t('projects.recent')}</span>
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
                </motion.div>

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
                                    ? 'neumorph-inset text-blue-600'
                                    : 'neumorph-sm text-gray-400'
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
                            <span className="relative z-10">{filterLabels[f.value]}</span>
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => {
                            const status = statusConfig[project.status];
                            const StatusIcon = statusIcons[status.icon as keyof typeof statusIcons];
                            const isExpanded = expandedId === project.id;
                            const translatedDescription = getProjectDescription(project.id, project.description);
                            const showDemo = hasValidDemo(project.demoUrl);
                            const showGithub = hasValidGithub(project.githubUrl);
                            const hasRedirect = showDemo || showGithub;

                            const showOnlyDemo = showDemo;
                            const showOnlyGithub = !showDemo && showGithub;

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
                                    className="group h-full"
                                >
                                    <div 
                                        className={cn(
                                            "relative overflow-hidden transition-all duration-500 flex flex-col h-full",
                                            "neumorph-sm",
                                            isExpanded ? "scale-[1.02]" : "",
                                            hasRedirect && "cursor-pointer"
                                        )}
                                        onClick={() => handleCardClick(project)}
                                    >
                                        <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                                        <div className="relative h-56 shrink-0 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className={cn(
                                                "absolute top-4 right-4 px-3 py-1.5 rounded-xl flex items-center gap-2 backdrop-blur-md",
                                                status.bg,
                                                status.border,
                                                "border shadow-lg"
                                            )}>
                                                <StatusIcon size={12} className={status.color} />
                                                <span className={cn("text-xs font-semibold", status.color)}>
                                                    {statusLabels[project.status]}
                                                </span>
                                            </div>

                                            {project.featured && (
                                                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-linear-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md border border-yellow-500/30 shadow-lg">
                                                    <div className="flex items-center gap-1">
                                                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                                                        <span className="text-xs font-semibold text-yellow-500">{t('projects.featured')}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-6 space-y-4 flex flex-col grow">
                                            <div className="flex items-start justify-between">
                                                <h3 className="text-xl font-bold text-gray-200 group-hover:text-blue-400 transition-colors">
                                                    {project.title}
                                                </h3>
                                                <Layers size={16} className="text-gray-500 group-hover:text-blue-500 transition-colors shrink-0" />
                                            </div>

                                            <p className={cn(
                                                "text-sm text-gray-400 leading-relaxed",
                                                isExpanded ? "line-clamp-none" : "line-clamp-3"
                                            )}>
                                                {translatedDescription}
                                            </p>

                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {project.technologies.map((tech, i) => (
                                                    <motion.span
                                                        key={i}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: i * 0.05 }}
                                                        className="text-xs px-3 py-1.5 rounded-full bg-linear-to-r from-gray-800 to-gray-900 text-gray-300 font-medium shadow-sm"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>

                                            <div className="flex items-center justify-between pt-2 border-t border-gray-700">
                                                {project.date && (
                                                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                                        <Calendar size={12} />
                                                        <span>{project.date}</span>
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                                    <Code2 size={12} />
                                                    <span>{project.technologies.length} {t('projects.technologies')}</span>
                                                </div>
                                            </div>

                                            <div className="flex gap-3 pt-2">
                                                {showOnlyDemo && (
                                                    <motion.a
                                                        href={project.demoUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-full neumorph-sm px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn text-blue-400"
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <ExternalLink size={14} />
                                                        <span>{t('projects.demo')}</span>
                                                        <ArrowRight size={12} className="opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                                                    </motion.a>
                                                )}
                                                {showOnlyGithub && (
                                                    <motion.a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-full neumorph-sm px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 text-gray-300"
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <Github size={14} />
                                                        <span>{t('projects.code')}</span>
                                                    </motion.a>
                                                )}
                                                {!showOnlyDemo && !showOnlyGithub && (
                                                    <div className="w-full text-center text-xs text-gray-500 italic py-2">
                                                        {t('projects.soon')}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className={cn(
                                            "absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500",
                                            hoveredId === project.id ? "ring-2 ring-blue-500/50 ring-offset-2 ring-offset-neumorph-bg" : ""
                                        )} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16"
                    >
                        <div className="neumorph-sm p-8 inline-block">
                            <Code2 size={48} className="text-gray-500 mx-auto mb-4" />
                            <p className="text-gray-400">
                                {t('projects.no_projects')}
                            </p>
                        </div>
                    </motion.div>
                )}

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
                        className="inline-flex items-center gap-2 neumorph-sm px-6 py-3 rounded-xl text-gray-300 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Github size={18} />
                        <span>{t('projects.view_more')}</span>
                        <ArrowRight size={16} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;