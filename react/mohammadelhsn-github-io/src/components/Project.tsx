// MUI Imports

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

// Data

import type { Projects } from '../data/Data';
import { iconStyles, textStyle } from '../data/Styles';
import { Divider } from '@mui/material';

const Project = (opts: Projects) => {
	return (
		<Paper
			elevation={3}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				width: '100%',
				p: 2,
			}}
		>
			<Box sx={{ flexGrow: 1 }}>
				<Typography variant="h5" sx={textStyle}>
					<FolderOpenIcon fontSize='inherit' sx={iconStyles} />{opts.name}
				</Typography>
				<Divider sx={{ my: 2 }} />
				<Typography variant="body2" sx={{ paddingTop: '0.9rem' }}>
					{opts.desc}
				</Typography>
			</Box>

			<Box sx={{ mt: 'auto' }}>
				<Button
					component="a"
					href={opts.url}
					target="_blank"
					rel="noopener noreferrer"
					sx={{
						color: 'primary.main',
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
			</Box>
		</Paper>

	);
};

export default Project;
