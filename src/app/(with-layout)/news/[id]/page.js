const DynamicNewsPage = ({ params }) => {
	return (
		<div>
			This is a dynamic page of id: {params.id}
		</div>
	);
};

export default DynamicNewsPage;