import { Typography, Divider, Box } from '@mui/material';
import ItemList from '../components/ItemList';
import type { LabsAssignmentsOpts } from '../data/Data';

// Create a page for the lab/assignment showing all the labs/assignments

const LabsAssignmentsPage = (opts: LabsAssignmentsOpts) => {
	return (
		<Box sx={{ flexGrow: 1, padding: '3rem 2rem' }}>
			<Typography variant="h3" gutterBottom>
				{opts.type == 'assignment' ? 'Assignments' : 'Labs'}
			</Typography>
			<Divider />
			<Typography variant="body1" gutterBottom>
				Here are the documented {opts.type}s
			</Typography>
			<ItemList itemType={opts.type} />
		</Box>
	);
};

export default LabsAssignmentsPage;