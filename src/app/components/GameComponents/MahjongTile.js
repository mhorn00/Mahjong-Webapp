import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {ItemTypes} from '../../enums/ItemTypes';
import {useDrag, useDrop} from 'react-dnd';
import OneBamImg from '../../tiles/Tiles/OneBam.png';

const TileImages = require.context('../../tiles/Tiles', true, /\.png$/);
const TileImageMap = {};
TileImages.keys().forEach((key) => {
	TileImageMap[key.replace('./', '').replace('.png', '')] = TileImages(key);
});

const TileImageWidth = 302;
const TileImageHeight = 392;
const TileColCount = 9;
const TileRowCount = 5;

const MahjongTile = function ({Tile, /* width, */ index, moveTile}) {
	//const ScaleFactor = TileImageWidth / width;
	const tileStyle = {
		backgroundImage: 'url(../../tiles/Tiles/OneBam.png)',
		backgroundPosition: '1px, 1px',
		backgroundRepeat: 'no-repeat',
		position: 'absolute',
		display: 'inline',
		width: '300px',
		height: '390px',
		padding: '5px',
		opacity: isDragging ? 0 : 1,
	};

	//return <div style={tileStyle} itemType='tile' />;
	const ref = useRef(null);
	const [{handlerId}, drop] = useDrop({
		accept: ItemTypes.TILE,
		collect: (monitor) => ({handlerId: monitor.getHandlerId()}),
		hover: (item, monitor) => {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;
			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}
			// Determine rectangle on screen
			const hoverBoundingRect = ref.current.getBoundingClientRect();
			// Get horizontal middle
			const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
			// Determine mouse position
			const clientOffset = monitor.getClientOffset();
			// Get pixels to the left
			const hoverClientX = clientOffset.x - hoverBoundingRect.left;
			// Only perform the move when the mouse has crossed half of the items width
			// When dragging right, only move when the cursor is below 50%
			// When dragging left, only move when the cursor is above 50%
			// Dragging right
			if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
				return;
			}
			// Dragging left
			if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
				return;
			}
			// Time to actually perform the action
			moveTile(dragIndex, hoverIndex);
			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
			item.index = hoverIndex;
		},
	});
	const [{isDragging}, drag] = useDrag({
		type: ItemTypes.TILE,
		item: () => ({Tile, index}),
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});
	drag(drop(ref));
	return (
		/* <div ref={ref} data-handler-id={handlerId}>
			<img style={tileStyle} width={'100px'} height={'130px'} />
		</div> */
		<img src='../../tiles/Tiles/OneBam.png' width={'100px'} height={'130px'} />
	);
};

MahjongTile.propTypes = {
	Tile: PropTypes.object.isRequired,
	/* width: PropTypes.number.isRequired, */
	index: PropTypes.any,
	moveTile: PropTypes.any,
};
export default MahjongTile;
