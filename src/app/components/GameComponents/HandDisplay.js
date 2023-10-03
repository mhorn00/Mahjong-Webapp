import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {setTiles} from '../../slices/gameStateSlice.js';
import update from 'immutability-helper';

import './Styles/HandDisplay.scss';
import MahjongTile from './MahjongTile.js';

const HandDisplay = function ({className}) {
	const dispatch = useDispatch();
	const Hand = useSelector((state) => state.GameState.Hand);
	const TileContainerRef = useRef(null);
	const [parentWidth, setParentWidth] = useState(0);

	useLayoutEffect(() => {
		setParentWidth(TileContainerRef.current.getBoundingClientRect().width);
	}, [TileContainerRef]);

	const moveTile = useCallback((dragIndex, hoverIndex) => {
		console.log('drag'+dragIndex+' hover'+hoverIndex);
		dispatch(
			setTiles({
				Tiles: update(Hand, {
					$splice: [
						[dragIndex, 1],
						[hoverIndex, 0, Hand[dragIndex]],
					],
				}),
			})
		);

	}, [Hand]);

	

	const singleTile = (Tile, Index, /* parentWidth */) => {
		const TileWidthPercent = 5;
		return <MahjongTile Tile={Tile} /* width={(TileWidthPercent / 100) * parentWidth} */ index={Index} moveTile={moveTile} key={Index}/>;
	};

	return (
		<div className={className}>
			<div ref={TileContainerRef} className='Hand'>
				{Hand.map((Tile, i) => singleTile(Tile, i, /* parentWidth */))}
			</div>
		</div>
	);

	/*return (
		<div className={className}>
			<div ref={TileContainerRef} className='Hand'>
				<div>{getHandComponents(Hand, parentWidth)}</div>
			</div>
		</div>
	);*/
};


/*const getHandComponents = function (Hand, parentWidth) {
	const TileWidthPercent = 5;
	let tiles = [];
	for (let i = 0; i < Hand.length; i++) {
		tiles.push(
			<div itemType='tile'>
				<MahjongTile Tile={Hand[i]} width={(TileWidthPercent / 100) * parentWidth} key={i} />
			</div>
		);
	}
	return tiles;
};*/

HandDisplay.propTypes = {
	className: PropTypes.string,
};
export default HandDisplay;
