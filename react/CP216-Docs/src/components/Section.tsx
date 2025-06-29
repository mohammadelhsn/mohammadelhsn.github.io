import { Typography, Divider, Box } from '@mui/material';
import type { SectionOpts } from '../data/Data';

const SectionWrapper = (opts: SectionOpts) => {
	return (
		<Box sx={{ marginBottom: '40px' }}>
			<Typography variant="h4" color="secondary">
				{opts.title}
			</Typography>
			<Divider
				sx={{
					borderTop: `4px solid #cc8f7f`,
					margin: '2rem 0',
					marginLeft: 0,
				}}
			/>
			{opts.children}
		</Box>
	);
};

export default SectionWrapper;
