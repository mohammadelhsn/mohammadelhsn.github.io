// React

import { useParams, useNavigate } from 'react-router-dom';

// MUI Components

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
import MenuBookIcon from '@mui/icons-material/MenuBook';

// Styles

import { textStyle } from '../data/Styles';
import SectionWrapper from '../components/Section';
import ListIcon from '@mui/icons-material/List';

// Lab/Assignment page for individual 

const LabAssignmentPage = (opts: LabsAssignmentsOpts) => {
	const { num } = useParams<{ num: string; }>();
	const dataSource = opts.type === 'assignment' ? AssignmentData : LabData;
	const section = dataSource.find((s) => s.id === num);
	const navigate = useNavigate(); // Hook for navigation
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
		<Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 }, py: { xs: 4, sm: 6 } }}>
			<Box sx={{ mb: 2 }}>
				<IconButton onClick={() => navigate(-1)} aria-label="Go back">
					<ArrowBackIcon />
				</IconButton>
			</Box>
			<Box>
				<Typography variant="h2" sx={textStyle}>
					<MenuBookIcon fontSize='inherit' sx={{
						color: 'primary.main',
						mr: 1.5,
					}} /> {section.name}
				</Typography>
				<Typography variant="h5" sx={{ fontStyle: 'italic' }}>
					Here are the documented {section.name}.
				</Typography>
				<Divider sx={{ my: 4 }} />
			</Box>
			<Box>
				<SectionWrapper title="Tasks" icon={ListIcon}>
					<ItemList
						itemType="task"
						taskStr={num || ''}
						count={section.tasks.length}
					/>
				</SectionWrapper>
			</Box>
		</Container >
	);
};

export default LabAssignmentPage;