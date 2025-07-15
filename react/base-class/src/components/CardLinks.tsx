// React

import { Link } from 'react-router-dom';

/** MUI COMPONENTS */

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

/** DATA */

import { type CardTypes } from '../data/Data';
import { getItemType } from '../data/Functions';

/** SETTINGS */

import Settings from '../data/Settings';

/** STYLES */

import {
	buttonStyles,
	cardActionStyles,
	cardBodyStyles,
	iconStyles,
	textStyle
} from '../data/Styles';

/** Card Links component */

const CardLinks = (opts: CardTypes) => {
	const itemType = getItemType(opts.itemType);
	const itemTypeCap = getItemType(opts.itemType, true);
	const small = Settings.exampleEnable == false ? 8 : 6;
	const md = Settings.exampleEnable == false ? 6 : 4;
	return (
		<Grid size={{ xs: 12, sm: small, md: md }}>
			<Paper
				elevation={3}
				sx={{
					p: 3,
					borderRadius: 2,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					height: '100%',
				}}
			>
				<Box sx={{ mb: 2 }}>
					<Typography
						variant="h4"
						sx={textStyle}
					>
						{opts.icon && (
							<opts.icon
								fontSize="inherit"
								sx={iconStyles}
							/>
						)}
						{opts.title}
					</Typography>
					<Divider />
					<Typography variant="body1" sx={cardBodyStyles}>
						{opts.desc}
					</Typography>
				</Box>

				<Box sx={cardActionStyles}>
					<Button
						size="small"
						component={Link}
						to={itemType}
						sx={buttonStyles}
					>
						View{' '}
						{itemTypeCap}{' '}
						→
					</Button>
				</Box>
			</Paper>
		</Grid>
	);
};

export default CardLinks;
