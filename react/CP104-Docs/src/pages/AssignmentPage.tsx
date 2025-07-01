import {
	Box,
	Typography,
	Divider,
	List,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import {
	LabData,
	AssignmentData,
	type LabsAssignmentsOpts,
} from '../data/Data';
import ItemList from '../components/ItemList';

const LabAssignmentPage = (opts: LabsAssignmentsOpts) => {
	const { num } = useParams<{ num: string; }>();
	const dataSource = opts.type === 'assignment' ? AssignmentData : LabData;
	const section = dataSource.find((s) => s.id === num);
	if (!section) {
		return (
			<Box mt={4} textAlign="center">
				<Typography variant="h5">
					❌ {opts.type === 'assignment' ? 'Assignment' : 'Lab'} not found
				</Typography>
			</Box>
		);
	}

	return (
		<Box sx={{ flexGrow: 1, padding: '3rem 2rem' }}>
			<Typography variant="h3" gutterBottom>
				{section.name}
			</Typography>
			<Divider />
			<Typography variant="body1" gutterBottom>
				Here are the documented tasks for {section.name}
			</Typography>
			<ItemList
				itemType="task"
				taskStr={num ? num : ''}
				count={section.tasks.length}
			/>
		</Box>
	);
};

export default LabAssignmentPage;