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
		const island = await createIsland(formState, props.user._id);
		setShowForm(false);
		navigate(`/island/${island.island._id}`);
		props.refresh();
	};

	// render JSX
	return (
		<div className='main-container'>
			<h1>Animal Crossing Villager Tracker</h1>

			{props.isLoggedIn ? (
				<div>
					{ props.user.islands && props.user.islands.length === 0 ? (
					<h3>
						Thank you for logging in, please add an island or edit an existing
						island below by clicking into it.
					</h3>): null}
					
						<br />
					<button className="btn" type="button"
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
							<button className="btn" type='submit' onClick={handleSubmit}>
								Add {formState.name} Island
							</button>
						</div>
					) : null}


					<div className='islandsHolder'>
						{props.user.islands
							? props.user.islands.map((island) => (
								<>
								<Link to={`/island/${island._id}`}>
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
				<h3>Please sign up or log in to access the website features.</h3>
			)}
		</div>
	);
}
