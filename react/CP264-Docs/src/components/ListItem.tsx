import type { AssignmentItemOpts } from '../data/Data';

const ListItem = (opts: AssignmentItemOpts) => {
	return (
		<li key={opts.key} className="list-item">
			<a href={opts.link} target="_blank">
				Assignment {opts.num}
			</a>
		</li>
	);
};

export default ListItem;
