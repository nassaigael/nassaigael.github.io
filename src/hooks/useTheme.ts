import { useEffect } from 'react';

interface UseThemeReturn {
    isDark: boolean;
    isLight: boolean;
}

export const useTheme = (): UseThemeReturn => {
    // Forcer le mode dark uniquement
    useEffect(() => {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
    }, []);

    return {
        isDark: true,
        isLight: false
    };
};