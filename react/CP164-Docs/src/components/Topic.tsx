import {
	Accordion,
	AccordionSummary,
	Typography,
	AccordionDetails,
} from '@mui/material';
import type { TopicOpts } from '../data/Data';

const Topic = (opts: TopicOpts) => {
	return (
		<Accordion>
			<AccordionSummary key={opts.eventKey}>
				<Typography variant="h6">
					<strong>{opts.title}</strong>
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<ul>
					{opts.items.map((item, idx) => (
						<li key={`${idx}-${item[0]}`}>{item}</li>
					))}
				</ul>
			</AccordionDetails>
		</Accordion>
	);
};

export default Topic;
