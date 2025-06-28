import { Card, Col, Row } from 'react-bootstrap';
import SectionWrapper from '../components/Section';
import TopicsAccordion from '../components/Topics';
import TechList from '../components/TechList';
import * as DATA from '../data/Data';
import { Link } from 'react-router-dom';

const CP264DocsMain = () => {
	return (
		<main>
			<div className="section">
				<h1>📘 CP264 - Data Structures</h1>
				<h2>Wilfrid Laurier University — Winter 2025</h2>
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
				<pre>
					<code>
						{`mohammadelhsn.github.io/CP264/
├── assignments/  # Documentation for assignments
├── labs/         # Documentation for labs
├── examples/     # Documentation for examples
└── index.html    # This page`}
					</code>
				</pre>
			</SectionWrapper>
			<SectionWrapper title="🚀 Topics">
				<TopicsAccordion></TopicsAccordion>
			</SectionWrapper>

			<SectionWrapper title="🛠️ Technologies">
				<TechList></TechList>
			</SectionWrapper>
			<SectionWrapper title="📚 Explore the Docs">
				<div className="section-list">
					<div className="card">
						<h3 className="cardHeader">📝 Assignments</h3>
						<p>All assignments with Doxygen-generated documentation.</p>
						<Link to="/assignments">View Assignments →</Link>
					</div>
					<div className="card">
						<h3 className="cardHeader">🔬 Labs</h3>
						<p>Hands-on labs that apply key data structure concepts.</p>
						<a href="/labs">View Labs →</a>
					</div>
					<div className="card">
						<h3 className="cardHeader">💡 Examples</h3>
						<p>Mini examples, snippets, and helper code from class.</p>
						<a href="/examples">View Examples →</a>
					</div>
				</div>
			</SectionWrapper>
			<hr className="my-5 section-divider" />
			<Row className="g-4">
				<Col md={6}>
					<Card className="h-100 shadow-sm">
						<Card.Body>
							<Card.Title className="cardHeader">📌 Notes</Card.Title>
							<Card.Text>
								This repository is for educational use and follows academic
								policies set by <strong>Wilfrid Laurier University</strong>. If
								you're a CP264 student, please ensure your submissions maintain
								academic integrity.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6}>
					<Card className="h-100 shadow-sm">
						<Card.Body>
							<Card.Title className="cardHeader">📬 Contact</Card.Title>
							<Card.Text>
								{/* prettier-ignore */}
								<p> 
									📧 Email: 
									<a href={`mailto:${DATA.EMAIL}`}>
										{DATA.EMAIL}
									</a>
									<br />
									📂 GitHub: 
									<a
										href={`${DATA.GITHUB_HANDLE}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										{DATA.GITHUB_HANDLE}
									</a>
								</p>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<hr className="my-5 section-divider" />
		</main>
	);
};

export default CP264DocsMain;
