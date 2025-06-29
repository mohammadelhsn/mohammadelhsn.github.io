import { NAME, EMAIL, GITHUB, LINKEDIN } from '../data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => (
	<Box
		component="footer"
		textAlign="center"
		py={4}
		sx={{
			boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)', // subtle top shadow
			color: (theme) =>
				theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary,
			bgcolor: (theme) =>
				theme.palette.mode === 'light'
					? theme.palette.background.paper
					: theme.palette.background.paper,
		}}
	>
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
				<FontAwesomeIcon icon={faEnvelope} />
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
				<FontAwesomeIcon icon={faGithub} />
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
				<FontAwesomeIcon icon={faLinkedin} />
			</Link>
		</Box>
		<Typography variant="body2" mt={3} color="text.secondary">
			© 2025 {NAME}. All rights reserved.
		</Typography>
	</Box>
);

export default Footer;
