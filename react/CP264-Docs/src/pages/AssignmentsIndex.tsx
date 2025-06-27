import { PAGEDATA } from '../data/Data';

const baseUrl = import.meta.env.MODE === 'production' ? '/CP264/' : '/';

const AssignmentIndex = () => {
	return (
		<main className="assginMain">
			<h1 className="assignHeader">📝 Assignments</h1>
			<hr className="my-3 section-divider-left" />
			<p className="assignPara">
				Here are the documented assignments with source code and auto-generated
				Doxygen documentation:
			</p>
			<ul className="assignment-list">
				{Array.from({ length: PAGEDATA[0].numberOfEntries }, (_, i) => {
					const num = i + 1;
					const padded = String(num).padStart(2, '0');
					const link = `${baseUrl}assignments/elha7950_a${padded}/index.html`;
					return (
						<li key={num} className="assignment-item">
							<a href={link} target="_blank">
								Assignment {num}
							</a>
						</li>
					);
				})}
			</ul>
		</main>
	);
};

export default AssignmentIndex;
