import {
	Accordion,
	AccordionSummary,
	Typography,
	AccordionDetails,
	useTheme,
} from '@mui/material';
import type { TopicOpts } from '../data/Data';

const Topic = (opts: TopicOpts) => {
	const theme = useTheme();
	return (
		<Accordion sx={{ bgColor: theme.palette.background.paper }}>
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
