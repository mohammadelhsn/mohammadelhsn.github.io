/** ======= MUI COMPONENTS ======= */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

/** ======= MUI ICONS ======= */
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

/** ======= CUSTOM COMPONENTS ======= */
import ProjectButton from './ProjectButton';

/** ======= DATA & TYPES ======= */
import { iconStyles, textStyle } from '../data/Styles';
import type { ProjectCardOpts } from '../data/Types';

/** Project Card for the project page */
const Project = ({ proj }: ProjectCardOpts) => {
	return (
		<Card elevation={3} sx={{ width: '100%' }}>
			{/* Header with title */}
			<CardHeader
				title={
					<Typography variant="h5" sx={textStyle}>
						<FolderOpenIcon fontSize="inherit" sx={iconStyles} /> {proj.title}
					</Typography>
				}
			/>
			{/* Content */}
			<CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
				{/* Description */}
				<Divider>
					<Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
						Description
					</Typography>
				</Divider>
				<Typography variant="body2">{proj.description}</Typography>
			</CardContent>
			{/* Actions / Button */}
			<CardActions>
				{proj.projectPage && (
					<ProjectButton href={proj.projectPage} text={`View Project Page →`} />
				)}
				{!proj.projectPage && proj.github && (
					<ProjectButton href={proj.github} text={`View GitHub →`} />
				)}
				{!proj.projectPage && proj.liveDemo && (
					<ProjectButton href={proj.liveDemo} text={'View Project →'} />
				)}
				{!proj.projectPage && proj.docs && (
					<ProjectButton href={proj.docs} text={'View Docs →'} />
				)}
				{!proj.projectPage && !proj.github && !proj.liveDemo && !proj.docs && (
					<ProjectButton href={`#`} text={'Link WIP'} />
				)}
			</CardActions>
		</Card>
	);
};

export default Project;
