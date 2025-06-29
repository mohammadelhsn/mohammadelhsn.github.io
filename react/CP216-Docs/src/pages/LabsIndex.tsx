import { Divider, Typography, Box } from '@mui/material';
import ItemList from '../components/ItemList';

const LabsIndex = () => {
	return (
		<Box sx={{ flexGrow: 1, padding: '3rem 2rem' }}>
			<Typography variant="h3">🔬 Labs</Typography>
			<Divider />
			<Typography variant="body1">
				Here are the documented labs with source code and auto-generated Doxygen
				documentation:
			</Typography>
			<ItemList itemType="lab" />
		</Box>
	);
};

export default LabsIndex;
