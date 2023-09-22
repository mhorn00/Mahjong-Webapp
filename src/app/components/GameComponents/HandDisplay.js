import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setTiles} from '../../slices/gameStateSlice.js';

import './HandDisplay.scss';
import MahjongTile from './MahjongTile.js';

const HandDisplay = function ({className}) {
	const Hand = useSelector((state) => state.GameState.Hand);
	const dispatch = useDispatch();
	const TileContainerRef = useRef(null);
	const [parentWidth, setParentWidth] = useState(0);
	
	useLayoutEffect(() => {
		setParentWidth(TileContainerRef.current.getBoundingClientRect().width);
	}, [TileContainerRef]);

	return (
		<div className={className}>
			<div ref={TileContainerRef} className='Hand'>
				{getHandComponents(Hand, parentWidth)}
			</div>
		</div>
	);
};

const getHandComponents = function (Hand, parentWidth) {
	const TileWidthPercent = 5;
	let tiles = [];
	for (let i = 0; i < Hand.length; i++) {
		tiles.push(<MahjongTile Tile={Hand[i]} width={(TileWidthPercent/100) * parentWidth} />);
	}
	return tiles;
};

export default HandDisplay;
