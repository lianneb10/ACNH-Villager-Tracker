// packages
import { useEffect, useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import User from './pages/User';
import Page404 from './pages/404';

// components
import Nav from './components/Nav';
import Footer from './components/Footer';

// utils
import { getUser } from './utils/api';
import IslandShow from './pages/Island';

function App() {
	// state
	const [isLoggedIn, setLogInStatus] = useState(false);
	const [user, setUser] = useState([]);

	const refresh = useCallback(() => {
		if (localStorage.token) {
			setLogInStatus(true);
			try {
				getUser(localStorage.user_id).then((foundUser) => {
					setUser(foundUser.user);
				});
			} catch (error) {
				console.log(error);
			}
		}
	}, []);

	//useEffect
	useEffect(() => {
		refresh()
	}, [refresh]);

	return (
		<div>
			{/* Header */}
			<Nav
				isLoggedIn={isLoggedIn}
				setLogInStatus={setLogInStatus}
				setUser={setUser}
				user={user}
			/>

			{/* Footer */}
			<Footer />

			{/* ROUTES */}
			<Routes>
				<Route
					path=''
					element={
						<Home 
							isLoggedIn={isLoggedIn} 
							user={user} 
							refresh={refresh} />
					}
				/>
				<Route
					path='/user-info'
					element={<User 
								user={user} 
								setLogInStatus={setLogInStatus} 
								refresh={refresh}/>}
				/>
				<Route
					path='/login'
					element={
						<Login
							isLoggedIn={isLoggedIn}
							setLogInStatus={setLogInStatus}
							setUser={setUser}
							user={user}
							refresh={refresh}
						/>
					}
				/>
				<Route
					path='/signup'
					element={
						<SignUp
							isLoggedIn={isLoggedIn}
							setLogInStatus={setLogInStatus}
							setUser={setUser}
						/>
					}
				/>
				<Route
					path='/island/:id'
					element={
						<IslandShow 
						user={user} 
						isLoggedIn={isLoggedIn} 
						refresh={refresh} />
					}
				/>
				<Route 
					path='*' exact={true} element={ <Page404 /> } />
			</Routes>
		</div>
	);
}

export default App;
