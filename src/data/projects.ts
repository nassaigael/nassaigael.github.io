import ecrivia from "../assets/projects/ecrivia.png"
import fizanakara_cotisation from "../assets/projects/fizanakara_cotisation.png";
import plainfieo from "../assets/projects/planifieo.png";
import project4 from "../assets/projects/portfolio.png";
import eloria from "../assets/projects/eloria.png";
import fizanakara from "../assets/projects/fizanakara.png";

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    status: 'completed' | 'in-progress' | 'planned';
    demoUrl?: string;
    githubUrl?: string;
    date?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'ÉCRIVIA',
        description: 'Application de génération automatique d\'e-mails multilingues avec IA pour la rédaction de contenus professionnels.',
        image: ecrivia,
        technologies: ['React', 'JavaScript', 'PuterJS', 'TailwindCSS'],
        status: 'completed',
        demoUrl: 'https://ecrivia.onrender.com/',
        githubUrl: 'https://github.com/gaelramahandrisoa/ecrivia',
        date: '2025',
        featured: true
    },
    {
        id: 2,
        title: 'Fizanakara Cotisation',
        description: 'Système de gestion automatisée des cotisations et paiements avec tableau de bord analytique.',
        image: fizanakara_cotisation,
        technologies: ['Spring Boot', 'React', 'TypeScript', 'PostgreSQL'],
        status: 'completed',
        demoUrl: 'https://fizanakara-cotisation.onrender.com',
        githubUrl: 'https://github.com/gaelramahandrisoa/fizanakara',
        date: '2025',
        featured: true
    },
    {
        id: 3,
        title: 'Planifieo',
        description: 'Application de suivi financier avec catégorisation automatique des dépenses et alertes personnalisées.',
        image: plainfieo,
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
        status: 'completed',
        demoUrl: 'https://planifieo.onrender.com',
        githubUrl: 'https://github.com/gaelramahandrisoa/planifieo',
        date: '2025'
    },
    {
        id: 4,
        title: 'ELORIA',
        description: 'Site e-commerce de vêtements élégants pour femmes et accessoires. Interface moderne avec panier d\'achat et filtres de produits.',
        image: eloria,
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'Context API'],
        status: 'in-progress',
        demoUrl: 'https://eloria-timael.vercel.app',
        date: '2026',
        featured: false
    },
    {
        id: 5,
        title: 'FIZANAKARA',
        description: 'Site vitrine pour une association. Présentation des activités, événements et actions menées par l\'organisation avec ChatBot pour répondre aux questions des visiteurs.',
        image: fizanakara,
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        status: 'completed',
        demoUrl: 'https://fizanakara.vercel.app',
        date: '2026',
        featured: false
    },
    {
        id: 6,
        title: 'Portfolio Neumorphism',
        description: 'Portfolio personnel avec design neumorphism, dark mode et animations fluides.',
        image: project4,
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        status: 'in-progress',
        demoUrl: 'https://nassaigael.github.io',
        githubUrl: 'https://github.com/nassaigael/nassaigael.github.io',
        date: '2026'
    }
];

export const statusConfig = {
    completed: {
        label: 'Terminé',
        icon: 'Play',
        color: 'text-green-500',
        bg: 'bg-green-500/10',
        border: 'border-green-500/30'
    },
    'in-progress': {
        label: 'En cours',
        icon: 'Clock',
        color: 'text-yellow-500',
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/30'
    },
    planned: {
        label: 'Prévu',
        icon: 'Star',
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30'
    }
};

export const filters = [
    { value: 'all', label: 'Tous' },
    { value: 'featured', label: 'En vedette' },
    { value: 'completed', label: 'Terminés' },
    { value: 'in-progress', label: 'En cours' },
    { value: 'planned', label: 'Prévus' }
];