import { useState, useEffect } from 'react';
import { updateUser } from '../../utils/api';
import { deleteUser } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

export default function User(props) {
	const navigate = useNavigate();
	// function to reveal edit form
	const [showForm, setShowForm] = useState(false);
	const [deletePopUp, setDeletePopUp] = useState(false);
	// edit form and changed states
	const [formState, setFormState] = useState({ username: '', password: '' });
	useEffect(() => {
		setFormState(props.user);
	}, [showForm, props.user]);

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		updateUser(props.user._id, formState);
		setShowForm(false);
		navigate('/user-info');
	};
	// delete user function
	const destroyUser = () => {
		deleteUser(props.user._id);
		localStorage.clear();
		props.setLogInStatus(false);
		navigate('/');
	};

	return (
		<div className='display-body'>
			<h3>Username: {formState.username}</h3>
            <h3>Password: {formState.password}</h3>
			<div className='delete'>
				{!deletePopUp ? (
					<button
						id='edit-btn'
						className='btn btn-danger '
						onClick={setDeletePopUp}>
						Delete User
					</button>
				) : null}
				{deletePopUp ? (
					<div className='delete-popup'>
						<p>Are you sure you wish to delete user?</p>
						<button
							id='edit-btn'
							className='btn btn-danger '
							onClick={destroyUser}>
							Yes
						</button>
						<button
							id='edit-btn'
							className='btn btn-danger '
							onClick={() => {
								setDeletePopUp(false);
							}}>
							No
						</button>
					</div>
				) : null}
			</div>
			<div className='edit'>
				<div className='form-btn'>
					<button
						id='edit-btn'
						className='btn btn-primary '
						onClick={() => {
							setShowForm(!showForm);
						}}>
						Edit User
					</button>
				</div>
				{showForm ? (
					<div className='edit-form' style={{ width: '20rem' }}>
						<form onSubmit={handleSubmit}>
							<label className='form-label' htmlFor='username'>
								Username:
							</label>
							<input
								className='form-control'
								id='username'
								type='text'
								onChange={handleChange}
								value={formState.username}
							/>

							<label className='form-label' htmlFor='password'>
								Password:
							</label>
							<input
								className='form-control'
								id='password'
								type='text'
								onChange={handleChange}
								value={formState.password}
							/>
							<button className='btn btn-primary' type='submit'>
								Save Changes
							</button>
						</form>
					</div>
				) : null}
			</div>
		</div>
	);
}
