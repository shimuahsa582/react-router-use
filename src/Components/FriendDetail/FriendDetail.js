import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
	const { friendId } = useParams();
	const [ friend, setFriendDetail ] = useState({});
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
		fetch(url).then((res) => res.json()).then((data) => setFriendDetail(data));
	}, []);
	return (
		<div>
			<h3>This is friend detail component:{friendId}</h3>
			<h1>Name:{friend.name}</h1>
			<p>Email:{friend.email}</p>
			<p>Phone{friend.phone}</p>
		</div>
	);
};

export default FriendDetail;
