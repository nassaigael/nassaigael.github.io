import { 
    Code2, 
    Database, 
    Brain, 
    Globe, 
    Shield, 
    Cpu} from 'lucide-react';

export interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
    iconColor: string;
    bgGradient: string;
    features: string[];
    price?: string;
    popular?: boolean;
}

export const services: Service[] = [
    {
        id: 1,
        title: 'Développement Web',
        description: 'Création de sites web modernes, responsives et performants avec les dernières technologies.',
        icon: Code2,
        iconColor: 'text-blue-500',
        bgGradient: 'from-blue-500/20 to-cyan-500/20',
        features: ['React / Next.js', 'TypeScript', 'TailwindCSS', 'Responsive Design', 'SEO Optimisé'],
        popular: true
    },
    {
        id: 2,
        title: 'Applications Web',
        description: 'Développement d\'applications web full-stack avec API RESTful et bases de données.',
        icon: Globe,
        iconColor: 'text-green-500',
        bgGradient: 'from-green-500/20 to-emerald-500/20',
        features: ['Python / FastAPI', 'Node.js', 'PostgreSQL / MongoDB', 'API REST', 'Authentification']
    },
    {
        id: 3,
        title: 'Intelligence Artificielle',
        description: 'Intégration de solutions IA et machine learning pour automatiser vos processus.',
        icon: Brain,
        iconColor: 'text-purple-500',
        bgGradient: 'from-purple-500/20 to-pink-500/20',
        features: ['NLP', 'Analyse de données', 'Modèles prédictifs', 'Chatbots', 'Vision par ordinateur'],
        popular: true
    },
    {
        id: 4,
        title: 'Web Scraping',
        description: 'Extraction et collecte de données structurées depuis des sites web.',
        icon: Cpu,
        iconColor: 'text-orange-500',
        bgGradient: 'from-orange-500/20 to-red-500/20',
        features: ['BeautifulSoup', 'Selenium', 'Scrapy', 'API personnalisées', 'Nettoyage de données']
    },
    {
        id: 5,
        title: 'Base de données',
        description: 'Conception et optimisation de bases de données pour vos applications.',
        icon: Database,
        iconColor: 'text-indigo-500',
        bgGradient: 'from-indigo-500/20 to-blue-500/20',
        features: ['PostgreSQL', 'MongoDB', 'MySQL', 'Optimisation SQL', 'Modélisation']
    },
    {
        id: 6,
        title: 'Consulting Technique',
        description: 'Conseil et accompagnement dans vos projets techniques et architecturaux.',
        icon: Shield,
        iconColor: 'text-rose-500',
        bgGradient: 'from-rose-500/20 to-pink-500/20',
        features: ['Architecture logicielle', 'Code review', 'Best practices', 'Audit technique', 'Formation']
    }
];

export const servicesConfig = {
    title: 'Mes Services',
    subtitle: 'Des solutions sur mesure pour vos projets',
    description: 'Je vous accompagne dans la réalisation de vos projets avec des services adaptés à vos besoins.',
    ctaText: 'Demander un devis',
    ctaLink: '#contact'
};