// React

import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import React from 'react';

// Components

import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import AssignmentIndex from './pages/AssignmentsIndex';
import LabsIndex from './pages/LabsIndex';
import Home from './pages/Home';

// Theme

import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './data/Theme';

// Styles

import './App.css';

// App

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
		<HashRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header toggleColorMode={toggleColorMode} mode={`${mode}`} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/assignments" element={<AssignmentIndex />} />
					<Route path="/labs" element={<LabsIndex />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
				<Footer />
			</ThemeProvider>
		</HashRouter>
	);
};

export default App;
