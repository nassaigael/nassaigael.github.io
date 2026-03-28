import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Github,
    Linkedin,
    Twitter
} from 'lucide-react';

export interface ContactInfo {
    icon: React.ElementType;
    label: string;
    value: string;
    href: string;
    color: string;
}

export interface SocialLink {
    name: string;
    icon: React.ElementType;
    url: string;
    color: string;
}

export const contactInfo: ContactInfo[] = [
    {
        icon: MapPin,
        label: 'Adresse',
        value: 'II H 95 BZ TERC Soavimasoandro, 101, Antananarivo',
        href: 'https://maps.google.com/?q=II+H+95+BZ+TERC+Soavimasoandro+101+Antananarivo',
        color: 'text-red-500'
    },
    {
        icon: Phone,
        label: 'Téléphone',
        value: '+261 38 96 821 94',
        href: 'tel:+261389682194',
        color: 'text-green-500'
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'gael.ramahandrisoa@gmail.com',
        href: 'mailto:gael.ramahandrisoa@gmail.com',
        color: 'text-blue-500'
    },
    {
        icon: Clock,
        label: 'Disponibilité',
        value: 'Lun - Ven, 9h - 18h',
        href: '#',
        color: 'text-purple-500'
    }
];

export const socialLinks: SocialLink[] = [
    {
        name: 'GitHub',
        icon: Github,
        url: 'https://github.com/gaelramahandrisoa',
        color: 'hover:text-gray-900'
    },
    {
        name: 'LinkedIn',
        icon: Linkedin,
        url: 'https://linkedin.com/in/gael-ramahandrisoa',
        color: 'hover:text-blue-600'
    },
    {
        name: 'Twitter',
        icon: Twitter,
        url: 'https://twitter.com',
        color: 'hover:text-sky-500'
    }
];

export const contactForm = {
    name: {
        label: 'Nom complet',
        placeholder: 'Votre nom',
        type: 'text',
        required: true
    },
    email: {
        label: 'Email',
        placeholder: 'votre@email.com',
        type: 'email',
        required: true
    },
    subject: {
        label: 'Sujet',
        placeholder: 'Sujet de votre message',
        type: 'text',
        required: true
    },
    message: {
        label: 'Message',
        placeholder: 'Votre message...',
        type: 'textarea',
        required: true,
        rows: 5
    }
};

export const contactMessages = {
    title: 'Parlons de votre projet',
    subtitle: 'Une idée, un projet ? N\'hésitez pas à me contacter, je serais ravi d\'échanger avec vous !',
    formTitle: 'Envoyez-moi un message',
    infoTitle: 'Informations de contact',
    successMessage: 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.',
    errorMessage: 'Une erreur est survenue. Veuillez réessayer plus tard.',
    buttonText: 'Envoyer le message',
    buttonSending: 'Envoi en cours...'
};