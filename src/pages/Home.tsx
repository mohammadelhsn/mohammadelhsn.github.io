// React

import { Link } from 'react-router-dom';

// MUI Components

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// Data

import { NAME, EMAIL } from '../data/Data';

// Styles

import {
	buttonStyle,
	buttonWrapper,
	homeBoxPrimary,
	homeBoxSecondary,
	homeText,
	homeTitle,
} from '../data/Styles.ts';

// Home

const Home = () => {
	return (
		<Box sx={homeBoxPrimary}>
			<Box sx={homeBoxSecondary}>
				<Typography variant="h1" sx={homeTitle}>
					Hi, I'm {NAME}
				</Typography>

				<Typography variant="h6" sx={homeText}>
					Computer Science & Psychology student building modern, user-focused
					web apps — passionate about tech & human understanding.
				</Typography>

				<Box sx={buttonWrapper}>
					<Button
						component={Link}
						to="/projects"
						variant="outlined"
						size="large"
						sx={buttonStyle}
					>
						View My Work
					</Button>

					<Button
						component="a"
						href={`mailto:${EMAIL}`}
						variant="outlined"
						size="large"
						sx={buttonStyle}
					>
						Contact Me
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
