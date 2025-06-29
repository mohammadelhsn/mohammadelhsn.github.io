import { ListItem, ListItemText } from '@mui/material';
import type { TechItemOpts } from '../data/Data';

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
