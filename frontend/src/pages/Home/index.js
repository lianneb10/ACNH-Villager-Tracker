// packages
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createIsland, deleteIsland } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { Icons } from '../../components/Icon';

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
		console.log(island)
		setShowForm(false);
		navigate(`/island/${island.island._id}`);
		props.refresh();
	};

	// render JSX
	return (
		<div className='main-container'>
			<h1>Home Page</h1>
			{props.isLoggedIn ? (
				<div>
					<h3>
						Thank you for logging in, please add an island or edit an existing
						island below by clicking into it.
					</h3>
					<div className='createIsland'>
						{props.user.islands
							? props.user.islands.map((island) => (
									<div className='island-hold'>
										<button id='delete' onClick={async (event) => {
		// eslint-disable-next-line no-restricted-globals
		if (confirm ("Are you sure you want to delete this island?")) {event.preventDefault();
		await deleteIsland(island._id);
		props.refresh();}
	}}> X

										</button>
										<Link to={`/island/${island._id}`}>
											<h2 key={island._id}> {island.name} </h2>
										</Link>

										{island.villagers.map((villager) => (
											<p key={villager._id}> {villager.name} <Icons name={villager.name}/> </p>
										))}
									</div>
							  ))
							: null}



						<button
							id='create-island'
							onClick={() => {
								setShowForm(!showForm);
							}}>
							Create Island
						</button>
					</div>
					{showForm ? (
						<div className='create-form'>
							<form>
								<label htmlFor='name'>Island Name:</label>
								<input
									id='name'
									type='text'
									onChange={handleChange}
									value={formState.name}
								/>
							</form>
							<button type='submit' onClick={handleSubmit}>
								Add Island
							</button>
						</div>
					) : null}
				</div>
			) : (
				<h3>Please sign up or log in to access the website features.</h3>
			)}
		</div>
	);
}
