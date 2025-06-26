import { PROJECTS } from '../data/Data';
import '../styles/Projects.css'; // 👈 Import your page-specific styles

const Projects = () => {
	return (
		<main className="projectMain">
			<h1 className="projectH1">My Projects</h1>
			<hr className="my-5 section-divider"></hr>
			<div className="projectGrid">
				{PROJECTS.map(({ name, desc, url }) => (
					<div key={name} className="projectCard">
						<h3>{name}</h3>
						<p>{desc}</p>
						<a href={url} target="_blank" rel="noopener noreferrer">
							View Project →
						</a>
					</div>
				))}
			</div>
		</main>
	);
};

export default Projects;
