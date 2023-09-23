import React, {useLayoutEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import './Styles/TileDiscardDisplay.scss';
import MahjongTile from './MahjongTile';
import Tiles from '../../enums/TilesEnum.js';
import {useSelector} from 'react-redux';

const TileDiscardDisplay = function ({className}) {
	const DiscardTiles = useSelector((state) => state.GameState.Discard);
	const TileContainerRef = useRef(null);
	const [parentWidth, setParentWidth] = useState(0);

	useLayoutEffect(() => {
		setParentWidth(TileContainerRef.current.getBoundingClientRect().width);
	}, [TileContainerRef]);
	return (
		<div className={className}>
			<div ref={TileContainerRef} className='TileArea'>
				{getDiscardTiles(DiscardTiles, parentWidth)}
			</div>
		</div>
	);
};

const getDiscardTiles = function (Tiles, parentWidth) {
	const TileWidthPercent = 5;
	let tiles = [];
	for (let i = 0; i < Tiles.length; i++) {
		tiles.push(<MahjongTile Tile={Tiles[i]} width={(TileWidthPercent / 100) * parentWidth} key={i} />);
	}
	return tiles;
};

TileDiscardDisplay.propTypes = {
	className: PropTypes.string,
};
export default TileDiscardDisplay;
