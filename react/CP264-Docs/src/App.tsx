import { Routes, Route, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AssignmentIndex from './pages/AssignmentsIndex';
import LabsIndex from './pages/LabsIndex';

import './App.css';

const App = () => {
	return (
		<HashRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/assignments" element={<AssignmentIndex />} />
				<Route path="/labs" element={<LabsIndex />} />
			</Routes>
			<Footer />
		</HashRouter>
	);
};

export default App;
