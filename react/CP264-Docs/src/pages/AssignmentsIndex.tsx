// MUI Components 

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';


// Custom Components

import ItemList from '../components/ItemList';

const AssignmentIndex = () => {
	return (
		<Container maxWidth="lg" sx={{ py: 6 }}>
			<Box
				component={Paper}
				elevation={3}
				sx={{ p: 4, borderRadius: 3, backgroundColor: 'background.paper' }}
			>
				<Typography
					component="a"
					href="#"
					onClick={() => window.history.back()}
					sx={{
						display: 'inline-block',
						mb: 2,
						cursor: 'pointer',
						color: 'primary.main',
						textDecoration: 'underline',
						'&:hover': { color: 'primary.dark' },
					}}
				>
					← Go Back
				</Typography>
				<Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
					Assignments
				</Typography>
				<Divider sx={{ my: 2 }} />
				<Typography variant="body1" sx={{ mb: 4 }}>
					Here are the documented assignments.
				</Typography>
				<ItemList itemType={'assignment'} />
			</Box>
		</Container>
	);
};

export default AssignmentIndex;
