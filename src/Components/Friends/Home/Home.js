import { useEffect, useState } from 'react';
import Friends from '../Friends';

const Home = () => {
	const [ friends, setFriends ] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((data) => setFriends(data));
	}, []);
	return (
		<div>
			<h1>Friends:{friends.length}</h1>
			{friends.map((friend) => <Friends friend={friend} />)}

			
		</div>
	);
};

export default Home;
