/** MUI COMPONENTS */

import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';

/** DATA */

import type { TechItemOpts } from '../data/Data';

/** TECH ITEM */

const TechItem = (opts: TechItemOpts) => {
	return (
		<ListItem>
			<ListItemText
				primary={
					<Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
						{opts.icon && (
							<opts.icon
								fontSize="inherit"
								sx={{
									color: 'primary.main',
									mr: 1.5,
								}}
							/>
						)}
						<strong>{opts.bolded}</strong>&nbsp;{opts.nonBolded}
					</Typography>
				}
			/>
		</ListItem>
	);
};

export default TechItem;
