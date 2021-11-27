import { useState, React } from 'react';
import './app.css';
import Card from './components/card/Card';
import Navbar from './components/navbar/Navbar';
import { posts } from './data/data';

function App() {
	const [username, setUsername] = useState('');
	const [user, setUser] = useState('');
	console.log(user);
	return (
		<div className="container">
			{user ? (
				<>
					<Navbar />
					{posts.map((post) => (
						<Card key={post.id} post={post} />
					))}

					<span className="username">{user}</span>
				</>
			) : (
				<div className="login">
					<input
						placeholder="username"
						type="text"
						onChange={(event) => {
							setUsername(event.target.value);
						}}
					/>
					<button className="loginBtn" onClick={() => setUser(username)}>
						Login
					</button>
				</div>
			)}
		</div>
	);
}

export default App;
