import { Link } from 'react-router-dom';
import { NAME, EMAIL } from '../data/Data';
import '../styles/Home.css';

const Home = () => {
	return (
		<main className="homeMain">
			<h1 className="homeHeading">Hello, I'm {NAME} 👋</h1>
			<p className="homeDescription">
				I’m a student at Wilfrid Laurier University studying Computer Science &
				Psychology, with a focus on Computation and Cognitive Neuroscience. I
				build modern, user-focused web apps and love working at the intersection
				of technology and human understanding.
			</p>
			<div className="ctaButtons">
				<Link to="./projects/">View My Work</Link>
				<a href={`mailto:${EMAIL}`}>Contact Me</a>
			</div>
		</main>
	);
};

export default Home;
