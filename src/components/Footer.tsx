/** ======= CUSTOM COMPONENTS ======= */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/** ======= ICONS ======= */
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';

/** ======= DATA ======= */
import { NAME, EMAIL, GITHUB, LINKEDIN } from '../data/Data';
import FooterButton from './FooterButton';
import type { FooterProps } from '../data/Types';

const buttons: FooterProps[] = [
	{ title: 'Email', type: 'email', ariaLabel: 'Send Email', icon: Email, href: `mailto:${EMAIL}` },
	{ title: 'GitHub', type: 'link', href: `${GITHUB}`, icon: GitHub },
	{ title: 'LinkedIn', type: 'link', href: `${LINKEDIN}`, icon: LinkedIn }
];

/** The Footer Component for this project */
const Footer = () => {
	return (
		<Box component="footer" textAlign="center" py={4} sx={{
			boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
			bgcolor: ({ palette }) => palette.background.default,
			color: ({ palette }) => palette.text.secondary
		}}>
			<Box display="flex" justifyContent="center" gap={3}>
				{buttons.map((el, index) => {
					return (
						<FooterButton {...el} key={`${el.title}-${index}`} />
					);
				})}
			</Box>
			<Typography variant="body2" mt={3} color="textSecondary">
				© 2025 {NAME}. All rights reserved.
			</Typography>
		</Box>
	);
};

export default Footer;
