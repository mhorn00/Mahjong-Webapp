import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTiles } from '../../slices/gameStateSlice.js';

import './HandDisplay.scss';
import MahjongTile from './MahjongTile.js';

const HandDisplay = function ({className}) {
	const Hand = useSelector((state) => state.GameState.Hand);
	const dispatch = useDispatch();

	const fuck = 
		Hand.forEach(tile => {
			
		});

	return (
		<div className={className}>
			<div className='Hand'>
				{getHandComponents(Hand)}
			</div>
		</div>
	);
};

const getHandComponents = function (Hand) {
	let tiles = [];
	for (let i = 0; i<Hand.length; i++) {
		tiles.push(<MahjongTile Tile={Hand[i]} ScaleFactor={2}/>);
	}
	return tiles;
};

export default HandDisplay;
