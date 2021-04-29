import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Components/Friends/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import FriendDetail from './Components/FriendDetail/FriendDetail';


function App() {
	return (
		<Router>
			<switch>
				<Route path="/home">
					<Home />
				</Route>
				<Route path="/friend/:friendId">
					<FriendDetail />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="*">
					<NoMatch />
				</Route>
			</switch>
		</Router>
	);


export default App;
