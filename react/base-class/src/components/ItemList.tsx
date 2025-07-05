// MUI Components

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// Custom Components

import ListItem from './ListItem';

// Icon 
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
// Data

import {
	PAGEDATA,
	EXAMPLEDATA,
	AssignmentData,
	type TaskData,
	LabData,
	type ItemListOpts,
} from '../data/Data';

import Settings from '../data/Settings';

const ItemList = (opts: ItemListOpts) => {
	const baseUrl = import.meta.env.MODE === 'production' ? `/${Settings.courseCode}/${opts.isFile ? '' : '#/'}` : `/${opts.isFile ? '' : '#/'}`;
	let length;
	let tasksArr: TaskData[] = [];
	if (opts.itemType == 'assignment') {
		length = PAGEDATA[0].numberOfEntries;
	} else if (opts.itemType == 'example') {
		length = PAGEDATA[2].numberOfEntries;
	} else if (opts.itemType == 'task') {
		const arr = opts.taskStr?.includes('elha7950_l') ? LabData : AssignmentData;
		const data = arr.find((el) => el.id == opts.taskStr);
		if (data) {
			if (data.tasks.length == 0) {
				return (<Container maxWidth="md" sx={{ mt: 8, textAlign: 'center', flexGrow: '1' }}>
					<SentimentVeryDissatisfiedIcon sx={{ fontSize: 60, color: 'error.main', mb: 2 }} />

					<Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
						Oops!
					</Typography>

					<Typography variant="h6" gutterBottom color="text.secondary">
						Documentation hasn't been developed for this assignment yet!
					</Typography>

				</Container>);
			}

			tasksArr = data.tasks;
			const exists = tasksArr.find((el) => el.id == 'functions');
			if (data.functions && data.functions.length > 0 && !exists) {
				tasksArr.push({
					id: 'functions',
					name: 'Functions & Constants',
					description: '',
					objectives: [],
					sampleOutput: '',
					skills: [],
				});
			}
		}
		if (opts.count) {
			if (tasksArr.length > 0) {
				length = tasksArr.length;
			} else {
				length = opts.count;
			}
		} else {
			length = 5;
		}
	} else {
		length = PAGEDATA[1].numberOfEntries;
	}
	return (
		<Grid container spacing={3} sx={{ mt: 2 }}>
			{Array.from({ length: length }, (_, i) => {
				const num = i + 1;
				const padded = String(num).padStart(2, '0');
				let link;
				let adds = `${num}`;
				if (opts.itemType == 'assignment') {
					link = `${baseUrl}assignments/elha7950_a${padded}/${opts.isFile ? 'index.html' : ''}`;
				} else if (opts.itemType == 'lab') {
					link = `${baseUrl}labs/elha7950_l${padded}/${opts.isFile ? 'index.html' : ''}`;
				} else if (opts.itemType == 'task') {
					const type = opts.taskStr?.includes('elha7950_l') ? 'labs' : 'assignments';
					link = `${baseUrl}${type}/${opts.taskStr}/${tasksArr[i]?.id}/${opts.isFile ? 'index.html' : ''}`;
					adds = tasksArr[i].name;
				} else {
					link = `${baseUrl}examples${EXAMPLEDATA[i].url}${opts.isFile ? 'index.html' : ''}`;
					adds = EXAMPLEDATA[i].title;
				}

				return (
					<Grid size={{ xs: 12, sm: 6, md: 4 }} key={num}>
						<ListItem key={num} adds={`${adds}`} link={link} type={opts.itemType} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default ItemList;