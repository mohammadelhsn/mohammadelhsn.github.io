import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import ItemList from '../components/ItemList';
import type { LabsAssignmentsOpts } from '../data/Data';

// Create a page for the lab/assignment showing all the labs/assignments

const LabsAssignmentsPage = (opts: LabsAssignmentsOpts) => {
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
					{opts.type === 'assignment' ? 'Assignments' : 'Labs'}
				</Typography>
				<Divider sx={{ my: 2 }} />
				<Typography variant="body1" sx={{ mb: 4 }}>
					Here are the documented {opts.type}s.
				</Typography>
				<ItemList itemType={opts.type} />
			</Box>
		</Container>
	);
};

export default LabsAssignmentsPage;