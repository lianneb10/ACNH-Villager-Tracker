// packages
import { Link } from 'react-router-dom';

// styles

export default function Nav(props) {
	//logout handle
	const handleLogout = () => {
		props.setUser({});
		localStorage.clear();
	};
	// render JSX
	return (
		<nav>
			<div className='nav-item' key='1'>
				<Link to='/'>Home</Link>
			</div>

			{props.isLoggedIn ? (
				<div className='nav-item' key='2'>
					<Link
						to='/'
						onClick={() => {
							props.setLogInStatus(false);
							handleLogout();
						}}>
						Log Out
					</Link>

					<Link to='/user-info'>User Account</Link>
				</div>
			) : (
				<div className='nav-item' key='3'>
					<Link to='/signup'>Sign Up</Link>
					<Link to='/login'>Login</Link>
				</div>
			)}
		</nav>
	);
}
