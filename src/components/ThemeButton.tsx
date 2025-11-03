import useTheme from '../hooks/useTheme';

export default function ThemeButton() {
	const { theme, toggleTheme } = useTheme();
	// console.log('context:', context);

	return (
		<form action={() => toggleTheme()}>
			<p>Current theme is: {theme}</p>
			<button className='bg-slate-300 dark:bg-slate-800 p-3'>
				Toggle Theme
			</button>
		</form>
	);
}
