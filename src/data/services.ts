import { 
    Code2, 
    Database, 
    Brain, 
    Globe, 
    Shield, 
    Cpu} from 'lucide-react';

export interface Service {
    id: number;
    titleKey: string;
    descriptionKey: string;
    icon: React.ElementType;
    iconColor: string;
    bgGradient: string;
    featuresKeys: string[];
    price?: string;
    popular?: boolean;
}

export const services: Service[] = [
    {
        id: 1,
        titleKey: 'services.web_dev',
        descriptionKey: 'services.web_dev_desc',
        icon: Code2,
        iconColor: 'text-blue-500',
        bgGradient: 'from-blue-500/20 to-cyan-500/20',
        featuresKeys: ['services.feature_react', 'services.feature_typescript', 'services.feature_tailwind', 'services.feature_responsive', 'services.feature_seo'],
        popular: true
    },
    {
        id: 2,
        titleKey: 'services.web_apps',
        descriptionKey: 'services.web_apps_desc',
        icon: Globe,
        iconColor: 'text-green-500',
        bgGradient: 'from-green-500/20 to-emerald-500/20',
        featuresKeys: ['services.feature_python', 'services.feature_nodejs', 'services.feature_db', 'services.feature_rest', 'services.feature_auth']
    },
    {
        id: 3,
        titleKey: 'services.ai',
        descriptionKey: 'services.ai_desc',
        icon: Brain,
        iconColor: 'text-purple-500',
        bgGradient: 'from-purple-500/20 to-pink-500/20',
        featuresKeys: ['services.feature_nlp', 'services.feature_analytics', 'services.feature_models', 'services.feature_chatbots', 'services.feature_vision'],
        popular: true
    },
    {
        id: 4,
        titleKey: 'services.web_scraping',
        descriptionKey: 'services.web_scraping_desc',
        icon: Cpu,
        iconColor: 'text-orange-500',
        bgGradient: 'from-orange-500/20 to-red-500/20',
        featuresKeys: ['services.feature_beautifulsoup', 'services.feature_selenium', 'services.feature_scrapy', 'services.feature_api', 'services.feature_cleaning']
    },
    {
        id: 5,
        titleKey: 'services.database',
        descriptionKey: 'services.database_desc',
        icon: Database,
        iconColor: 'text-indigo-500',
        bgGradient: 'from-indigo-500/20 to-blue-500/20',
        featuresKeys: ['services.feature_postgresql', 'services.feature_mongodb', 'services.feature_mysql', 'services.feature_optimization', 'services.feature_modeling']
    },
    {
        id: 6,
        titleKey: 'services.consulting',
        descriptionKey: 'services.consulting_desc',
        icon: Shield,
        iconColor: 'text-rose-500',
        bgGradient: 'from-rose-500/20 to-pink-500/20',
        featuresKeys: ['services.feature_architecture', 'services.feature_review', 'services.feature_practices', 'services.feature_audit', 'services.feature_training']
    }
];

export const servicesConfig = {
    titleKey: 'services.title',
    subtitleKey: 'services.subtitle',
    descriptionKey: 'services.description',
    ctaTextKey: 'services.cta_text',
    ctaLink: '#contact'
};