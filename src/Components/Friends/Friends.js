import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friends = (props) => {
	const { id, name, email } = props.friend;
	const history = useHistory();

	const handleClick = (friendId) => {
		const url = `/friend/${friendId}`;
		history.push(url);
	};
	const friendStyle = {
		background: 'tomato',
		border: '1px solid purple',
		marginBottom: '10px',
		padding: '20px',
		borderRadius: '5px',
		width: '500px'
	};
	return (
		<div style={friendStyle}>
			<h2>Name:{name}</h2>
			<h5>Email:{email}</h5>
			<h1>
				Id:{' '}
				<Link to={`/friend/${id}`}>
					<button>Show Detail of{id}</button>
				</Link>
				<button onClick={() => handleClick(id)}>Click Me</button>
			</h1>
		</div>
	);
};

export default Friends;
