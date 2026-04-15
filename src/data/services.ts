import { 
    Code2, 
    Database, 
    Brain, 
    Globe, 
    Shield, 
    Cpu,
    BarChart3
} from 'lucide-react';

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
        titleKey: 'services.ai_integration',
        descriptionKey: 'services.ai_integration_desc',
        icon: Cpu,
        iconColor: 'text-cyan-500',
        bgGradient: 'from-cyan-500/20 to-blue-500/20',
        featuresKeys: ['services.feature_ml_models', 'services.feature_deployment', 'services.feature_inference', 'services.feature_monitoring', 'services.feature_optimization_ai'],
        popular: false
    },
    {
        id: 5,
        titleKey: 'services.database',
        descriptionKey: 'services.database_desc',
        icon: Database,
        iconColor: 'text-indigo-500',
        bgGradient: 'from-indigo-500/20 to-blue-500/20',
        featuresKeys: ['services.feature_postgresql', 'services.feature_mongodb', 'services.feature_mysql', 'services.feature_sql_optimization', 'services.feature_modeling']
    },
    {
        id: 6,
        titleKey: 'services.seo_ref',
        descriptionKey: 'services.seo_ref_desc',
        icon: BarChart3,
        iconColor: 'text-emerald-500',
        bgGradient: 'from-emerald-500/20 to-teal-500/20',
        featuresKeys: ['services.feature_seo_audit', 'services.feature_keywords', 'services.feature_onpage_optimization', 'services.feature_technical_seo', 'services.feature_analytics_tracking'],
        popular: false
    },
    {
        id: 7,
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