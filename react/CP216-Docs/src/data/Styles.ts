import type { SxProps } from '@mui/material';

export const cardContentStyles: SxProps = {
	paddingTop: '25px',
	borderRadius: '10px',
	boxShadow: '0 3px 8px rgba(0, 0, 0, 0.05)',
	transition: 'transform 0.2s ease',
};

export const cardBodyStyles: SxProps = {
	paddingTop: '25px',
};

export const cardActionStyles: SxProps = {
	justifyContent: 'flex-start',
	paddingLeft: '0',
	paddingBottom: '0',
	paddingTop: '25px',
};

export const buttonStyles: SxProps = {
	color: '#cc8f7f',
	textDecoration: 'none',
	fontWeight: 'bold',
	fontSize: '0.9em',
};

export const outerFooterBox: SxProps = {
	boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)', // subtle top shadow
	bgcolor: 'background.paper',
};

export const dividerStyle: SxProps = {
	my: 2,
	borderBottomWidth: 2,
	borderColor: '#d0d0d0',
	borderRadius: 1,
};

export const sampleOutput: SxProps = {
	p: 2,
	mb: 3,
	bgcolor: 'background.paper',
	fontFamily: 'monospace',
	whiteSpace: 'pre-wrap',
};

export const chipStyle: SxProps = {
	marginRight: '0.8rem',
	bgcolor: 'background.paper',
};

export const projectsBox: SxProps = { flexGrow: 1, padding: '3rem 2rem' };
export const projectsHeader: SxProps = {
	textAlign: 'center',
	marginBottom: '2rem',
};

export const projectsGrid = {
	gap: '2rem',
	height: '100%',
	gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
};
