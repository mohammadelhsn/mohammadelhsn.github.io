import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CP264DocsMain from './pages/Index';
import AssignmentIndex from './pages/assignments/Index';
import LabsIndex from './pages/labs/Index';

import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/CP264/" element={<CP264DocsMain />} />
				<Route path="/CP264/assignments" element={<AssignmentIndex />} />
				<Route path="/CP264/labs" element={<LabsIndex />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
