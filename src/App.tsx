/** ======= REACT & REACT ROUTER ======= */
import { useMemo, useState } from 'react';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';

/** ======= MUI COMPONENTS ======= */
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

/** ======= CUSTOM COMPONENTS ======= */
import Header from './components/Header';
import Footer from './components/Footer';

/** ======= PAGES ======= */
import Home from './pages/Home';
import Projects from './pages/Projects';

/** ======= STYLES ======= */
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { darkTheme, lightTheme } from './data/Theme';

// App
const App = () => {
	const [mode, setMode] = useState<'light' | 'dark'>(() => {
		const stored = localStorage.getItem('colorMode');
		return stored === 'dark' ? 'dark' : 'light';
	});
	const toggleColorMode = () => {
		setMode((prevMode) => {
			const nextMode = prevMode === 'light' ? 'dark' : 'light';
			localStorage.setItem('colorMode', nextMode);
			return nextMode;
		});
	};
	const theme = useMemo(
		() => (mode === 'light' ? lightTheme : darkTheme),
		[mode]
	);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<HashRouter>
				<Header toggleColorMode={toggleColorMode} mode={`${mode}`} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/projects/CP104-Docs" element={<Navigate to={"/CP104-Docs"} />} />
					<Route path="/projects/CP164-Docs" element={<Navigate to={"/CP164-Docs"} />} />
					<Route path="/projects/CP213-Docs" element={<Navigate to={"/CP213-Docs"} />} />
					<Route path="/projects/CP216-Docs" element={<Navigate to={"/CP216-Docs"} />} />
					<Route path="/projects/CP264-Docs" element={<Navigate to={"/CP264-Docs"} />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
				<Footer />
			</HashRouter>
		</ThemeProvider>
	);
};

export default App;
