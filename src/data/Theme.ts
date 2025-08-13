import { createTheme } from '@mui/material';

const primary = '#6093EA';
const secondary = '#9C27B0';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: { main: primary },
		secondary: { main: secondary },
	},
});

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: { main: primary },
		secondary: { main: secondary },
	},
});
