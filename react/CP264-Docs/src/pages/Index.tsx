import * as DATA from '../data/Data';
import { ListGroup, Accordion, Card, Col, Row } from 'react-bootstrap';
import '../styles/Home.css';

const CP264DocsMain = () => {
	return (
		<main>
			<div className="section">
				<h1>📘 CP264 - Data Structures</h1>
				<h2>Wilfrid Laurier University — Winter 2025</h2>
			</div>
			<div className="section">
				<h3>📌 Overview</h3>
				<hr className="my-3 section-divider-left" />
				{/* prettier-ignore */}
				<p>
					This site documents my coursework, assignments, and projects for <strong>CP264 - Data Structures</strong> at 
					<strong> Wilfrid Laurier University</strong>. The course covers core
					data structures and algorithms, including linked lists, stacks, trees,
					graphs, and more.
				</p>
			</div>

			<div className="section">
				<h3>📄 Docs Structure</h3>
				<hr className="my-3 section-divider-left" />
				{/* prettier-ignore */}
				<pre><code>{`mohammadelhsn.github.io/cp264/
├── assignments/  # Documentation for assignments
├── labs/         # Documentation for labs
├── examples/     # Documentation for examples
└── index.html    # This page`}
</code>
				</pre>
			</div>
			<div className="section">
				<h3>🚀 Topics</h3>
				<hr className="my-3 section-divider-left" />
				<Accordion>
					<Accordion.Item eventKey="0">
						<Accordion.Header><strong>📚 Core Data Structures</strong></Accordion.Header>
						<Accordion.Body>
							<ul>
								<li>Arrays and Linked Lists</li>
								<li>Stacks and Queues</li>
								<li>Recursion</li>
							</ul>
						</Accordion.Body>
					</Accordion.Item>

					<Accordion.Item eventKey="1">
						<Accordion.Header><strong>🌲 Trees & Graphs</strong></Accordion.Header>
						<Accordion.Body>
							<ul>
								<li>Trees and Binary Search Trees (BST)</li>
								<li>Graphs and Graph Algorithms</li>
							</ul>
						</Accordion.Body>
					</Accordion.Item>

					<Accordion.Item eventKey="2">
						<Accordion.Header><strong>⚙️ Algorithms & Hashing</strong></Accordion.Header>
						<Accordion.Body>
							<ul>
								<li>Hash Tables</li>
								<li>Sorting and Searching Algorithms</li>
							</ul>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
			<div className="section">
				<h3>🛠️ Technologies</h3>
				<hr className="my-3 section-divider-left"></hr>
				<ListGroup variant="flush" className="rounded-list">
					<ListGroup.Item>
						💻 <strong>Programming Language:</strong> C
					</ListGroup.Item>
					<ListGroup.Item>
						🧰 <strong>Development Environment:</strong> VS Code (preferred),
						Eclipse
					</ListGroup.Item>
					<ListGroup.Item>
						🔗 <strong>Version Control:</strong> Git & GitHub
					</ListGroup.Item>
				</ListGroup>
			</div>

			<div className="section">
				<h3>📚 Explore the Docs</h3>
				<hr className="my-3 section-divider-left" />
				<div className="section-list">
					<div className="card">
						<h3 className="cardHeader">📝 Assignments</h3>
						<p>All assignments with Doxygen-generated documentation.</p>
						<a href="assignments/">View Assignments →</a>
					</div>
					<div className="card">
						<h3 className="cardHeader">🔬 Labs</h3>
						<p>Hands-on labs that apply key data structure concepts.</p>
						<a href="labs/">View Labs →</a>
					</div>
					<div className="card">
						<h3 className="cardHeader">💡 Examples</h3>
						<p>Mini examples, snippets, and helper code from class.</p>
						<a href="examples/">View Examples →</a>
					</div>
				</div>
			</div>
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
									<a href="mailto:mohammadelhsn@gmail.com">
										mohammadelhsn@gmail.com
									</a>
									<br />
									📂 GitHub: 
									<a
										href="https://github.com/mohammadelhsn"
										target="_blank"
										rel="noopener noreferrer"
									>
										@mohammadelhsn
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
