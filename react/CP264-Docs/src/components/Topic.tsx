// MUI Components

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';

// Data

import type { TopicOpts } from '../data/Data';

// Topics

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
