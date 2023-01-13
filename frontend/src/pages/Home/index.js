// packages
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createIsland } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

export default function Home(props) {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [formState, setFormState] = useState({ name: '', villagers: [] });

    const handleChange = (event) => {
			setFormState({ ...formState, [event.target.id]: event.target.value });
		};

    const handleSubmit = (event) => {
			event.preventDefault();
			createIsland(formState, props.user._id);
			setShowForm(false);
			navigate('/');
		};
	// render JSX
	return (
		<div className='main-container'>
			<h1>Home Page</h1>
			{props.isLoggedIn ? (
				<div>
					<h3>
						Thank you for logging in, please add an island or edit an existing
						island below.
					</h3>
					<div className="createIsland">
                        <button 
                        id = 'create-island'
                        onClick={() => {setShowForm(!showForm);
                        }}>
                            Create Island
                        </button>
                    </div>
                    {showForm ? (
                        <div className="create-form">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='name'>Island Name:</label>
                                <input 
                                    id='name'
                                    type='text'
                                    onChange={handleChange}
                                    value={formState.name} />


                            </form>
                        </div>
                    ) : null}
				</div>
			) : (
				<h3>Please sign up or log in to access the website features.</h3>
			)}
		</div>
	)
}
