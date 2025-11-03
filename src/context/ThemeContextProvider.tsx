import React, { useMemo, useState } from 'react';
import ThemeContext from './ThemeContext';

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [theme, setTheme] = useState('light');

	const toggle = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	const toggleTheme = useMemo(() => toggle, []);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
