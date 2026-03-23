import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin, Clock, ArrowRight, User, MessageSquare, AtSign, FolderOpen } from 'lucide-react';
import { cn } from '../../utils/cn';
import { socialLinks, contactMessages } from '../../data/contact';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitStatus('idle'), 3000);
        } catch {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'gael.ramahandrisoa@gmail.com', href: 'mailto:gael.ramahandrisoa@gmail.com', color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { icon: Phone, label: 'Téléphone', value: '+261 38 96 821 94', href: 'tel:+261389682194', color: 'text-green-500', bg: 'bg-green-500/10' },
        { icon: MapPin, label: 'Localisation', value: 'Antananarivo, Madagascar', href: '#', color: 'text-red-500', bg: 'bg-red-500/10' },
        { icon: Clock, label: 'Disponibilité', value: 'Lun - Ven, 7h - 20h', href: '#', color: 'text-purple-500', bg: 'bg-purple-500/10' },
    ];

    const inputFields = [
        { name: 'name', icon: User, type: 'text', placeholder: 'Votre nom complet', required: true },
        { name: 'email', icon: AtSign, type: 'email', placeholder: 'votre@email.com', required: true },
        { name: 'subject', icon: FolderOpen, type: 'text', placeholder: 'Sujet de votre message', required: true },
    ];

    return (
        <section id="contact" className="relative py-20 md:py-12 overflow-hidden px-4 sm:px-6 lg:px-16">
            {/* Éléments décoratifs premium */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-40 left-20 w-64 h-64 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl" />
                
                {/* Grille technique en fond */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(180deg,rgba(147,51,234,0.02)_1px,transparent_1px)] bg-size-[50px_50px]" />
                
                {/* Points lumineux */}
                <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto max-w-5xl">
                {/* Titre de section amélioré */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Parlons
                        </span>
                        <span className="text-gray-800 dark:text-gray-200"> de votre projet</span>
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-5" />
                </motion.div>

                {/* Formulaire élargi */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="neumorph-sm p-6 md:p-6 rounded-2xl">
                        {/* En-tête du formulaire */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-linear-to-r from-blue-500/20 to-purple-500/20 mb-4">
                                <Send size={24} className="text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                                {contactMessages.formTitle}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Ligne 1: Nom et Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {inputFields.slice(0, 2).map((field) => {
                                    const Icon = field.icon;
                                    const isFocused = focusedField === field.name;
                                    return (
                                        <div key={field.name} className="relative">
                                            <div className={cn(
                                                "absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300",
                                                isFocused || formData[field.name as keyof typeof formData] ? "text-blue-500 -translate-y-7 text-xs" : "text-gray-400"
                                            )}>
                                                <Icon size={isFocused || formData[field.name as keyof typeof formData] ? 14 : 18} />
                                            </div>
                                            <input
                                                type={field.type}
                                                name={field.name}
                                                value={formData[field.name as keyof typeof formData]}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField(field.name)}
                                                onBlur={() => setFocusedField(null)}
                                                required={field.required}
                                                placeholder={field.placeholder}
                                                className={cn(
                                                    "w-full pl-11 pr-4 py-3.5 rounded-xl bg-transparent border-2 transition-all duration-300",
                                                    "text-gray-800 dark:text-gray-200",
                                                    isFocused 
                                                        ? "border-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.1)]" 
                                                        : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                                                )}
                                            />
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Sujet */}
                            <div className="relative">
                                <div className={cn(
                                    "absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300",
                                    focusedField === 'subject' || formData.subject ? "text-blue-500 -translate-y-7 text-xs" : "text-gray-400"
                                )}>
                                    <FolderOpen size={focusedField === 'subject' || formData.subject ? 14 : 18} />
                                </div>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('subject')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    placeholder="Sujet de votre message"
                                    className={cn(
                                        "w-full pl-11 pr-4 py-3.5 rounded-xl bg-transparent border-2 transition-all duration-300",
                                        "text-gray-800 dark:text-gray-200",
                                        focusedField === 'subject'
                                            ? "border-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.1)]"
                                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                                    )}
                                />
                            </div>

                            {/* Message */}
                            <div className="relative">
                                <div className={cn(
                                    "absolute left-4 top-5 transition-all duration-300",
                                    focusedField === 'message' || formData.message ? "text-blue-500 -translate-y-6 text-xs" : "text-gray-400"
                                )}>
                                    <MessageSquare size={focusedField === 'message' || formData.message ? 14 : 18} />
                                </div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    placeholder="Votre message..."
                                    rows={6}
                                    className={cn(
                                        "w-full pl-11 pr-4 py-3.5 rounded-xl bg-transparent border-2 transition-all duration-300",
                                        "text-gray-800 dark:text-gray-200 resize-none",
                                        focusedField === 'message'
                                            ? "border-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.1)]"
                                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                                    )}
                                />
                            </div>

                            {/* Bouton d'envoi */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 group",
                                    "neumorph-sm",
                                    "text-gray-700 dark:text-gray-300",
                                    isSubmitting && "opacity-70 cursor-not-allowed"
                                )}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                                        <span>{contactMessages.buttonSending}</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Envoyer le message</span>
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </motion.button>

                            {/* Message de statut */}
                            <AnimatePresence>
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="flex items-center gap-3 p-4 rounded-xl bg-linear-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20"
                                    >
                                        <CheckCircle size={20} className="text-green-500" />
                                        <span className="text-sm text-green-600 dark:text-green-400">{contactMessages.successMessage}</span>
                                    </motion.div>
                                )}
                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="flex items-center gap-3 p-4 rounded-xl bg-linear-to-r from-red-500/10 to-rose-500/10 border border-red-500/20"
                                    >
                                        <AlertCircle size={20} className="text-red-500" />
                                        <span className="text-sm text-red-600 dark:text-red-400">{contactMessages.errorMessage}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </motion.div>

                {/* Informations de contact en bas */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12"
                >
                    {/* Coordonnées */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={info.label}
                                href={info.href}
                                target={info.label === 'Localisation' ? '_blank' : undefined}
                                rel={info.label === 'Localisation' ? 'noopener noreferrer' : undefined}
                                className="neumorph-sm p-4 rounded-xl text-center transition-all duration-300 group"
                                whileHover={{ y: -3 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                            >
                                <div className={cn("inline-flex p-2.5 rounded-xl mb-2 transition-all duration-300 group-hover:scale-110", info.bg)}>
                                    <info.icon size={20} className={info.color} />
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{info.label}</p>
                                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                    {info.value}
                                </p>
                            </motion.a>
                        ))}
                    </div>

                    {/* Réseaux sociaux et disponibilité */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 neumorph-sm rounded-2xl">
                        <div className="flex items-center gap-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-500">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                                </span>
                                <span className="text-xs font-medium">Disponible</span>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Prêt à collaborer
                            </span>
                        </div>

                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        "neumorph-sm p-2.5 rounded-xl transition-all duration-300 ",
                                        social.color
                                    )}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.7 + index * 0.05 }}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};