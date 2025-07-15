/** REACT */

import { useEffect, useState } from 'react';

/** MUI COMPONENTS */

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

/** CUSTOM COMPONENTS */

import Loading from './Loading';

/** TYPES */

import type { TopicOpts } from '@mohammadelhsn/portfolio-api-wrapper/dist/interfaces/Interfaces';
import type { SvgIconComponent } from '@mui/icons-material';

/** ICONS */

import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CodeIcon from '@mui/icons-material/Code';

// Settings for API access

import Settings from '../data/Settings';

// Topics

const Topics = () => {
	const [topics, setTopics] = useState<TopicOpts[]>([]);
	const [loading, setLoading] = useState(true);
	const icons: Record<string, SvgIconComponent> = {};
	useEffect(() => {
		(async () => {
			const res = await Settings.api.getTopicsData();
			if (res?.data) {
				setTopics(res.data);
			}
			setLoading(false);
		})();
	}, []);
	if (loading) {
		return (
			<Loading />
		);
	}
	return (
		<Box>
			{topics.map(({ title, eventKey, items }) => {
				icons[topics[0].title] = PsychologyIcon;
				icons[topics[1].title] = CodeIcon;
				icons[topics[2].title] = AutoGraphIcon;
				const Icon = icons[title];
				return (
					<Accordion component={Paper} elevation={3}>
						<AccordionSummary>
							<Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
								{Icon && (
									<Icon fontSize="inherit" sx={{ color: 'primary.main', mr: 1.5 }} />
								)}
								<strong>{title}</strong>
							</Typography>
						</AccordionSummary>
						<Divider />
						<AccordionDetails>
							<ul>
								{items.map((item, idx) => (
									<li key={`${eventKey}-${idx}`}>{item}</li>
								))}
							</ul>
						</AccordionDetails>
					</Accordion>
				);
			})}
		</Box>
	);
};

export default Topics;
