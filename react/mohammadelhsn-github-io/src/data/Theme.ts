import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#88E1F2',
			light: '#cff3fa',
			dark: '#17b2d0',
			contrastText: '#000',
		},
		secondary: {
			main: '#6b6999',
			light: '#c4c3d6',
			dark: '#41405e',
			contrastText: '#000',
		},
		background: {
			default: '#fff',
			paper: '#fff8f5',
		},
	},
});

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#88E1F2',
			light: '#cff3fa',
			dark: '#17b2d0',
			contrastText: '#fff',
		},
		secondary: {
			main: '#dcd0ff',
			light: '#f1ecff',
			dark: '#561bff',
			contrastText: '#fff',
		},
		background: {
			default: '#000',
			paper: '#272727',
		},
	},
});
