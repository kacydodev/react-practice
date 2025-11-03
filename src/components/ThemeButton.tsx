import useTheme from '../hooks/useTheme';

export default function ThemeButton() {
	const { theme, toggleTheme } = useTheme();

	return (
		<form action={toggleTheme}>
			<p>Current theme is: {theme}</p>
			<button className='bg-slate-300 dark:bg-slate-700 p-3'>
				Toggle Theme
			</button>
		</form>
	);
}
