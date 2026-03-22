import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
    Database, 
    Globe, 
    Terminal,
    Cpu,
    Layers,
    Zap
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface Skill {
    id: number;
    name: string;
    level: number;
    category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
    icon?: React.ReactNode;
    description?: string;
}

const skills: Skill[] = [
    // Frontend
    { id: 1, name: 'React', level: 85, category: 'frontend', description: 'Hooks, Context, Router' },
    { id: 2, name: 'TypeScript', level: 80, category: 'frontend', description: 'Types, Interfaces, Generics' },
    { id: 3, name: 'TailwindCSS', level: 85, category: 'frontend', description: 'Design responsive, animations' },
    { id: 4, name: 'Framer Motion', level: 75, category: 'frontend', description: 'Animations, transitions' },
    
    // Backend
    { id: 5, name: 'Python', level: 85, category: 'backend', description: 'FastAPI, Django, Flask' },
    { id: 6, name: 'Node.js', level: 75, category: 'backend', description: 'Express, REST APIs' },
    { id: 7, name: 'FastAPI', level: 80, category: 'backend', description: 'API development, async' },
    
    // Database
    { id: 8, name: 'PostgreSQL', level: 80, category: 'database', description: 'SQL, Optimisation' },
    { id: 9, name: 'MongoDB', level: 70, category: 'database', description: 'Aggregation, Indexes' },
    
    // Tools
    { id: 10, name: 'Git', level: 85, category: 'tools', description: 'Version control, GitHub' },
    { id: 11, name: 'Docker', level: 70, category: 'tools', description: 'Containers, Docker Compose' },
    { id: 12, name: 'Web Scraping', level: 85, category: 'tools', description: 'BeautifulSoup, Selenium' },
];

const categoryConfig = {
    frontend: {
        label: 'Frontend',
        icon: Globe,
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30'
    },
    backend: {
        label: 'Backend',
        icon: Terminal,
        color: 'text-green-500',
        bg: 'bg-green-500/10',
        border: 'border-green-500/30'
    },
    database: {
        label: 'Base de données',
        icon: Database,
        color: 'text-purple-500',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30'
    },
    tools: {
        label: 'Outils & Technologies',
        icon: Cpu,
        color: 'text-orange-500',
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/30'
    },
    other: {
        label: 'Autres',
        icon: Layers,
        color: 'text-pink-500',
        bg: 'bg-pink-500/10',
        border: 'border-pink-500/30'
    }
};

// Composant de barre de progression
const ProgressBar: React.FC<{ level: number; delay: number }> = ({ level, delay }) => {
    const [width, setWidth] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                setWidth(level);
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [isInView, level, delay]);

    const getColor = () => {
        if (level >= 80) return 'from-green-500 to-emerald-500';
        if (level >= 60) return 'from-blue-500 to-cyan-500';
        if (level >= 40) return 'from-yellow-500 to-orange-500';
        return 'from-red-500 to-pink-500';
    };

    return (
        <div ref={ref} className="w-full">
            <div className="neumorph-inset w-full h-2 rounded-full overflow-hidden bg-neumorph-bg dark:bg-gray-900">
                <motion.div
                    className={cn(
                        "h-full rounded-full bg-gradient-to-r",
                        getColor()
                    )}
                    initial={{ width: 0 }}
                    animate={{ width: `${width}%` }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                />
            </div>
        </div>
    );
};

export const Skills: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

    const categories = ['all', ...new Set(skills.map(s => s.category))];
    
    const filteredSkills = activeCategory === 'all' 
        ? skills 
        : skills.filter(s => s.category === activeCategory);

    // Grouper les compétences par catégorie pour l'affichage
    const skillsByCategory = filteredSkills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, Skill[]>);

    return (
        <section id="skills" className="relative py-20 md:py-32 overflow-hidden px-4 sm:px-6 lg:px-16">
            {/* Éléments décoratifs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-6xl">
                {/* Titre de section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 neumorph-sm px-5 py-2.5 rounded-full mb-6 group hover:shadow-neumorph-hover transition-all duration-300">
                        <Zap size={14} className="text-blue-500 group-hover:rotate-12 transition-transform" />
                        <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                            Mes compétences
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Compétences
                        </span>
                        <span className="text-gray-800 dark:text-gray-200"> techniques</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Les technologies et outils que je maîtrise pour créer des applications modernes et performantes
                    </p>
                </motion.div>

                {/* Filtres par catégorie */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((cat) => {
                        const config = categoryConfig[cat as keyof typeof categoryConfig];
                        return (
                            <motion.button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    'px-5 py-2.5 rounded-xl transition-all duration-300 text-sm font-medium flex items-center gap-2',
                                    activeCategory === cat
                                        ? 'neumorph-inset text-blue-600 dark:text-blue-400'
                                        : 'neumorph-sm text-gray-600 dark:text-gray-400 hover:shadow-neumorph-hover'
                                )}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {config && <config.icon size={16} className={config.color} />}
                                <span>{cat === 'all' ? 'Toutes' : config?.label}</span>
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Grille des compétences */}
                {activeCategory === 'all' ? (
                    // Affichage par catégorie
                    <div className="space-y-12">
                        {Object.entries(skillsByCategory).map(([category, categorySkills], catIndex) => {
                            const config = categoryConfig[category as keyof typeof categoryConfig];
                            return (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                                    className="space-y-4"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={cn("p-2 rounded-xl", config.bg)}>
                                            <config.icon size={24} className={config.color} />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                            {config.label}
                                        </h3>
                                        <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-700" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {categorySkills.map((skill, index) => (
                                            <SkillCard
                                                key={skill.id}
                                                skill={skill}
                                                index={index}
                                                hoveredSkill={hoveredSkill}
                                                setHoveredSkill={setHoveredSkill}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                ) : (
                    // Affichage simple pour une catégorie
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredSkills.map((skill, index) => (
                            <SkillCard
                                key={skill.id}
                                skill={skill}
                                index={index}
                                hoveredSkill={hoveredSkill}
                                setHoveredSkill={setHoveredSkill}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

// Composant SkillCard séparé
const SkillCard: React.FC<{
    skill: Skill;
    index: number;
    hoveredSkill: number | null;
    setHoveredSkill: (id: number | null) => void;
}> = ({ skill, index, hoveredSkill, setHoveredSkill }) => {
    const config = categoryConfig[skill.category as keyof typeof categoryConfig];
    
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onMouseEnter={() => setHoveredSkill(skill.id)}
            onMouseLeave={() => setHoveredSkill(null)}
            className={cn(
                "neumorph-sm p-5 transition-all duration-300",
                hoveredSkill === skill.id && "shadow-neumorph-hover scale-[1.02]"
            )}
        >
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className={cn("p-2 rounded-lg", config.bg)}>
                        <config.icon size={18} className={config.color} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                            {skill.name}
                        </h4>
                        {skill.description && (
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                {skill.description}
                            </p>
                        )}
                    </div>
                </div>
                <div className="text-right">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {skill.level}%
                    </span>
                </div>
            </div>
            
            <ProgressBar level={skill.level} delay={index * 100} />
            
            {/* Indicateur de niveau */}
            <div className="flex justify-between mt-2 text-xs text-gray-400 dark:text-gray-500">
                <span>Débutant</span>
                <span>Intermédiaire</span>
                <span>Avancé</span>
                <span>Expert</span>
            </div>
        </motion.div>
    );
};