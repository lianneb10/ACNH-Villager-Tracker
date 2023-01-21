import { Link } from 'react-router-dom';
import './404.css'

export default function Page404() {
	return (
		<>
			<div className='error'>
				<h1>404 Error</h1>
				<img className='tom' src='tom.png' alt='confused tom nook'></img>
				<h4>Whoops! This page does not exist on the site, maybe ask Tom?</h4>
				<Link className='home-link'  path to='/'>
					Return to Home Page 
				</Link>
			</div>
		</>
	);
}
