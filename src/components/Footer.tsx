/** ======= CUSTOM COMPONENTS ======= */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

/** ======= ICONS ======= */
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';

/** ======= DATA ======= */
import { EMAIL, GITHUB, LINKEDIN } from '../data/Data';

/** The Footer Component for this project */
const Footer = () => {
	return (
		<Box component="footer" textAlign="center" py={4} sx={{
			boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
			bgcolor: ({ palette }) => palette.background.default,
			color: ({ palette }) => palette.text.secondary
		}}>
			<Box display="flex" justifyContent="center" gap={3}>
				<IconButton
					component="a"
					href={`mailto:${EMAIL}`}
					aria-label="Send Email"
					title="Email"
					color="primary"
				>
					<Email />
				</IconButton>
				<IconButton
					href={GITHUB}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
					title="GitHub"
					color="primary"
					component='a'>
					<GitHub />
				</IconButton>
				<IconButton
					component="a"
					href={LINKEDIN}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
					title="LinkedIn"
					color="primary"
				>
					<LinkedIn />
				</IconButton>
			</Box>
			<Typography variant="body2" mt={3} color="textSecondary">
				© 2025 Mohammad El-Hassan. All rights reserved.
			</Typography>
		</Box>
	);
};

export default Footer;
