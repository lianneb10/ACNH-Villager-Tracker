// packages
import { Link, useNavigate } from 'react-router-dom';
import { useState} from 'react';
import { createIsland } from '../../utils/api';
import { Icons } from '../../components/Icon';
import './home.css'

export default function Home(props) {
	const navigate = useNavigate();
	const [showForm, setShowForm] = useState(false);
	const [formState, setFormState] = useState({ name: '', villagers: [] });

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		await createIsland(formState, props.user._id);
		setShowForm(false);
		setFormState({name: '', villagers: [] });
		navigate('/');
		props.refresh();
	};

	// render JSX
	return (
		<div className='main-container'>
			<h1>Animal Crossing Villager Tracker</h1>

			{props.isLoggedIn ? (
				<div>
					{props.user.islands && props.user.islands.length === 0 ? (
						<>
							<img
								src='tom.png'
								className='tomNook'
								alt='confused tom nook'></img>
							<h3>Thank you for logging in, please create an island!</h3>
						</>
					) : (
						<h3>
							Click into an island below to edit its' name & add/delete
							villagers!{' '}
						</h3>
					)}

					<br />
					<button
						className='btn'
						type='button'
						id='create-island'
						onClick={() => {
							setShowForm(!showForm);
						}}>
						Create Island
					</button>
					<br />
					<br />
					{showForm ? (
						<div className='create-form'>
							<form>
								<label htmlFor='name'>Island Name: </label>
								<br />
								<input
									id='name'
									type='text'
									onChange={handleChange}
									value={formState.name}
								/>
							</form>
							<br />
							<button className='btn' type='submit' onClick={handleSubmit}>
								Add {formState.name} Island
							</button>
						</div>
					) : null}

					<div className='islandsHolder'>
						{props.user.islands
							? props.user.islands.map((island) => (
									<>
										<Link key='island link' to={`/island/${island._id}`}>
											<div className='island-hold' key={island._id}>
												<h2> {island.name} Island </h2>

												<div className='villager-hold'>
													{island.villagers.map((villager) => (
														<div className='home-villager'>
															<p key={villager._id}>
																<Icons name={villager.name} />
															</p>
														</div>
													))}
												</div>
											</div>
										</Link>
									</>
							  ))
							: null}
					</div>
				</div>
			) : (
				<div className='card-body'>
					<h3>Welcome to ACNH Villager Tracker! </h3>
					<p>
						ACNH enthusiast? New to the game? Use this site to see details about
						villagers and even add them to your island! Please{' '}
						<Link to='/signup'>sign up</Link> or <Link to='/login'>log in</Link> to access the website
						features.
					</p>
				</div>
			)}
		</div>
	);
}
