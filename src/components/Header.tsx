// React

import { type FC } from 'react';
import { NavLink } from 'react-router-dom';

// Material UI 

import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';

// Icons 

import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import type { HeaderProps } from '../data/Data';
import { divCenter } from '../data/Styles';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
	color: 'inherit',
	textDecoration: 'none',
	marginRight: theme.spacing(2),
	fontWeight: 'normal',
	'&.active': {
		fontWeight: 'bold',
	},
}));

const Header: FC<HeaderProps> = ({ mode, toggleColorMode }) => {
	const theme = useTheme();
	return (
		<AppBar
			position="static"
			sx={{
				bgcolor: ({ palette }) => palette.background.default,
				color: ({ palette }) => palette.text.primary,
			}}
		>
			<Toolbar>
				<Box sx={{
					width: 48,
					height: 48,
					borderRadius: '50%',
					backgroundColor: ({ palette }) => palette.primary.main,
					...divCenter,
					overflow: 'hidden', // keeps the image inside the circle
					mr: 1
				}}>
					<Box
						component="img"
						src="pfp.png"
						alt="Logo"
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
						}}
					/>
				</Box>
				<Button
					color="inherit"
					component={StyledNavLink}
					to="/"
					end
				>
					Home
				</Button>
				<Button
					color="inherit"
					component={StyledNavLink}
					to="/projects"

				>
					Projects
				</Button>
				<Typography sx={{
					flexGrow: 1,
				}} />
				<IconButton
					onClick={toggleColorMode}
					size="small"
					sx={{
						border: `1px solid ${theme.palette.divider}`,
						borderRadius: 3,
						p: 0.75,
						transition: 'all 0.3s ease',
						'&:hover': {
							backgroundColor: ({ palette }) => palette.action.hover,
						}
					}}
				>
					{mode === 'light' ? (
						<DarkModeIcon sx={{ color: ({ palette }) => palette.primary.main }} />
					) : (
						<LightModeIcon sx={{ color: ({ palette }) => palette.primary.main }} />
					)}
				</IconButton>

			</Toolbar>
		</AppBar>
	);
};

export default Header;
