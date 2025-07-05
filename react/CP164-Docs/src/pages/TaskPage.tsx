// React

import { useParams, useNavigate } from 'react-router-dom';

// MUI Components

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Custom Components

import FunctionsPage from './FunctionsPage';

// Data

import {
	LabData,
	AssignmentData,
	type LabsAssignmentsOpts,
} from '../data/Data';

// Styles

import { dividerStyle, sampleOutput, textStyle } from '../data/Styles';
import SectionWrapper from '../components/Section';
import DescriptionIcon from '@mui/icons-material/Description';
import OutputIcon from '@mui/icons-material/Output';
import ChecklistIcon from '@mui/icons-material/Checklist';
import BuildIcon from '@mui/icons-material/Build';



// TaskPage

const TaskDisplay = (opts: LabsAssignmentsOpts) => {
	const { num, task } = useParams<{ num: string; task: string; }>();
	const navigate = useNavigate();
	// Choose the right data source
	const dataSource = opts.type === 'assignment' ? AssignmentData : LabData;

	// Find the matching lab/assignment
	const section = dataSource.find((s) => s.id === num);
	const taskData = section?.tasks.find((t) => t.id === task);

	if (section && section.functions && task == 'functions') {
		return (
			<FunctionsPage
				functions={section.functions}
				constants={section.constants ? section.constants : []}
				parent={num ? num : ''}
			/>
		);
	}
	if (!section || !taskData) {
		return (
			<Box mt={4} textAlign="center">
				<Typography variant="h5">❌ Task not found</Typography>
			</Box>
		);
	}
	return (
		<Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 }, py: { xs: 4, sm: 6 } }}>
			<Box sx={{ mb: 2 }}>
				<IconButton onClick={() => navigate(-1)} aria-label="Go back">
					<ArrowBackIcon />
				</IconButton>
			</Box>
			<Box sx={{ mb: 3 }}>
				<Typography variant="h2" sx={textStyle}>
					{taskData.name}
				</Typography>
				<Typography
					variant="h5"
					color="text.secondary"
					sx={{ fontStyle: 'italic' }}
				>
					{opts.type === 'assignment' ? `Assignment: ${section.id}` : `Lab: ${section.id}`}
				</Typography>
			</Box>
			<Divider sx={dividerStyle} />
			{/* Description */}
			<SectionWrapper title="Description" icon={DescriptionIcon}>
				<Paper elevation={3} sx={{ p: 2, mb: 3 }}>
					<Typography>{taskData.description}</Typography>
				</Paper>
			</SectionWrapper>

			{/* Objectives */}
			<SectionWrapper title='Objectives' icon={ChecklistIcon}>
				<List>
					{taskData.objectives.map((obj, index) => (
						<ListItem
							key={index}
							component={Paper}
							elevation={3}
							sx={{
								mb: 1,
								borderRadius: 2,
								px: 2,
								py: 1,
								boxShadow: 1,
								gap: 1.5,
								alignItems: 'flex-start',
							}}
						>
							<ListItemText
								primary={obj}
								slotProps={{
									primary: { variant: 'body1' },
								}}

							/>
						</ListItem>
					))}
				</List>
			</SectionWrapper>


			{/* Sample Output */}
			<SectionWrapper title="Sample Output" icon={OutputIcon}>
				<Paper elevation={3} sx={sampleOutput}>
					{taskData.sampleOutput}
				</Paper>
			</SectionWrapper>
			{/* Skills */}
			<SectionWrapper title="Skills Demonstrated" icon={BuildIcon}>
				<Box>
					{taskData.skills.map((skill, index) => (
						<Chip
							label={skill}
							key={index}
							variant="outlined"
						/>
					))}
				</Box>
			</SectionWrapper>
		</Container>
	);
};

export default TaskDisplay;
