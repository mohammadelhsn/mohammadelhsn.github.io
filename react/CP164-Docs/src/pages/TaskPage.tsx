// React

import { useParams } from 'react-router-dom';

// MUI Components

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

// Custom Components

import FunctionsPage from './FunctionsPage';

// Data

import {
	LabData,
	AssignmentData,
	type LabsAssignmentsOpts,
} from '../data/Data';

// Styles

import { chipStyle, dividerStyle, sampleOutput } from '../data/Styles';

// TaskPage

const TaskDisplay = (opts: LabsAssignmentsOpts) => {
	const { num, task } = useParams<{ num: string; task: string; }>();
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
		<Box maxWidth="md" mx="auto" mt={4} px={2}>
			<Box sx={{ mb: 3 }}>
				<Typography variant="h4" sx={{ fontWeight: 600 }}>
					{taskData.name}
				</Typography>

				<Typography
					variant="subtitle1"
					color="text.secondary"
					sx={{ fontStyle: 'italic', mt: 0.5 }}
				>
					{opts.type === 'assignment' ? `Assignment: ${section.id}` : `Lab: ${section.id}`}
				</Typography>
			</Box>


			<Divider sx={dividerStyle} />

			{/* Description */}
			<Typography variant="h6" gutterBottom>
				Description
			</Typography>
			<Divider sx={dividerStyle} />
			<Paper elevation={1} sx={{ p: 2, mb: 3 }}>
				<Typography>{taskData.description}</Typography>
			</Paper>

			{/* Objectives */}
			<Typography variant="h6" gutterBottom>
				Objectives
			</Typography>
			<Divider sx={dividerStyle} />
			<List sx={{ mb: 4 }}>
				{taskData.objectives.map((obj, index) => (
					<ListItem
						key={index}
						sx={{
							mb: 1,
							borderRadius: 2,
							backgroundColor: 'background.paper',
							px: 2,
							py: 1,
							boxShadow: 1,
							gap: 1.5,
							alignItems: 'flex-start',
						}}
					>
						{/* Optional: add icon if desired
					<CheckCircleOutlineIcon color="primary" sx={{ mt: 0.5 }} />
					*/}
						<ListItemText
							primary={obj}
							slotProps={{
								primary: { variant: 'body1' },
							}}

						/>
					</ListItem>
				))}
			</List>

			{/* Sample Output */}
			<Typography variant="h6" mt={4}>
				Sample Output
			</Typography>
			<Divider sx={dividerStyle} />
			<Paper elevation={1} sx={sampleOutput}>
				{taskData.sampleOutput}
			</Paper>

			{/* Skills */}
			<Typography variant="h6" mt={4}>
				Skills Demonstrated
			</Typography>
			<Divider sx={dividerStyle} />
			<Box maxWidth="md" mx="auto" mt={4} px={2} pb={8}>
				{taskData.skills.map((skill, index) => (
					<Chip
						label={skill}
						key={index}
						sx={chipStyle}
						variant="outlined"
					/>
				))}
			</Box>
		</Box>
	);
};

export default TaskDisplay;
