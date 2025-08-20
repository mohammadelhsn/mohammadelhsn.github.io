// React
import { useEffect, useState } from 'react';

// MUI Components
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

// Custom Components
import Project from '../components/Project';

// Styles
import {
	projectsGrid,
	textStyle,
	iconStyles
} from '../data/Styles';

import Folder from '@mui/icons-material/Folder';
import { fetchProjects, FirestoreProject } from '../data/Firestore';

const Projects = () => {
	const [projects, setProjects] = useState<FirestoreProject[]>([]);

	useEffect(() => {
		const fetch = async () => {
			const projectData = await fetchProjects();
			if (projectData) {
				setProjects(projectData);
			}
		};
		fetch();
	}, []);
	if (!projects) return;
	return (
		<Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 }, py: { xs: 4, sm: 6 } }}>
			<Typography variant="h2" sx={textStyle}>
				<Folder fontSize='inherit' sx={iconStyles} />My Projects
			</Typography>
			<Divider sx={{ my: 4 }} />
			<Paper elevation={1} sx={{ padding: '2em' }}>
				<Grid container spacing={4} sx={projectsGrid}>
					{projects.map((proj) => (
						<Grid container size={{ xs: 12, sm: 6, md: 4 }} key={`${proj.id}`}>
							<Project proj={proj}></Project>
						</Grid>
					))}
				</Grid>
			</Paper>
		</Container>
	);
};

export default Projects;
