import { Routes, Route, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';

const App = () => {
	return (
		<HashRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
			<Footer />
		</HashRouter>
	);
};

export default App;
