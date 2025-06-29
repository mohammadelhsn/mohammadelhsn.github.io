import { Typography, Divider, Box } from '@mui/material';
import ItemList from '../components/ItemList';

const AssignmentsPage = () => {
	return (
		<Box sx={{ flexGrow: 1, padding: '3rem 2rem' }}>
			<Typography variant="h3">📝 Assignments</Typography>
			<Divider />
			<Typography variant="body1">
				Here are the documented assignments with source code and auto-generated
				Doxygen documentation:
			</Typography>
			<ItemList itemType="assignment" />
		</Box>
	);
};

export default AssignmentsPage;
