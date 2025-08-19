// MUI Imports

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

// Data

import { iconStyles, textStyle } from '../data/Styles';
import type { ProjectCardOpts } from '../data/Data';

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
					<Button
						href={proj.projectPage}
						sx={{
							color: 'primary.main',
							textTransform: 'none',
							fontWeight: 'bold',
							paddingLeft: '0.4rem',
						}}
					>
						View Project Page →
					</Button>
				)}
				{!proj.projectPage && proj.github && (
					<Button
						href={proj.github}
						sx={{
							color: 'primary.main',
							textTransform: 'none',
							fontWeight: 'bold',
							paddingLeft: '0.4rem',
						}}
					>
						View GitHub →
					</Button>
				)}
				{!proj.projectPage && proj.liveDemo && (
					<Button
						href={proj.liveDemo}
						sx={{
							color: 'primary.main',
							textTransform: 'none',
							fontWeight: 'bold',
							paddingLeft: '0.4rem',
						}}
					>
						View Project →
					</Button>
				)}
				{!proj.projectPage && !proj.github && !proj.liveDemo && (
					<Button
						href='#'
						sx={{
							color: 'primary.main',
							textTransform: 'none',
							fontWeight: 'bold',
							paddingLeft: '0.4rem',
						}}
					>
						Link WIP
					</Button>
				)}
			</CardActions>
		</Card>
	);
};

export default Project;
