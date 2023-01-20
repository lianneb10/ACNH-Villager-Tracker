// packages
import { useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createVillager, deleteVillager, deleteIsland, updateIsland } from '../../utils/api';
import { Photos } from '../../components/Photo';
import { Info } from '../../components/Info';
import { options } from './options';
import './island.css'

export default function IslandShow(props) {
	const navigate = useNavigate();
    let {id} = useParams();
	const [showForm, setShowForm] = useState(false);
	const [formState, setFormState] = useState({ name: '' , type: '' });
    

	const handleChange = (event) => {
		setFormState({
			...formState,
			name: event.target.value,
			type: document
				.querySelector(`[value=${event.target.value}]`)
				.closest('optgroup').label,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		await createVillager(formState, id);
		setShowForm(false);
		navigate(`/island/${id}`);
        props.refresh();
	};

    const currentIsland = props.user.islands ? props.user.islands.find(
			(island) => island._id === id
		): null;


	// render JSX
	return (
		<div className='main-container'>
            
			{props.isLoggedIn && currentIsland ? (
				<>
					<h1> {currentIsland.name} Island</h1>
				<div className='island-button-holder'>

					<p>
						<button
							className='btn btn-danger'
							type='button'
							id='delete'
							onClick={async (event) => {
								if (
									// eslint-disable-next-line no-restricted-globals
									confirm('Are you sure you want to delete this island?')
								) {
									event.preventDefault();
									await deleteIsland(currentIsland._id);
									navigate('/');
									props.refresh();
								}
							}}>
							{' '}
							Delete Island: {currentIsland.name}
						</button>
					</p>

					<p>
						<button
							className='btn'
							type='button'
							id='edit'
							onClick={async (event) => {
								// eslint-disable-next-line no-restricted-globals
								const newName = prompt('Edit island name:');
								if (newName) {
									event.preventDefault();
									await updateIsland({ name: newName }, currentIsland._id);
									props.refresh();
								}
							}}>
							Edit Island Name
						</button>
					</p>
				</div>


					<div>
						<button
							className='btn'
							type='button'
							id='create-villager'
							onClick={() => {
								setShowForm(!showForm);
							}}>
							Add Villager
						</button>
						{showForm ? (
							<div className='create-form'>
								<form>
									<label htmlFor='villager-select'>
										Choose which villager to add:
									</label>
									<select
										id='villagers'
										onChange={handleChange}
										value={formState.name}>
										{options}
									</select>
								</form>

								<button className='btn' type='submit' onClick={handleSubmit}>
									Confirm Villager
								</button>
							</div>
						) : null}
					</div>

					<div className="villager-islandpagehold">
						{currentIsland.villagers.map((villager) => (
							<div key={villager._id} className='solo-villager'>
								<div className='delete-button'>
									<button
										className='btn btn-danger'
										type='button'
										id='delete'
										onClick={async (event) => {
											if (
												// eslint-disable-next-line no-restricted-globals
												confirm(
													`Are you sure you want to delete this villager: ${villager.name}?`
												)
											) {
												event.preventDefault();
												await deleteVillager(villager._id);
												props.refresh();
											}
										}}>
										Delete {villager.name}
									</button>
								</div>

								<Photos name={villager.name} />

								<h3> {villager.name} </h3>

								<Info name={villager.name} />
							</div>
						))}
					</div>
				</>
			) : null}
		</div>
	);
}
