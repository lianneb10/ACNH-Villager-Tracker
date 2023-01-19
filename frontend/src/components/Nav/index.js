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
		<nav className='Header'>
			<div className='Header-item'>
				<Link to='/'>Home</Link>
			</div>

			{props.isLoggedIn ? (
				<>
					<div className='Header-item'>
						<Link
							to='/'
							onClick={() => {
								props.setLogInStatus(false);
								handleLogout();
							}}>
							Log Out
						</Link>
					</div>
					<div className='Header-item'>
						<Link to='/user-info'>User Account</Link>
					</div>
				</>
			) : (
				<>
					<div className='Header-item'>
						<Link to='/signup'>Sign Up</Link>
					</div>
					<div className='Header-item'>
						<Link to='/login'>Login</Link>
					</div>
				</>
			)}
		</nav>
	);
}
