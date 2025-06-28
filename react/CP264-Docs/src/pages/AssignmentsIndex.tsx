import ItemList from '../components/ItemList';

const AssignmentIndex = () => {
	return (
		<main className="assginMain">
			<h1 className="assignHeader">📝 Assignments</h1>
			<hr className="my-3 section-divider-left" />
			<p className="assignPara">
				Here are the documented assignments with source code and auto-generated
				Doxygen documentation:
			</p>
			<ItemList itemType="assignment" />
		</main>
	);
};

export default AssignmentIndex;
