import React from 'react';
import './TileDiscardDisplay.scss';
import MahjongTile from './MahjongTile';
import Tiles from '../../enums/TilesEnum.js';
import { useSelector } from 'react-redux';

const TileDiscardDisplay = function ({className}) {
	const DiscardTiles = useSelector((state) => state.GameState.Discard);

	return (
		<div className={className}>
			<div className='TileArea'>
				{getDiscardTiles(DiscardTiles)}
			</div>
		</div>
	);
};

const getDiscardTiles = function (Tiles) {
	let tiles = [];
	for (let i = 0; i<Tiles.length; i++) {
		tiles.push(<MahjongTile Tile={Tiles[i]} ScaleFactor={5}/>);
	}
	return tiles;
};


export default TileDiscardDisplay;
