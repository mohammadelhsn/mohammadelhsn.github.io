// MUI Imports

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

// Data

import { iconStyles, textStyle } from '../data/Styles';
import { Divider, useTheme } from '@mui/material';
import type { ProjectCardOpts } from '../data/Data';

const Project = ({ proj }: ProjectCardOpts) => {
	const { palette } = useTheme();
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

				{/* Tech Stack */}
				<Divider>
					<Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>
						Tech Stack
					</Typography>
				</Divider>
				<Grid container spacing={2} mt={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					{proj.techStack.map((stack, index) => (
						<Grid key={`${stack}-${index}`}> {/* 3 per row */}
							<img
								src={`https://go-skill-icons.vercel.app/api/icons?i=${stack.toLowerCase()}&theme=${palette.mode}&titles=true`}
								alt={stack}
								style={{ width: '100%', height: 'auto' }}
							/>
						</Grid>
					))}
				</Grid>
				<Divider />
			</CardContent>

			{/* Actions / Button */}
			<CardActions>
				{proj.github && (
					<Button
						href={proj.github}
						sx={{
							color: 'primary.main',
							textTransform: 'none',
							fontWeight: 'bold',
							paddingLeft: '0.4rem',
						}}
					>
						View Github →
					</Button>
				)}
				{proj.liveDemo && (
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
				{!proj.github && !proj.liveDemo && (
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
