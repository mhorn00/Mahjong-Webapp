import React from 'react';
import './GamePage.scss';
import HandDisplay from '../components/GameComponents/HandDisplay';

const GamePage = function () {
	return (
		<div className='GameContainer'>
			<div className='DiscardContainer'>

			</div>
			<div className='OpponentContainer'>

			</div>
			<HandDisplay className='HandsContainer'/>
		</div>
	);
};

export default GamePage;
