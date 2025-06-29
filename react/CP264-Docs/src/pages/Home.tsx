import { Col, Row } from 'react-bootstrap';
import SectionWrapper from '../components/Section';
import TopicsAccordion from '../components/Topic';
import TechList from '../components/TechList';
import * as DATA from '../data/Data';
import { Link } from 'react-router-dom';
import { Box, CardContent, Typography, useTheme, Grid } from '@mui/material';
import { Card } from '@mui/material';
import CardLinks from '../components/CardLinks';

const CP264DocsMain = () => {
	const theme = useTheme();
	return (
		<main>
			<div className="section">
				<Typography variant="h2">📘 CP264 - Data Structures</Typography>
				<Typography variant="h3">
					Wilfrid Laurier University — Winter 2025
				</Typography>
			</div>
			<SectionWrapper title="📌 Overview">
				{/* prettier-ignore */}
				<p>
					This site documents my coursework, assignments, and projects for <strong>CP264 - Data Structures</strong> at 
					<strong> Wilfrid Laurier University</strong>. The course covers core
					data structures and algorithms, including linked lists, stacks, trees,
					graphs, and more.
				</p>
			</SectionWrapper>
			<SectionWrapper title="📄 Docs Structure">
				<Box
					component="pre"
					sx={{
						bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100',
						color: theme.palette.text.primary,
						p: 2,
						borderRadius: 1,
						fontFamily: 'monospace',
						fontSize: '0.875rem',
						lineHeight: 1.5,
						overflowX: 'auto',
					}}
				>
					{`mohammadelhsn.github.io/CP264/
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
			<hr className="my-5 section-divider" />
			<Row className="g-4">
				<Col md={6}>
					<Card
						sx={{
							height: '100%',
							boxShadow: 1,
							p: 2,
						}}
					>
						{
							<CardContent>
								<Typography
									variant="h6"
									component="div"
									sx={{ fontWeight: 'bold', mb: 1 }}
								>
									📌 Notes
								</Typography>

								<Typography variant="body2" color="text.secondary">
									This repository is for educational use and follows academic
									policies set by <strong>Wilfrid Laurier University</strong>.
									If you're a CP264 student, please ensure your submissions
									maintain academic integrity.
								</Typography>
							</CardContent>
						}
					</Card>
				</Col>
				<Col md={6}>
					<Card sx={{ height: '100%', boxShadow: 1, p: 2 }}>
						<CardContent>
							<Typography
								variant="h6"
								component="div"
								sx={{ fontWeight: 'bold', mb: 1 }}
							>
								📬 Contact
							</Typography>
							<Typography variant="body2" color="text.secondary">
								📂 GitHub:{' '}
								<Link
									to={DATA.GITHUB}
									target="_blank"
									rel="noopener noreferrer"
								>
									{DATA.GITHUB_HANDLE}
								</Link>
							</Typography>
						</CardContent>
					</Card>
				</Col>
			</Row>
			<hr className="my-5 section-divider" />
		</main>
	);
};

export default CP264DocsMain;
