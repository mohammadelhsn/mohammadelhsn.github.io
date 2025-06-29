import type { SxProps } from '@mui/material';

export const buttonStyle: SxProps = {
	px: 5,
	fontWeight: 700,
	borderRadius: 3,
	borderColor: 'primary.main',
	color: '#fff',
	'&:hover': {
		bgcolor: 'primary.main', // change background color on hover
		transform: 'translateY(-3px)',
	},
};

export const homeBoxPrimary: SxProps = {
	height: '100vh',
	width: '100%',
	backgroundImage: `url(/hero.jpg)`,
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	color: '#fff',
	textAlign: 'center',
	px: 3,
	'&::before': {
		content: '""',
		position: 'absolute',
		inset: 0,
		bgcolor: 'rgba(0, 0, 0, 0.5)', // stronger overlay for max contrast
		zIndex: 1,
	},
};

export const homeBoxSecondary: SxProps = {
	position: 'relative',
	zIndex: 2,
	maxWidth: 600,
	animation: 'fadeInUp 1s ease forwards',
	'@keyframes fadeInUp': {
		'0%': { opacity: 0, transform: 'translateY(20px)' },
		'100%': { opacity: 1, transform: 'translateY(0)' },
	},
};

export const homeTitle: SxProps = {
	fontWeight: '900',
	mb: 2,
	fontSize: { xs: '2.5rem', sm: '4rem' },
	letterSpacing: '0.05em',
	textShadow: '0 2px 6px rgba(0,0,0,0.8)',
};

export const homeText: SxProps = {
	mb: 4,
	fontWeight: '400',
	fontSize: { xs: '1rem', sm: '1.25rem' },
	lineHeight: 1.6,
	textShadow: '0 1px 4px rgba(0,0,0,0.7)',
};

export const buttonWrapper: SxProps = {
	display: 'flex',
	justifyContent: 'center',
	gap: 3,
	flexWrap: 'wrap',
};

export const projectsBox: SxProps = { flexGrow: 1, padding: '3rem 2rem' };
export const projectsHeader: SxProps = {
	textAlign: 'center',
	marginBottom: '2rem',
};

export const dividerStyle = {
	borderTop: '4px solid #cc8f7f',
	width: '80%',
	margin: '2rem auto',
};

export const projectsGrid = {
	gap: '2rem',
	height: '100%',
	gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
};
