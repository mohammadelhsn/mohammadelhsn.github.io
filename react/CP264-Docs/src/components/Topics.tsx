import { Accordion } from 'react-bootstrap';
import { TopicsData } from '../data/Data';
import Topic from './Topic';

const TopicsAccordion = () => {
	return (
		<Accordion>
			{TopicsData.map(({ title, items, eventKey }) => {
				return <Topic eventKey={eventKey} title={title} items={items}></Topic>;
			})}
		</Accordion>
	);
};

export default TopicsAccordion;
