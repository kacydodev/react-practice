import NoContextComponent from './components/NoContext';
import ThemeButton from './components/ThemeButton';
import ThemeProvider from './context/ThemeContextProvider';

export default function App() {
	return (
		<main className='space-y-12'>
			<ThemeProvider>
				<ThemeButton />
				<NoContextComponent />
			</ThemeProvider>
		</main>
	);
}
