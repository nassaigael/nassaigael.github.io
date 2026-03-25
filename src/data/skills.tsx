import { 
    FaReact, FaNodeJs, FaGitAlt, FaDocker, FaHtml5, FaCss3Alt,
    FaFigma, FaJava
} from 'react-icons/fa';
import { 
    SiTypescript, SiTailwindcss, SiFramer, SiPostgresql,
    SiNextdotjs, SiMysql} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { DiMongodb } from 'react-icons/di';

export interface Skill {
    id: number;
    name: string;
    icon: React.ReactNode;
    iconColor: string;
    bgIcon: string;
    category: 'frontend' | 'backend' | 'database' | 'tools';
}

export const skillsData: Skill[] = [
    // Frontend
    { id: 1, name: 'React', icon: <FaReact size={28} />, iconColor: 'text-cyan-500', bgIcon: '⚛️', category: 'frontend' },
    { id: 2, name: 'TypeScript', icon: <SiTypescript size={28} />, iconColor: 'text-blue-500', bgIcon: 'TS', category: 'frontend' },
    { id: 3, name: 'TailwindCSS', icon: <SiTailwindcss size={28} />, iconColor: 'text-teal-500', bgIcon: '🎨', category: 'frontend' },
    { id: 4, name: 'Framer Motion', icon: <SiFramer size={28} />, iconColor: 'text-purple-500', bgIcon: '✨', category: 'frontend' },
    { id: 5, name: 'HTML5', icon: <FaHtml5 size={28} />, iconColor: 'text-orange-500', bgIcon: '🌐', category: 'frontend' },
    { id: 6, name: 'CSS3', icon: <FaCss3Alt size={28} />, iconColor: 'text-blue-400', bgIcon: '🎨', category: 'frontend' },
    { id: 7, name: 'Next.js', icon: <SiNextdotjs size={28} />, iconColor: 'text-white', bgIcon: '▲', category: 'frontend' },
    
    // Backend
    { id: 9, name: 'Node.js', icon: <FaNodeJs size={28} />, iconColor: 'text-green-600', bgIcon: '🚀', category: 'backend' },
    { id: 10, name: 'Java', icon: <FaJava size={28} />, iconColor: 'text-emerald-500', bgIcon: '⚡', category: 'backend' },
    { id: 12, name: 'REST API', icon: <TbApi size={28} />, iconColor: 'text-blue-500', bgIcon: '🔌', category: 'backend' },
    
    // Database
    { id: 13, name: 'PostgreSQL', icon: <SiPostgresql size={28} />, iconColor: 'text-blue-600', bgIcon: '🐘', category: 'database' },
    { id: 14, name: 'MongoDB', icon: <DiMongodb size={28} />, iconColor: 'text-green-600', bgIcon: '🍃', category: 'database' },
    { id: 15, name: 'MySQL', icon: <SiMysql size={28} />, iconColor: 'text-blue-500', bgIcon: '🗄️', category: 'database' },
    
    // Tools
    { id: 17, name: 'Git', icon: <FaGitAlt size={28} />, iconColor: 'text-orange-600', bgIcon: '🔀', category: 'tools' },
    { id: 18, name: 'Docker', icon: <FaDocker size={28} />, iconColor: 'text-sky-500', bgIcon: '🐳', category: 'tools' },
    { id: 19, name: 'Figma', icon: <FaFigma size={28} />, iconColor: 'text-pink-500', bgIcon: '🎨', category: 'tools' },
];

export const categoryConfig = {
    frontend: { label: 'Frontend', color: 'text-blue-500' },
    backend: { label: 'Backend', color: 'text-green-500' },
    database: { label: 'Base de données', color: 'text-purple-500' },
    tools: { label: 'Outils', color: 'text-orange-500' }
};

export const categories = ['all', ...new Set(skillsData.map(s => s.category))];