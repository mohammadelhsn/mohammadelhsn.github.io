// MUI Components

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

// Custom Components
import TechItem from './TechItem';

// Data

import { TechData } from '../data/Data';

// To be moved 

const style = {
	py: 0,
	width: '100%',
	borderRadius: 2,
	border: '1px solid',
	borderColor: 'divider',
	backgroundColor: 'background.paper',
};

// Tech List

const TechList = () => {
	return (
		<List sx={style}>
			{TechData.map(({ emoji, bolded, nonBolded }, idx) => {
				return (
					<>
						<TechItem
							key={`${idx}-${bolded.split(' ')[0]}-${nonBolded.split(' ')[0]}`}
							emoji={emoji}
							bolded={bolded}
							nonBolded={nonBolded}
						></TechItem>
						<Divider />
					</>
				);
			})}
		</List>
	);
};

export default TechList;
