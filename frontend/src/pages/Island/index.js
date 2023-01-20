// packages
import { useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createVillager, deleteIsland, updateIsland } from '../../utils/api';
import { Photos } from '../../components/Photo';
import { Info } from '../../components/Info';
import Delete from '../../components/Delete';
import { options } from './options';
import './island.css'

export default function IslandShow(props) {
	const navigate = useNavigate();
    let {id} = useParams();
	// useState for villager add
	const [showForm, setShowForm] = useState(false);
	const [formState, setFormState] = useState({ name: '' , type: '' });
	// useState for island name edit
	const [showIslandForm, setIslandForm] = useState(false);

	const currentIsland = props.user.islands ? props.user.islands.find(
			(island) => island._id === id
		): null;

	const [islandNameState, setIslandNameState] = useState({name: ''})
	
	useEffect(() => {
	setIslandNameState({ name: currentIsland.name });}, [currentIsland.name, showIslandForm]);
    
//villager adding 
	const handleChange = (event) => {
		setFormState({
			...formState,
			name: event.target.value,
			type: document
				.querySelector(`[value=${event.target.value}]`)
				.closest('optgroup').label,
		});;
	};
	
	const handleSubmit = async (event) => {
		event.preventDefault();
		await createVillager(formState, id);
		setShowForm(false);
		navigate(`/island/${id}`);
        props.refresh();
	};

	//island name changing
	const handleIslandChange = (event) => {
		setIslandNameState({
			...islandNameState, [event.target.id]: event.target.value
		});
	};

	const handleIslandSubmit = async (event) => {
		event.preventDefault();
		await updateIsland(islandNameState, currentIsland._id);
		setIslandForm(false);
		navigate(`/island/${id}`);
		props.refresh();
	};

	//delete island 
	const [deletePopUp, setDeletePopUp] = useState(false);



	// render JSX
	return (
		<div className='main-container'>
			{props.isLoggedIn && currentIsland ? (
				<>
					<h1 className='island-name'>
						{showIslandForm ? islandNameState.name : currentIsland.name} Island
					</h1>
					{props.user.islands && currentIsland.villagers.length === 0 ? (
						<h3 className='no-villager'>
							Welcome to your island! You can edit your island's name using the "Edit Island Name" button. Use the "Add Villager" button to add a villager to your island.
						</h3>
					) : null}
					<>
						<div className='island-button-holder'>
							<div className='delete'>
								{!deletePopUp ? (
									<button
										id='delete-btn'
										className='btn btn-danger '
										onClick={setDeletePopUp}>
										Delete {currentIsland.name} Island
									</button>
								) : null}
								{deletePopUp ? (
									<div className='delete-prompt'>
										<p>
											Are you sure you wish to delete {currentIsland.name}{' '}
											island?
										</p>
										<button
											id='delete-btn'
											className='btn btn-danger '
											onClick={async () => {
												await deleteIsland(currentIsland._id);
												navigate('/');
												props.refresh();
											}}>
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

							<button
								className='btn'
								type='button'
								id='edit'
								onClick={() => {
									setIslandForm(!showIslandForm);
								}}>
								Edit Island Name
							</button>
						</div>

						{showIslandForm ? (
							<div className='edit-form'>
								<form>
									<label htmlFor='name'>Island Name:</label>
									<input
										id='name'
										type='text'
										onChange={handleIslandChange}
										value={islandNameState.name}
									/>
								</form>
								<button
									className='btn'
									type='submit'
									onClick={handleIslandSubmit}>
									Confirm Name
								</button>
							</div>
						) : null}
					</>

					<div className='add-villager'>
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

					<div className='villager-islandpagehold'>
						{currentIsland.villagers.map((villager) => (
							<div key={villager._id} className='solo-villager'>
								<Delete refresh={props.refresh} villager={villager} />

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
