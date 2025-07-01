// MUI Components 

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// Data

import type { TechItemOpts } from '../data/Data';

// Tech Item

const TechItem = (opts: TechItemOpts) => {
	return (
		<ListItem>
			<ListItemText
				primary={
					<>
						{opts.emoji} <strong>{opts.bolded}</strong> {opts.nonBolded}
					</>
				}
			/>
		</ListItem>
	);
};

export default TechItem;
