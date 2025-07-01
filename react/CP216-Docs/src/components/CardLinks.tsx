// React

import { Link } from 'react-router-dom';

// MUI Components

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Data

import type { CardTypes } from '../data/Data';

// Styles 

import {
	buttonStyles,
	cardActionStyles,
	cardBodyStyles,
	cardContentStyles,
} from '../data/Styles';

// Card Links component

const CardLinks = (opts: CardTypes) => {
	return (
		<Grid size={{ xs: 12, sm: 8, md: 6 }}>
			<Card raised={true}>
				<CardContent sx={cardContentStyles}>
					<Typography variant="h5">{opts.title}</Typography>
					<Typography variant="body1" sx={cardBodyStyles}>
						{opts.desc}
					</Typography>
					<CardActions sx={cardActionStyles}>
						<Button
							size="small"
							component={Link}
							to={
								opts.itemType == 'assignment'
									? 'assignments'
									: opts.itemType == 'example'
										? 'examples'
										: 'labs'
							}
							sx={buttonStyles}
						>
							View{' '}
							{opts.itemType == 'assignment'
								? 'Assignments'
								: opts.itemType == 'example'
									? 'Examples'
									: 'Labs'}{' '}
							→
						</Button>
					</CardActions>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default CardLinks;
