import {
	Card,
	CardActions,
	CardContent,
	Typography,
	Button,
	useTheme,
} from '@mui/material';
import type { Projects } from '../data/Data';

const Project = (opts: Projects) => {
	const theme = useTheme();
	return (
		<Card
			raised={true}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				width: '100%', // Make all cards equal height
				bgcolor: `${theme.palette.background.paper}`,
			}}
		>
			<CardContent sx={{ flexGrow: 1 }}>
				<Typography variant="h5" sx={{ paddingTop: '0.9rem' }}>
					{opts.name}
				</Typography>
				<Typography variant="body2" sx={{ paddingTop: '0.9rem' }}>
					{opts.desc}
				</Typography>
			</CardContent>
			<CardActions sx={{ mt: 'auto' }}>
				<Button
					component="a"
					href={opts.url}
					target="_blank"
					rel="noopener noreferrer"
					sx={{
						color: 'secondary.main',
						textTransform: 'none',
						fontWeight: 'bold',
						paddingLeft: '0.4rem',
						display: 'inline-block',
						marginTop: '1rem',
						textDecoration: 'none',
					}}
				>
					View Project →
				</Button>
			</CardActions>
		</Card>
	);
};

export default Project;
