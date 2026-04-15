import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { cn } from '../../utils/cn';
import { services, servicesConfig } from '../../data/services';
import { useLanguage } from '../../contexts/LanguageContext';

export const Services: React.FC = () => {
	const [hoveredId, setHoveredId] = useState<number | null>(null);
	const { t } = useLanguage();

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const getColorFromClass = (colorClass: string): string => {
		const colorMap: Record<string, string> = {
			'text-blue-500': '#3b82f6',
			'text-green-500': '#22c55e',
			'text-purple-500': '#a855f7',
			'text-cyan-500': '#06b6d4',
			'text-indigo-500': '#6366f1',
			'text-emerald-500': '#10b981',
			'text-rose-500': '#f43f5e',
			'text-orange-500': '#f97316',
		};
		return colorMap[colorClass] || '#3b82f6';
	};

	return (
		<section id="services" className="relative py-20 md:py-32 overflow-hidden px-4 sm:px-6 lg:px-16">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
				<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(180deg,rgba(147,51,234,0.02)_1px,transparent_1px)] bg-size-[50px_50px]" />

				<div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
				<div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
				<div className="absolute top-2/3 left-1/3 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
			</div>

			<div className="container mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12 md:mb-16"
				>
					<motion.div
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full neumorph-sm mb-6"
					>
						<span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
							{t('services.subtitle')}
						</span>
					</motion.div>

					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
						<span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							{t(servicesConfig.titleKey)}
						</span>
					</h2>
					<div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
					<p className="text-gray-400 max-w-2xl mx-auto">
						{t(servicesConfig.descriptionKey)}
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
				>
					{services.map((service, index) => {
						const isHovered = hoveredId === service.id;
						const glowColor = getColorFromClass(service.iconColor);

						return (
							<motion.div
								key={service.id}
								custom={index}
								onMouseEnter={() => setHoveredId(service.id)}
								onMouseLeave={() => setHoveredId(null)}
								className="relative group h-full"
							>
								{service.popular && (
									<motion.div
										className="absolute -top-3 -right-3 z-20"
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{ type: "spring", stiffness: 500, delay: index * 0.1 }}
									>
										<div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-linear-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium shadow-lg">
											<Star size={12} className="fill-white" />
											<span>{t('services.popular')}</span>
										</div>
									</motion.div>
								)}

								<div className={cn(
									"relative p-6 rounded-2xl transition-all duration-300 h-full flex flex-col",
									"bg-neumorph-bg",
									!isHovered && "neumorph-sm",
									isHovered && "scale-[1.02] shadow-none"
								)}>
									<div className={cn(
										"absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
										`bg-linear-to-br ${service.bgGradient}`
									)} />

									<motion.div
										className={cn(
											"inline-flex p-3 rounded-xl mb-4 transition-all duration-300 relative z-10",
											"bg-gray-800/80 backdrop-blur-sm",
											isHovered && "scale-110"
										)}
										animate={isHovered ? { rotate: [0, -5, 5, 0] } : { rotate: 0 }}
										transition={{ duration: 0.3 }}
									>
										<service.icon size={28} className={service.iconColor} />
									</motion.div>

									<h3 className="text-xl font-bold text-gray-200 mb-2 relative z-10">
										{t(service.titleKey)}
									</h3>

									<p className="text-gray-400 text-sm leading-relaxed mb-4 grow relative z-10">
										{t(service.descriptionKey)}
									</p>

									<div className="w-12 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 rounded-full mb-4 relative z-10" />

									<div className="space-y-2 mb-6 relative z-10">
										{service.featuresKeys.map((featureKey, i) => (
											<motion.div
												key={i}
												className="flex items-center gap-2"
												initial={{ opacity: 0, x: -10 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: i * 0.05 }}
											>
												<CheckCircle2 size={14} className="text-green-500 shrink-0" />
												<span className="text-xs text-gray-400">
													{t(featureKey)}
												</span>
											</motion.div>
										))}
									</div>

									<motion.a
										href={servicesConfig.ctaLink}
										className={cn(
											"inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 w-full relative z-10",
											"text-gray-300",
											!isHovered && "neumorph-sm",
											isHovered && "shadow-none bg-gray-800/50 text-white"
										)}
										whileHover={{ x: 5 }}
										whileTap={{ scale: 0.98 }}
									>
										<span>{t(servicesConfig.ctaTextKey)}</span>
										<ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
									</motion.a>

									{isHovered && (
										<motion.div
											className="absolute inset-0 rounded-2xl pointer-events-none"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											style={{
												boxShadow: `0 0 25px ${glowColor}60`,
												border: `1px solid ${glowColor}40`
											}}
										/>
									)}
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};