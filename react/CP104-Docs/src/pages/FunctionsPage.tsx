// MUI Components

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

// Data

import { type FunctionPageProps } from '../data/Data';

const FunctionsPage = (opts: FunctionPageProps) => {
	const { functions = [], constants = [] } = opts;
	return (
		<Box maxWidth="md" mx="auto" mt={4} px={2} pb={8}>
			{constants.length > 0 && (
				<Accordion defaultExpanded>
					<AccordionSummary>
						<Typography variant="h6">Constants</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Stack spacing={2}>
							{constants.map((c, index) => (
								<Card key={index} variant="outlined">
									<CardContent>
										<Box
											display="flex"
											alignItems="center"
											justifyContent="space-between"
											mb={1}
										>
											<Typography variant="h6">{c.name}</Typography>
											<Chip
												label={c.value}
												color="primary"
												variant="outlined"
												size="small"
											/>
										</Box>
										{c.description && (
											<Typography variant="body2" color="text.secondary">
												{c.description}
											</Typography>
										)}
									</CardContent>
								</Card>
							))}
						</Stack>
					</AccordionDetails>
				</Accordion>
			)}
			{functions.length > 0 && (
				<Accordion defaultExpanded sx={{ mt: 3 }}>
					<AccordionSummary>
						<Typography variant="h6">Functions</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Stack spacing={3}>
							{functions.map((fn, index) => (
								<Card key={index} variant="outlined">
									<CardContent>
										<Typography variant="h6" gutterBottom>
											{fn.functionName}
										</Typography>
										<Typography
											variant="body2"
											sx={{
												fontFamily: 'monospace',
												backgroundColor: 'background.default',
												p: 1,
												borderRadius: 1,
												mb: 1,
												userSelect: 'all',
											}}
										>
											{fn.signature}
										</Typography>
										<Typography variant="body1" color="text.secondary">
											{fn.description}
										</Typography>
									</CardContent>
								</Card>
							))}
						</Stack>
					</AccordionDetails>
				</Accordion>
			)}
			{functions.length === 0 && constants.length === 0 && (
				<Typography mt={4} textAlign="center" color="text.secondary">
					No functions or constants to display.
				</Typography>
			)}
		</Box>
	);
};

export default FunctionsPage;
