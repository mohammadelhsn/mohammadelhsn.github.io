/** ======= REACT ======= */
import { type FC } from 'react';

/** ======= MUI COMPONENTS ======= */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

/** ======= MUI ICONS ======= */
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';

/** ======= CUSTOM COMPONENTS ======= */
import HeaderButton from './HeaderButton';

/** ======= TYPES & STYLES ======= */
import type { HeaderProps } from '../data/Types';
import { divCenter } from '../data/Styles';


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
				<HeaderButton to={"/"} text={'Home'} end={true} />
				<HeaderButton to={"/projects"} text={'Projects'} />
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
