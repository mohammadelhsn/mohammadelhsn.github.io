import { TechData } from '../data/Data';
import { ListGroup } from 'react-bootstrap';
import TechItem from './TechItem';

const TechList = () => {
	return (
		<ListGroup variant="flush" className="rounded-list">
			{TechData.map(({ emoji, bolded, nonBolded }) => {
				return (
					<TechItem
						emoji={emoji}
						bolded={bolded}
						nonBolded={nonBolded}
					></TechItem>
				);
			})}
		</ListGroup>
	);
};

export default TechList;
