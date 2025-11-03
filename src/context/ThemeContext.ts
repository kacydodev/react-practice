import { createContext } from 'react';
// import type { ThemeContext } from '../types';

interface ThemeContext {
	theme: string;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContext | null>(null);

export default ThemeContext;
