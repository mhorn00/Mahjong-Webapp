import React from 'react';
import './GamePage.scss';
import GameContainer from '../components/GameComponents/GameContainer.js';
import TopBar from '../components/PageComponents/TopBar';


const GamePage = function () {
	return (
		<div className='RootContainer'>
			<TopBar className='TopBar'/>
			<GameContainer className='GameContainer'/>
		</div>
	);
};

export default GamePage;
