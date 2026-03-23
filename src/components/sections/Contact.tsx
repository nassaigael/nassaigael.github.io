import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { cn } from '../../utils/cn';
import { contactInfo, socialLinks, contactForm, contactMessages } from '../../data/contact';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

        // Simulation d'envoi (remplacer par votre API)
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

    return (
        <section id="contact" className="relative py-20 md:py-32 overflow-hidden px-4 sm:px-6 lg:px-16">
            {/* Éléments décoratifs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
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
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Contact
                        </span>
                        <span className="text-gray-800 dark:text-gray-200"> & Collaboration</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {contactMessages.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Formulaire de contact */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="neumorph-sm p-6 md:p-8 rounded-2xl"
                    >
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
                            <Send size={20} className="text-blue-500" />
                            {contactMessages.formTitle}
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {contactForm.name.label}
                                </label>
                                <input
                                    type={contactForm.name.type}
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required={contactForm.name.required}
                                    placeholder={contactForm.name.placeholder}
                                    className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:outline-none transition-colors text-gray-800 dark:text-gray-200"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {contactForm.email.label}
                                </label>
                                <input
                                    type={contactForm.email.type}
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required={contactForm.email.required}
                                    placeholder={contactForm.email.placeholder}
                                    className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:outline-none transition-colors text-gray-800 dark:text-gray-200"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {contactForm.subject.label}
                                </label>
                                <input
                                    type={contactForm.subject.type}
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required={contactForm.subject.required}
                                    placeholder={contactForm.subject.placeholder}
                                    className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:outline-none transition-colors text-gray-800 dark:text-gray-200"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {contactForm.message.label}
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required={contactForm.message.required}
                                    placeholder={contactForm.message.placeholder}
                                    rows={contactForm.message.rows}
                                    className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:outline-none transition-colors text-gray-800 dark:text-gray-200 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2",
                                    "neumorph-sm hover:shadow-neumorph-hover",
                                    "text-gray-700 dark:text-gray-300",
                                    isSubmitting && "opacity-70 cursor-not-allowed"
                                )}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                                        {contactMessages.buttonSending}
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        {contactMessages.buttonText}
                                    </>
                                )}
                            </button>

                            {/* Message de statut */}
                            {submitStatus === 'success' && (
                                <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 text-green-500">
                                    <CheckCircle size={18} />
                                    <span className="text-sm">{contactMessages.successMessage}</span>
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 text-red-500">
                                    <AlertCircle size={18} />
                                    <span className="text-sm">{contactMessages.errorMessage}</span>
                                </div>
                            )}
                        </form>
                    </motion.div>

                    {/* Informations de contact */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="neumorph-sm p-6 md:p-8 rounded-2xl">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
                                <MessageCircle size={20} className="text-purple-500" />
                                {contactMessages.infoTitle}
                            </h3>

                            <div className="space-y-5">
                                {contactInfo.map((info) => (
                                    <a
                                        key={info.label}
                                        href={info.href}
                                        target={info.label === 'Adresse' ? '_blank' : undefined}
                                        rel={info.label === 'Adresse' ? 'noopener noreferrer' : undefined}
                                        className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
                                    >
                                        <div className={cn("p-2 rounded-lg", info.color, "bg-gray-100 dark:bg-gray-800")}>
                                            <info.icon size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{info.label}</p>
                                            <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-500 transition-colors">
                                                {info.value}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Réseaux sociaux */}
                        <div className="neumorph-sm p-6 md:p-8 rounded-2xl">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                                Retrouvez-moi sur
                            </h3>
                            <div className="flex justify-center gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            "neumorph-sm p-3 rounded-xl transition-all duration-300 hover:shadow-neumorph-hover",
                                            social.color
                                        )}
                                    >
                                        <social.icon size={24} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Disponibilité */}
                        <div className="neumorph-sm p-6 md:p-8 rounded-2xl text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 mb-4">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                                </span>
                                <span className="text-xs font-medium">Disponible</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Je suis actuellement disponible pour de nouvelles opportunités et collaborations.
                                N'hésitez pas à me contacter !
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};