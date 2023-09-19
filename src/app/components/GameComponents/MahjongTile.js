import React from 'react';
import './MahjongTile.scss';
import TileSheet from '../../tiles/DevTiles.png';

const TileImageWidth = 302;
const TileImageHeight = 392;
const TileColCount = 9;
const TileRowCount = 5;


const MahjongTile = function ({Tile, ScaleFactor}) {
	const tileStyle = {
		backgroundImage: `url(${TileSheet})`,
		backgroundPosition: `-${Tile.Index.x * TileImageWidth/ScaleFactor}px -${Tile.Index.y * TileImageHeight/ScaleFactor}px`,
		backgroundSize: `${(TileColCount*TileImageWidth)/ScaleFactor}px ${(TileRowCount*TileImageHeight)/ScaleFactor}px`,
		backgroundRepeat: 'no-repeat',
		width: `${TileImageWidth/ScaleFactor}px`,
		height: `${TileImageHeight/ScaleFactor}px`,
		padding: '10 px',
	};

	return (
		<div style={tileStyle}/>
	);
};

export default MahjongTile;
