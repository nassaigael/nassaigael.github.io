import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className,
  icon
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        'mb-12',
        centered && 'text-center',
        className
      )}
    >
      {icon && (
        <div className={cn(
          'mb-4',
          centered && 'flex justify-center'
        )}>
          <div className="neumorph-sm p-3 inline-flex items-center justify-center">
            {icon}
          </div>
        </div>
      )}
      
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
        {title}
      </h2>
      
      {subtitle && (
        <div className="w-20 h-1 bg-linear-to-r from-gray-400 to-gray-600 rounded-full mx-auto mb-4" />
      )}
      
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};