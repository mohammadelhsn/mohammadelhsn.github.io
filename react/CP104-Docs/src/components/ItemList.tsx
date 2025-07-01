// MUI Components

import { List } from '@mui/material';

// Custom Components

import ListItem from './ListItem';

// Data

import {
	PAGEDATA,
	EXAMPLEDATA,
	AssignmentData,
	type TaskData,
	LabData,
	type ItemListOpts
} from '../data/Data';

const baseUrl = import.meta.env.MODE === 'production' ? '/CP104/#/' : '/#/';

const ItemList = (opts: ItemListOpts) => {
	let length;
	let tasksArr: TaskData[];
	if (opts.itemType == 'assignment') {
		length = PAGEDATA[0].numberOfEntries;
	} else if (opts.itemType == 'example') {
		length = PAGEDATA[2].numberOfEntries;
	} else if (opts.itemType == 'task') {
		const arr = opts.taskStr?.includes('elha7950_l') ? LabData : AssignmentData;
		const data = arr.find((el) => el.id == opts.taskStr);
		if (data) {
			tasksArr = data.tasks;
		}
		if (opts.count) {
			length = opts.count;
		} else {
			length = 5;
		}
	} else {
		length = PAGEDATA[1].numberOfEntries;
	}
	return (
		<List sx={{ listStyle: 'none', padding: '0' }}>
			{Array.from({ length: length }, (_, i) => {
				const num = i + 1;
				const padded = String(num).padStart(2, '0');
				let link;
				let adds = `${num}`;
				if (opts.itemType == 'assignment') {
					link = `${baseUrl}assignments/elha7950_a${padded}/`;
				} else if (opts.itemType == 'lab') {
					link = `${baseUrl}labs/elha7950_l${padded}/`;
				} else if (opts.itemType == 'task') {
					const type = opts.taskStr?.includes('elha7950_l')
						? 'labs'
						: 'assignments';
					link = `${baseUrl}${type}/${opts.taskStr}/${tasksArr[i]?.id}`;
					adds = tasksArr[i].name;
				} else {
					link = `${baseUrl}examples/${EXAMPLEDATA[i].url}/`;
					adds = EXAMPLEDATA[i].title;
				}
				return (
					<ListItem key={num} adds={`${adds}`} link={link} type={opts.itemType} />
				);
			})}
		</List>
	);
};

export default ItemList;