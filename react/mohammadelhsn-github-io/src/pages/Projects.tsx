import { PROJECTS } from '../data/Data';
import Project from '../components/Project';
import { Divider, Grid, Typography, Box } from '@mui/material';

const Projects = () => {
	return (
		<Box sx={{ flexGrow: 1, padding: '3rem 2rem' }}>
			<Typography
				variant="h2"
				className="projectH1"
				sx={{ textAlign: 'center', marginBottom: '2rem' }}
			>
				My Projects
			</Typography>
			<Divider
				sx={{
					borderTop: '4px solid #cc8f7f',
					width: '80%',
					margin: '2rem auto',
				}}
			/>
			<Grid
				container
				spacing={4}
				sx={{
					gap: '2rem',
					height: '100%',
					gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
				}}
			>
				{PROJECTS.map(({ name, desc, url }) => (
					<Grid container size={{ xs: 12, sm: 6, md: 4 }}>
						<Project name={name} desc={desc} url={url}></Project>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Projects;
