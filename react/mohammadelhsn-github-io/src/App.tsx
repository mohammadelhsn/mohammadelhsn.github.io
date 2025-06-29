import { Routes, Route, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';
import { darkTheme, lightTheme } from './data/Theme';
import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
	const [mode, setMode] = React.useState<'light' | 'dark'>(() => {
		const stored = localStorage.getItem('colorMode');
		return stored === 'dark' ? 'dark' : 'light';
	});
	const toggleColorMode = () => {
		setMode((prevMode) => {
			const nextMode = prevMode === 'light' ? 'dark' : 'light';
			localStorage.setItem('colorMode', nextMode); // Save preference
			return nextMode;
		});
	};
	const theme = React.useMemo(
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
				</Routes>
				<Footer />
			</HashRouter>
		</ThemeProvider>
	);
};

export default App;
