import type { Projects } from '../data/Data';

const Project = (opts: Projects) => {
	return (
		<div key={opts.name} className="projectCard">
			<h3>{opts.name}</h3>
			<p>{opts.desc}</p>
			<a href={opts.url} target="_blank" rel="noopener noreferrer">
				View Project →
			</a>
		</div>
	);
};

export default Project;
