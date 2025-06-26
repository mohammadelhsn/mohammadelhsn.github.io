import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
	const [darkMode, setDarkMode] = React.useState(
		() => localStorage.getItem('darkMode') === 'enabled'
	);
	React.useEffect(() => {
		if (darkMode) {
			document.body.classList.add('darkMode');
			localStorage.setItem('darkMode', 'enabled');
		} else {
			document.body.classList.remove('darkMode');
			localStorage.setItem('darkMode', 'disabled');
		}
	}, [darkMode]);
	return (
		<header>
			<nav className="navbar">
				<div className="nav-links">
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? 'active' : '')}
						end
					>
						Home
					</NavLink>
					<NavLink
						to="https://mohammadelhsn.github.io/projects"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						Projects
					</NavLink>
				</div>
				<button id="darkModeToggle" onClick={() => setDarkMode(!darkMode)}>
					{darkMode ? 'Light Mode' : 'Dark Mode'}
				</button>
			</nav>
		</header>
	);
};

export default Header;
