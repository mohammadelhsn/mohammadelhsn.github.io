import { PROJECTS } from '../data/Data';
import Project from '../components/Project';
import { Divider, Grid, Typography, Box } from '@mui/material';
import {
	dividerStyle,
	projectsBox,
	projectsGrid,
	projectsHeader,
} from '../data/Styles';

const Projects = () => {
	return (
		<Box sx={projectsBox}>
			<Typography variant="h2" className="projectH1" sx={projectsHeader}>
				My Projects
			</Typography>
			<Divider sx={dividerStyle} />
			<Grid container spacing={4} sx={projectsGrid}>
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
