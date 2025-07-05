// MUI Components

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import Divider from '@mui/material/Divider';

// Data

import type { TopicOpts } from '../data/Data';
import { Paper } from '@mui/material';

// Topics

const Topic = (opts: TopicOpts) => {
	return (
		<Accordion component={Paper} elevation={3}>
			<AccordionSummary key={`topic-${opts.eventKey}`}>
				<Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
					{opts.icon && (
						<opts.icon
							fontSize="inherit"
							sx={{
								color: 'primary.main',
								mr: 1.5,
							}}
						/>
					)}
					<strong>{opts.title}</strong>
				</Typography>
			</AccordionSummary>
			<Divider sx={{ mt: 0 }} />
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
