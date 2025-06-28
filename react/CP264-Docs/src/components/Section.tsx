import type { SectionOpts } from '../data/Data';

const SectionWrapper = (opts: SectionOpts) => {
	return (
		<div className="section">
			<h3 className="homeHeader">{opts.title}</h3>
			<hr className="my-3 section-divider-left" />
			{opts.children}
		</div>
	);
};

export default SectionWrapper;
