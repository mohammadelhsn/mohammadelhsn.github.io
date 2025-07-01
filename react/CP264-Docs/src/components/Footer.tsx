// MUI Components

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// Data

import { NAME, EMAIL, GITHUB, LINKEDIN } from '../data/Data';

// Icons 

import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';

// Styles

import { outerFooterBox } from '../data/Styles';

// Footer component

const Footer = () => (
	<Box component="footer" textAlign="center" py={4} sx={outerFooterBox}>
		<Box display="flex" justifyContent="center" gap={3}>
			<Link
				href={`mailto:${EMAIL}`}
				aria-label="Send Email"
				title="Email"
				color="inherit"
				sx={{
					'svg:hover': {
						color: 'primary.main', // change background color on hover
					},
				}}
			>
				<Email />
			</Link>
			<Link
				href={GITHUB}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub"
				title="GitHub"
				color="inherit"
				sx={{
					'svg:hover': {
						color: 'primary.main', // change background color on hover
					},
				}}
			>
				<GitHub />
			</Link>
			<Link
				href={LINKEDIN}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="YouTube"
				title="YouTube"
				color="inherit"
				sx={{
					'svg:hover': {
						color: 'primary.main', // change background color on hover
					},
				}}
			>
				<LinkedIn />
			</Link>
		</Box>
		<Typography variant="body2" mt={3} color="text.secondary">
			© 2025 {NAME}. All rights reserved.
		</Typography>
	</Box>
);

export default Footer;
