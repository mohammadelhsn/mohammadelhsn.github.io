// MUI Components

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';

// Custom Components
import TechItem from './TechItem';

// Data

import { TechData } from '../data/Data';

// Icons

import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';

// Tech List

const TechList = () => {
	TechData[0].icon = CodeIcon;
	TechData[1].icon = TerminalIcon;
	TechData[2].icon = GitHubIcon;
	return (
		<List component={Paper} elevation={3}>
			{TechData.map(({ emoji, bolded, nonBolded, icon }, idx) => {
				return (
					<>
						<TechItem
							key={`${idx}-${bolded.split(' ')[0]}-${nonBolded.split(' ')[0]}`}
							emoji={emoji}
							bolded={bolded}
							nonBolded={nonBolded}
							icon={icon}
						></TechItem>
						<Divider />
					</>
				);
			})}
		</List>
	);
};

export default TechList;
