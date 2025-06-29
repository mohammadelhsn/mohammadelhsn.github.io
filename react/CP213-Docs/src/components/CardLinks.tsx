import {
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import type { CardTypes } from '../data/Data';

const CardLinks = (opts: CardTypes) => {
	return (
		<Grid size={{ xs: 12, sm: 6, md: 4 }}>
			<Card raised={true}>
				<CardContent
					sx={{
						paddingTop: '25px',
						borderRadius: '10px',
						boxShadow: '0 3px 8px rgba(0, 0, 0, 0.05)',
						transition: 'transform 0.2s ease',
					}}
				>
					<Typography variant="h5">{opts.title}</Typography>
					<Typography
						variant="body1"
						sx={{
							paddingTop: '25px',
						}}
					>
						{opts.desc}
					</Typography>
					<CardActions
						sx={{
							justifyContent: 'flex-start',
							paddingLeft: '0',
							paddingBottom: '0',
							paddingTop: '25px',
						}}
					>
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
							sx={{
								color: '#cc8f7f',
								textDecoration: 'none',
								fontWeight: 'bold',
								fontSize: '0.9em',
							}}
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
