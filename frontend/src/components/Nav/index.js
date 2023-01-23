// packages
import { Link } from 'react-router-dom';
import './styles.css'


export default function Nav(props) {
	//logout handle
	const handleLogout = () => {
		props.setUser({});
		localStorage.clear();
	};
	// render JSX
	return (
		<nav className='Header'>
			<div className='nav-holder'>
			<div className='Header-item'>
				<Link className='nav-link' to='/'>
					Home
				</Link>
			</div>

			{props.isLoggedIn ? (
				<>
					<div className='Header-item'>
						<Link
							className='nav-link'
							to='/'
							onClick={() => {
								props.setLogInStatus(false);
								handleLogout();
							}}>
							Log Out
						</Link>
					</div>
					<div className='Header-item'>
						<Link to='/user-info' className='nav-link'>
							User Account
						</Link>
					</div>
				</>
			) : (
				<>
					<div className='Header-item'>
						<Link to='/signup' className='nav-link'>
							Sign Up
						</Link>
					</div>
					<div className='Header-item'>
						<Link to='/login' className='nav-link'>
							Login
						</Link>
					</div>
				</>
			)}
		</div>
		</nav>
	);
}
