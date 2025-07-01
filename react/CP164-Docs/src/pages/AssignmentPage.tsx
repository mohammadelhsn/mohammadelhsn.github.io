// React

import { useParams } from 'react-router-dom';

// MUI Components

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

// Custom Components

import ItemList from '../components/ItemList';

// Data

import {
	LabData,
	AssignmentData,
	type LabsAssignmentsOpts,
} from '../data/Data';

// Icons

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const LabAssignmentPage = (opts: LabsAssignmentsOpts) => {
	const { num } = useParams<{ num: string; }>();
	const dataSource = opts.type === 'assignment' ? AssignmentData : LabData;
	const section = dataSource.find((s) => s.id === num);

	if (!section) {
		return (
			<Container maxWidth="md" sx={{ mt: 8, textAlign: 'center', flexGrow: '1' }}>
				<SentimentVeryDissatisfiedIcon sx={{ fontSize: 60, color: 'error.main', mb: 2 }} />

				<Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
					Oops!
				</Typography>

				<Typography variant="h6" gutterBottom color="text.secondary">
					Looks like this {opts.type === 'assignment' ? 'assignment' : 'lab'} doesn’t exist.
				</Typography>

				<Typography variant="body1" color="text.secondary">
					Maybe you mistyped the URL? Or this one’s lost in space 🪐
				</Typography>
			</Container>
		);
	}

	return (
		<Container maxWidth="lg" sx={{ py: 6, flexGrow: 1 }}>
			<Box
				component={Paper}
				elevation={3}
				sx={{ p: 4, borderRadius: 3, backgroundColor: 'background.paper' }}
			>
				<Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
					{section.name}
				</Typography>

				<Divider sx={{ my: 2 }} />

				<Typography variant="body1" sx={{ mb: 4 }}>
					Here are the documented tasks for <strong>{section.name}</strong>.
				</Typography>

				<ItemList
					itemType="task"
					taskStr={num || ''}
					count={section.tasks.length}
				/>
			</Box>
		</Container>
	);
};

export default LabAssignmentPage;