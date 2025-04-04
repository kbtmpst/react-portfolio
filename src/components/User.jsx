function User({ name, username, id }) {
	return (
		<div key={id} style={{ border: "1px solid black", margin: "8px", padding: "3px" }}>
			<div>Name: {name}</div>
			<div>Username: {username}</div>
			<div>ID: {id}</div>
		</div>
	);
}

export default User;
