import { useState, useEffect } from 'react';
import './app.css';
import Card from './components/card/Card';
import Navbar from './components/navbar/Navbar';
import { posts } from './data/data';
import { io } from 'socket.io-client';

const App = () => {
	const [username, setUsername] = useState('');
	const [user, setUser] = useState('');
	const [socket, setSocket] = useState(null);

	useEffect(() => {
		setSocket(io('http://localhost:3003'));
	}, []);

	const sigInUser = () => {
		setUser(username);
		socket.emit('newUser', username);
	};

	return (
		<div className="container">
			{user ? (
				<>
					<Navbar socket={socket} />
					{posts.map((post) => (
						<Card key={post.id} post={post} socket={socket} user={user} />
					))}
					<span className="username">{user}</span>
				</>
			) : (
				<div className="login">
					<h2>Notifications App</h2>
					<input
						type="text"
						placeholder="username"
						onChange={(e) => setUsername(e.target.value)}
					/>
					<button onClick={sigInUser}>Login</button>
				</div>
			)}
		</div>
	);
};

export default App;
