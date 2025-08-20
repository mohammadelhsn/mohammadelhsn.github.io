import { createTheme } from '@mui/material';

/** Primary for the project */
const primary = '#6093EA';

/** Secondary for the project */
const secondary = '#9C27B0';

/** Light theme for the project */
export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: { main: primary },
		secondary: { main: secondary },
	},
});

/** Dark theme for the project */
export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: { main: primary },
		secondary: { main: secondary },
	},
});
