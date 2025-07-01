// MUI Components

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

// Data

import { type AssignmentItemOpts } from '../data/Data';

const ListItemComp = (opts: AssignmentItemOpts) => {
	return (
		<ListItem
			disablePadding
			className="list-item"
			color="background.paper"
			sx={{
				backgroundColor: (theme) => theme.palette.background.paper,
				borderLeft: (theme) => `4px solid ${theme.palette.secondary.main}`,
				padding: '15px 20px',
				marginBottom: '10px',
				borderRadius: '6px',
				boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
				transition:
					'transform 0.2s ease, background-color 0.3s, box-shadow 0.3s',
				outlineOffset: '1px',
				'&:hover': {
					transform: 'scale(1.02)',
				}
			}}
		>
			<Link
				href={opts.link}
				target="_blank"
				rel="noopener noreferrer"
				underline="hover"
				sx={{ width: '100%', padding: '0.5rem 1rem', display: 'block' }}
			>
				<ListItemText
					primary={`${opts.type}` == 'assignment'
						? `Assignment ${opts.adds}`
						: opts.type == 'example'
							? `${opts.adds}`
							: opts.type == 'task'
								? `${opts.adds}`
								: `Lab ${opts.adds}`
					}
				/>
			</Link>
		</ListItem >
	);
};

export default ListItemComp;