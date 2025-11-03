import ThemeButton from './components/ThemeButton';
import ThemeProvider from './context/ThemeContextProvider';

export default function App() {
	return (
		<ThemeProvider>
			<ThemeButton />
		</ThemeProvider>
	);
}
