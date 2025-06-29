import { Box, Divider, Typography } from '@mui/material';
import ItemList from '../components/ItemList';

const ExamplesIndex = () => {
	return (
		<Box sx={{ flexGrow: 1, padding: '3rem 2rem' }}>
			<Typography variant="h3">📝 Assignments</Typography>
			<Divider />
			<Typography variant="body1">
				Here are the documented assignments with source code and auto-generated
				Doxygen documentation:
			</Typography>
			<ItemList itemType="example" />
		</Box>
	);
};

export default ExamplesIndex;
