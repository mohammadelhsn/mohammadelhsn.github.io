// React

import { Link } from 'react-router-dom';

// MUI Components

import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';

// Custom Components

import SectionWrapper from '../components/Section';
import TopicsAccordion from '../components/Topic';
import TechList from '../components/TechList';
import CardLinks from '../components/CardLinks';

// Data 

import { COURSENAME, TERM, COURSECODE, TopicsData, GITHUB, GITHUB_HANDLE, EMAIL } from '../data/Data';

// Styles

import { dividerStyle } from '../data/Styles';

const CP264DocsMain = () => {
	const theme = useTheme();
	return (
		<Box sx={{ flexGrow: '1', padding: '3rem 2rem', margin: '0 auto', maxWidth: '1200px' }}>
			<div className="section">
				<Typography variant="h2">{COURSENAME}</Typography>
				<Typography variant="h3">
					Wilfrid Laurier University — {TERM}
				</Typography>
			</div>
			<SectionWrapper title="📌 Overview">
				{/* prettier-ignore */}
				<p>
					This repository contains my coursework, assignments, and projects for<strong>{COURSENAME}</strong> at <strong>Wilfrid Laurier University</strong>. The course explores core object-oriented programming concepts in Java, such as classes, inheritance, polymorphism, encapsulation, and abstraction, as well as the use of data structures and algorithms in an object-oriented context.
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
					{`mohammadelhsn.github.io/${COURSECODE}/
├── #/assignments/                    → All assignments list
├── #/assignments/elha7950_a01        → Assignment A01 summary page
├── #/assignments/elha7950_a01/t01    → Task 1 inside assignment A01
├── #/labs/                           → All labs list
├── #/labs/elha7950_l02               → Lab 2 summary page
└── #/labs/elha7950_l02/t03           → Task 3 inside lab 2`}
				</Box>
			</SectionWrapper>
			<SectionWrapper title="🚀 Topics">
				{TopicsData.map(({ title, eventKey, items }) => {
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
				<TechList />
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
				</Grid>
			</SectionWrapper>
			<Divider sx={dividerStyle} />
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
								you're a {COURSECODE} student, please ensure your
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
									to={GITHUB}
									target="_blank"
									rel="noopener noreferrer"
								>
									{GITHUB_HANDLE}
								</Link>
							</Typography>
							<Typography variant="body1" color="text.secondary">
								📧 Email:{' '}
								<Link
									to={`mailto:${EMAIL}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									{EMAIL}
								</Link>
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
			<Divider sx={dividerStyle} />
		</Box>
	);
};

export default CP264DocsMain;
