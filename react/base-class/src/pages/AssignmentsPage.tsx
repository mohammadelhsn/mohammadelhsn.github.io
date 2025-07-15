/** REACT */

import { useNavigate } from 'react-router-dom';

/** MUI COMPONENTS */

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

/** CUSTOM COMPONENTS */

import SectionWrapper from '../components/Section';
import ItemList from '../components/ItemList';

/** ICONS */

import AssignmentIcon from '@mui/icons-material/Assignment';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BiotechIcon from '@mui/icons-material/Biotech';
import IconButton from '@mui/material/IconButton';
import ListIcon from '@mui/icons-material/List';

/** DATA */

import type { LabsAssignmentsOpts } from '../data/Data';
import { enableFile } from '../data/Functions';
import { textStyle } from '../data/Styles';

// Create a page for the lab/assignment showing all the labs/assignments

const LabsAssignmentsPage = (opts: LabsAssignmentsOpts) => {
	const Icon = opts.type == 'assignment' ? AssignmentIcon : opts.type == 'example' ? LightbulbIcon : BiotechIcon;
	const isFile = enableFile(opts.type);
	const navigate = useNavigate();
	return (
		<Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 }, py: { xs: 4, sm: 6 } }}>
			<Box sx={{ mb: 2 }}>
				<IconButton onClick={() => navigate(-1)} aria-label="Go back">
					<ArrowBackIcon />
				</IconButton>
			</Box>
			<Box>
				<Typography variant="h2" sx={textStyle}>
					<Icon fontSize='inherit' sx={{
						color: 'primary.main',
						mr: 1.5,
					}} /> {opts.type === 'assignment' ? 'Assignments' : opts.type == 'lab' ? 'Labs' : 'Examples'}
				</Typography>
				<Typography variant="h5" sx={{ fontStyle: 'italic' }}>
					Here are the documented {opts.type}s.
				</Typography>
				<Divider sx={{ my: 4 }} />
			</Box>
			<SectionWrapper title="Documentation" icon={ListIcon}>
				<ItemList itemType={opts.type} isFile={isFile}></ItemList>
			</SectionWrapper>
		</Container >
	);
};

export default LabsAssignmentsPage;