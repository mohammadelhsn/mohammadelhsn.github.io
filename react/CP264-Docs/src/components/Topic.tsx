import { Accordion } from 'react-bootstrap';
import type { TopicOpts } from '../data/Data';

const Topic = (opts: TopicOpts) => {
	return (
		<Accordion.Item eventKey={opts.eventKey}>
			<Accordion.Header>
				<strong>{opts.title}</strong>
			</Accordion.Header>
			<Accordion.Body>
				<ul>
					{opts.items.map((item, idx) => (
						<li key={idx}>{item}</li>
					))}
				</ul>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default Topic;
