import React, { useState, useEffect } from 'react';

function App() {
	const [users, setUsers] = useState(false);
	useEffect(() => {
		getUsers();
	}, []);
	function getUsers() {
		fetch('http://localhost:3001')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setUsers(data.rows);
			});
	}

	function createUser() {
		let username = prompt('Enter username');
		let password = prompt('Enter password');
		fetch('http://localhost:3001/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		})
			.then((response) => {
				return response.text();
			})
			.then((data) => {
				alert(data);
				getUsers();
			});
	}
	function deleteUser() {
		let id = prompt('Enter user id');
		fetch(`http://localhost:3001/users/${id}`, {
			method: 'DELETE',
		})
			.then((response) => {
				return response.text();
			})
			.then((data) => {
				alert(data);
				getUsers();
			});
	}
	return (
		<div>
			{users ? users.map(user => <div> {user.username} {user.password} </div>) : 'There is no user data available'}
			<br />
			<button onClick={createUser}>Add user</button>
			<br />
			<button onClick={deleteUser}>Delete user</button>
		</div>
	);
}
export default App;
