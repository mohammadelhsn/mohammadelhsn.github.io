// React

import React from 'react';
import { NavLink } from 'react-router-dom';

// Material UI 

import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

// Interfaces

interface HeaderProps {
	mode: 'light' | 'dark';
	toggleColorMode: () => void;
}

const StyledNavLink = styled(NavLink)(({ theme }) => ({
	color: 'inherit',
	textDecoration: 'none',
	marginRight: theme.spacing(2),
	fontWeight: 'normal',
	'&.active': {
		fontWeight: 'bold',
	},
}));

const Header: React.FC<HeaderProps> = ({ mode, toggleColorMode }) => {
	return (
		<AppBar
			position="static"
			sx={{
				bgcolor: (theme) =>
					theme.palette.mode === 'light'
						? theme.palette.background.paper
						: theme.palette.background.paper,
				color: (theme) =>
					theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary,
				padding: '1rem 2rem',
			}}
		>
			<Toolbar>
				<Button
					color="inherit"
					component={StyledNavLink}
					to="/"
					sx={{
						'&:hover': {
							bgcolor: 'primary.main', // change background color on hover
						},
						'&:active': {
							bgcolor: 'primary.main', // change background color on hover
						},
					}}
					end
				>
					Home
				</Button>
				<Button
					color="inherit"
					component={StyledNavLink}
					to="/projects"
					sx={{
						'&:hover': {
							bgcolor: 'primary.main', // change background color on hover
						},
						'&:active': {
							bgcolor: 'primary.main', // change background color on hover
						},
					}}
				>
					Projects
				</Button>
				<Typography sx={{ flexGrow: 1 }} />
				<Button
					variant="outlined"
					color="primary"
					onClick={toggleColorMode}
					sx={{
						'&:hover': {
							bgcolor: 'primary.main', // change background color on hover
							color: '#fff',
						},
					}}
				>
					{mode === 'light' ? 'Dark' : 'Light'} Mode
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
