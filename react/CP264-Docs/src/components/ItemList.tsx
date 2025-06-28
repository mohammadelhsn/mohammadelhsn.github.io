import { PAGEDATA } from '../data/Data';
import ListItem from './ListItem';
import type { ItemListOpts } from '../data/Data.ts';

const baseUrl = import.meta.env.MODE === 'production' ? '/CP264/' : '/';

const ItemList = (opts: ItemListOpts) => {
	return (
		<ul className="item-list">
			{Array.from({ length: PAGEDATA[0].numberOfEntries }, (_, i) => {
				const num = i + 1;
				const padded = String(num).padStart(2, '0');
				let link;
				if (opts.itemType == 'assignment') {
					link = `${baseUrl}assignments/elha7950_a${padded}/index.html`;
				} else if (opts.itemType == 'lab') {
					link = `${baseUrl}labs/elha7950_l${padded}/index.html`;
				} else {
					link = '';
				}
				return <ListItem key={num} num={num} link={link} />;
			})}
		</ul>
	);
};

export default ItemList;
