import { PAGEDATA } from '../data/Data';

const LabsIndex = () => {
	return (
		<main className="labMain">
			<h1 className="labHeader">🔬 Labs</h1>
			<hr className="my-3 section-divider-left" />
			<p className="labPara">
				Here are the documented labs with source code and auto-generated Doxygen
				documentation:
			</p>
			<ul className="lab-list">
				{Array.from({ length: PAGEDATA[1].numberOfEntries }, (_, i) => {
					const num = i + 1;
					const padded = String(num).padStart(2, '0');
					const link = `elha7950_l${padded}/`;
					return (
						<li key={num} className="lab-item">
							<a href={link}>Lab {num}</a>
						</li>
					);
				})}
			</ul>
		</main>
	);
};

export default LabsIndex;
