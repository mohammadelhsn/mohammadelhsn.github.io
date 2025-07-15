/** MUI COMPONENTS */

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

/** ICONS */

import AssignmentIcon from '@mui/icons-material/Assignment';
import TaskIcon from '@mui/icons-material/Task';
import BiotechIcon from '@mui/icons-material/Biotech';
import MenuBookIcon from '@mui/icons-material/MenuBook';

/** DATA */

import { buttonStyles, cardActionStyles, cardBodyStyles } from '../data/Styles';
import { type AssignmentItemOpts } from '../data/Data';

/** LIST ITEM */

const ListItemComp = (opts: AssignmentItemOpts) => {
	const Icon = opts.type == 'assignment' ? AssignmentIcon : opts.type == 'lab' ? BiotechIcon : opts.type == 'task' ? TaskIcon : MenuBookIcon;
	return (
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
			<Box sx={{ flexGrow: 1 }}>
				<Typography
					variant="h4"
					sx={{ display: 'flex', alignItems: 'center', mb: 1, flexWrap: 'wrap', wordBreak: 'break-word', }}
				>
					{(
						<Icon
							fontSize="inherit"
							sx={{ color: 'primary.main', mr: 1.5 }}
						/>
					)}
					{`${opts.type}` == 'assignment'
						? `Assignment ${opts.adds}`
						: opts.type == 'example'
							? `${opts.adds}`
							: opts.type == 'task'
								? `${opts.adds}`
								: `Lab ${opts.adds}`
					}
				</Typography>
				<Divider />
				<Typography variant="body1" sx={cardBodyStyles}>
					{`${opts.type}` == 'assignment'
						? `View documentation for assignment ${opts.adds}`
						: opts.type == 'example'
							? `View documentation for ${opts.adds}`
							: opts.type == 'task'
								? `View documentation for ${opts.adds}`
								: `View documentation for Lab ${opts.adds}`
					}
				</Typography>
			</Box>

			<Box sx={cardActionStyles}>
				<Button
					size="small"
					component={Link}
					href={
						opts.link
					}
					sx={buttonStyles}
				>
					View{' '}
					{opts.type === 'assignment'
						? `Assignment ${opts.adds} `
						: opts.type === 'example'
							? 'Examples '
							: opts.type == 'lab' ? 'Lab ' : 'Task '}
					→
				</Button>
			</Box>
		</Paper>
	);
};

export default ListItemComp;