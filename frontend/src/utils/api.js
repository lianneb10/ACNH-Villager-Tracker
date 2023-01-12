import axios from 'axios';
let baseURL = {baseURL: window.location.origin.replace(/:[0-9]+$/,"") + ":8000"};

// sign up function
export async function signUp(formData) {
	const { data } = await axios.post('user/signup', formData, baseURL);
	return data;
}

//Log in to User Account
export async function loginToAccount(formData) {
	const { data } = await axios.post('user/login', formData, baseURL);
	return data;
}


// update user account
export async function updateUser(userId, formData) {
	const config = {
		headers: {
			Authorization: localStorage.getItem('token'),
		}, ...baseURL
	};
	const { data } = await axios.put(`user/${userId}`, formData, config);
	return data;
}

// delete user account
export async function deleteUser(userId) {
	const config = {
		headers: {
			Authorization: localStorage.getItem('token'),
		}, ...baseURL
	};
	await axios.delete(`user/${userId}`, config);
}

//getUser
export async function getUser(userid) {
	const { data } = await axios.get(`user/${userid}`, baseURL);
	return data;
}
