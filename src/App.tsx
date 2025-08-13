// React

import { useMemo, useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

// MUI Components

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

// Custom Components

import Header from './components/Header';
import Footer from './components/Footer';

// Pages

import Home from './pages/Home';
import Projects from './pages/Projects';

// Styles

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
			localStorage.setItem('colorMode', nextMode); // Save preference
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
				</Routes>
				<Footer />
			</HashRouter>
		</ThemeProvider>
	);
};

export default App;
