import { useState } from 'react';
import { loginToAccount } from '../../utils/api';
import { Link, useNavigate } from 'react-router-dom';

export default function Login(props) {
	const navigate = useNavigate();
	const [formState, setFormState] = useState({
		username: '',
		password: '',
	});

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		loginToAccount(formState).then((data) => {
			localStorage.token = data.token;
            localStorage.user_id = data.user._id;
			props.setLogInStatus(true);
			navigate('/');
			props.refresh();
		});
	};

	return (
		<div className='card login-form'>
			<div className='card-body'>
				<h1>Login</h1>
				<p>
					Don't have an account? <Link to={'/signup'}>  Sign up here!</Link>
				</p>
				<form onSubmit={handleSubmit}>
					<label htmlFor='username' className='form-label'>
						<p>Username:</p>
						<input
							className='form-control'
							type='text'
							name='username'
							onChange={handleChange}
							defaultValue={formState.username}
						/>
					</label>
					<label htmlFor='password' className='form-label'>
						<p>Password:</p>
						<input
							className='form-control'
							type='password'
							name='password'
							onChange={handleChange}
							defaultValue={formState.password}
						/>
					</label>
					<button className='btn btn-primary' type='submit'>
						Login
					</button>
				</form>
			</div>
		</div>
	);
}
