/** ======= MUI COMPONENTS ======= */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/** ======= CUSTOM COMPONENTS ======= */
import FooterButton from './FooterButton';

/** ======= DATA ======= */
import { NAME, footerButtons } from '../data/Data';

/** The Footer Component for this project */
const Footer = () => {
	return (
		<Box component="footer" textAlign="center" py={4} sx={{
			boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
			bgcolor: ({ palette }) => palette.background.default,
			color: ({ palette }) => palette.text.secondary
		}}>
			<Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
				{footerButtons.map((el, index) => {
					return (
						<FooterButton {...el} key={`${el.title}-${index}`} />
					);
				})}
			</Box>
			<Typography variant="body2" sx={{ mt: 3, color: ({ palette }) => palette.text.secondary }}>
				© 2025 {NAME}. All rights reserved.
			</Typography>
		</Box>
	);
};

export default Footer;
