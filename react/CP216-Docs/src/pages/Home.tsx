import SectionWrapper from '../components/Section';
import TopicsAccordion from '../components/Topic';
import TechList from '../components/TechList';
import * as DATA from '../data/Data';
import { Link } from 'react-router-dom';
import {
	Box,
	CardContent,
	Typography,
	useTheme,
	Grid,
	Divider,
	Card,
} from '@mui/material';
import CardLinks from '../components/CardLinks';

const CP264DocsMain = () => {
	const theme = useTheme();
	return (
		<main>
			<div className="section">
				<Typography variant="h2">{DATA.COURSENAME}</Typography>
				<Typography variant="h3">
					Wilfrid Laurier University — {DATA.TERM}
				</Typography>
			</div>
			<SectionWrapper title="📌 Overview">
				{/* prettier-ignore */}
				<p>
					Coursework and projects on ARMv7 microprocessors and embedded systems, focusing on assembly programming, CPU architecture, memory, and I/O interfacing.
				</p>
			</SectionWrapper>
			<SectionWrapper title="📄 Docs Structure">
				<Box
					component="pre"
					sx={{
						bgcolor: theme.palette.background.paper,
						color: theme.palette.text.primary,
						p: 2,
						borderRadius: 1,
						fontFamily: 'monospace',
						fontSize: '0.875rem',
						lineHeight: 1.5,
						overflowX: 'auto',
					}}
				>
					{`mohammadelhsn.github.io/${DATA.COURSECODE}/
├── assignments/  # Documentation for assignments
├── labs/         # Documentation for labs
├── examples/     # Documentation for examples
└── index.html    # This page`}
				</Box>
			</SectionWrapper>
			<SectionWrapper title="🚀 Topics">
				{DATA.TopicsData.map(({ title, eventKey, items }) => {
					return (
						<TopicsAccordion
							eventKey={eventKey}
							items={items}
							title={title}
						></TopicsAccordion>
					);
				})}
			</SectionWrapper>

			<SectionWrapper title="🛠️ Technologies">
				<TechList></TechList>
			</SectionWrapper>
			<SectionWrapper title="📚 Explore the Docs">
				<Grid container spacing={3}>
					<CardLinks
						title="📝 Assignments"
						desc="All assignments with Doxygen-generated documentation."
						itemType="assignment"
					/>
					<CardLinks
						title="🔬 Labs"
						desc="Hands-on labs that apply key data structure concepts."
						itemType="lab"
					/>
					<CardLinks
						title="💡 Examples"
						desc="Mini examples, snippets, and helper code from class."
						itemType="example"
					/>
				</Grid>
			</SectionWrapper>
			<Divider
				sx={{ borderTop: `4px solid #cc8f7f`, margin: '2rem 0', marginLeft: 0 }}
			/>
			<Grid container spacing={4}>
				{/* Left column */}
				<Grid size={{ md: 6, xs: 12 }}>
					<Card
						raised
						sx={{
							height: '100%',
							p: 2,
							bgColor: theme.palette.background.paper,
						}}
					>
						<CardContent>
							<Typography
								variant="h6"
								component="div"
								sx={{ fontWeight: 'bold', mb: 1 }}
							>
								📌 Notes
							</Typography>
							<Typography variant="body1" color="text.secondary">
								This repository is for educational use and follows academic
								policies set by <strong>Wilfrid Laurier University</strong>. If
								you're a {DATA.COURSECODE} student, please ensure your
								submissions maintain academic integrity.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid size={{ md: 6, xs: 12 }}>
					<Card
						raised={true}
						sx={{
							height: '100%',
							p: 2,
							backgroundColor: theme.palette.background.paper,
						}}
					>
						<CardContent>
							<Typography
								variant="h6"
								component="div"
								sx={{ fontWeight: 'bold', mb: 1 }}
							>
								📬 Contact
							</Typography>
							<Typography variant="body1" color="text.secondary">
								📂 GitHub:{' '}
								<Link
									to={DATA.GITHUB}
									target="_blank"
									rel="noopener noreferrer"
								>
									{DATA.GITHUB_HANDLE}
								</Link>
							</Typography>
							<Typography variant="body1" color="text.secondary">
								📧 Email:{' '}
								<Link
									to={`mailto:${DATA.EMAIL}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									{DATA.EMAIL}
								</Link>
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
			<Divider
				sx={{ borderTop: `4px solid #cc8f7f`, margin: '2rem 0', marginLeft: 0 }}
			/>
		</main>
	);
};

export default CP264DocsMain;
