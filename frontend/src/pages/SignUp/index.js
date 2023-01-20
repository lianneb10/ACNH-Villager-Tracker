import { useState } from 'react';
import { signUp } from '../../utils/api';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp(props) {
	const navigate = useNavigate();
	const initialState = { username: '', password: '' };
	const [formState, setFormState] = useState(initialState);
	const [userError, setUserError] = useState('');

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.name]: event.target.value });
	};

	function handleSubmit(event) {
		event.preventDefault();
		signUp(formState).then((data) => {
			localStorage.token = data.token;
			localStorage.user_id = data.user._id;
			navigate('/login');
		}).catch(function (error) { 
			if (error.response) {
				if (error.response.status === 401) {
					setUserError('This username already exists! Please enter another. ')
				}}});
	}

	return (
		<div className='card-signup-form'>
			<div className='card-body'>
				<h1>Sign Up</h1>
				<p>
					Already have an account? <Link to={'/login'}> Login here!</Link>
				</p>
				<p style={{ color: 'red' }}>{userError}</p>
				<form onSubmit={handleSubmit}>
					<label htmlFor='username' className='form-label'>
						<p>Username</p>
						<input
							className='form-control'
							type='text'
							name='username'
							value={formState.username}
							onChange={handleChange}
							required
						/>
					</label>
					<label htmlFor='password' className='form-label'>
						<p>Password</p>
						<input
							className='form-control'
							type='password'
							name='password'
							value={formState.password}
							onChange={handleChange}
							required
						/>
					</label>
					<button className='btn btn-primary' type='submit'>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
}
