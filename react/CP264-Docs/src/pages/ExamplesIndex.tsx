// MUI Components

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

// Custom Components

import ItemList from '../components/ItemList';

// Example Page

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
