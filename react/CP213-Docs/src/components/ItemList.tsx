// MUI Components

import { List } from '@mui/material';

// Custom Components

import ListItem from './ListItem';

// Data

import {
	PAGEDATA,
	EXAMPLEDATA,
	type ItemListOpts
} from '../data/Data';

const baseUrl = import.meta.env.MODE === 'production' ? '/CP213/' : '/';

const ItemList = (opts: ItemListOpts) => {
	let length;
	if (opts.itemType == 'assignment') {
		length = PAGEDATA[0].numberOfEntries;
	} else if (opts.itemType == 'example') {
		length = PAGEDATA[2].numberOfEntries;
	} else {
		length = PAGEDATA[1].numberOfEntries;
	}
	return (
		<List sx={{ listStyle: 'none', padding: '0', bgcolor: 'background.paper' }}>
			{Array.from({ length: length }, (_, i) => {
				const num = i + 1;
				const padded = String(num).padStart(2, '0');
				let link;
				let adds = `${num}`;
				if (opts.itemType == 'assignment') {
					link = `${baseUrl}assignments/elha7950_a${padded}/index.html`;
				} else if (opts.itemType == 'lab') {
					link = `${baseUrl}labs/elha7950_l${padded}/index.html`;
				} else {
					link = `${baseUrl}examples/${EXAMPLEDATA[i].url}/index.html`;
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

