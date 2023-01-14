// packages
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import User from './pages/User';

// components
import Nav from './components/Nav';

// utils
import { getUser } from './utils/api';
import IslandShow from './pages/Island';
// styles


function App() {
	// state
	const [isLoggedIn, setLogInStatus] = useState(false);
	const [user, setUser] = useState([]);
	//useEffect
	useEffect(() => {
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
			{/* <Footer /> */}

			{/* ROUTES */}
			<Routes>
				<Route path='/' element={<Home isLoggedIn={isLoggedIn} user={user}/>} />
				<Route
					path='/user-info'
					element={<User user={user} setLogInStatus={setLogInStatus} />}
				/>
				<Route
					path='/login'
					element={
						<Login
							isLoggedIn={isLoggedIn}
							setLogInStatus={setLogInStatus}
							setUser={setUser}
							user={user}
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
					path='/island'
					element={
						<IslandShow />
					}
					/>
			</Routes>
		</div>
	);
}

export default App;
