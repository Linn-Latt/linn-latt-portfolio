'use client'

import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
    const mounted = useSyncExternalStore(
        () => () => {},
        () => true,
        () => false,
    );
    const { resolvedTheme, setTheme } = useTheme();

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800" />
        );
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
        >
            {resolvedTheme === 'dark' ? (
                <Sun size={20} />
            ) : (
                <Moon size={20} />
            )}
        </button>
    );
}