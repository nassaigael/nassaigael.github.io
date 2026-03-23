import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface NavLinkProps {
    name: string;
    href: string;
    isActive: boolean;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
    index?: number;
    className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
    name,
    href,
    isActive,
    onClick,
    index = 0,
    className
}) => {
    return (
        <motion.a
            href={href}
            onClick={(e) => onClick(e, href)}
            className={cn(
                'relative px-4 py-2 rounded-xl transition-all duration-300 font-medium cursor-pointer',
                isActive
                    ? 'neumorph-inset text-blue-600 dark:text-blue-400 font-semibold'
                    : 'neumorph-sm text-gray-800 dark:text-gray-200',
                className
            )}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Soulignement premium */}
            <span className={cn(
                "absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300",
                isActive ? "w-6" : "group-hover:w-6"
            )} />
            
            <span className="relative z-10">
                {name}
            </span>
        </motion.a>
    );
};