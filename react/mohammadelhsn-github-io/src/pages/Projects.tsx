import { PROJECTS } from '../data/Data';
import Project from '../components/Project';

const Projects = () => {
	return (
		<main className="projectMain">
			<h1 className="projectH1">My Projects</h1>
			<hr className="my-5 section-divider"></hr>
			<div className="projectGrid">
				{PROJECTS.map(({ name, desc, url }) => (
					<Project name={name} desc={desc} url={url}></Project>
				))}
			</div>
		</main>
	);
};

export default Projects;
