import { ListGroup } from 'react-bootstrap';
import type { TechItemOpts } from '../data/Data';

const TechItem = (opts: TechItemOpts) => {
	return (
		<ListGroup.Item>
			{opts.emoji} <strong>{opts.bolded}</strong> {opts.nonBolded}
		</ListGroup.Item>
	);
};

export default TechItem;
