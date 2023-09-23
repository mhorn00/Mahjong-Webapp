import {createSlice} from '@reduxjs/toolkit';
import Tiles from '../enums/TilesEnum.js';

const initialState = {
	Hand: [
		Tiles.OneBam,
		Tiles.TwoBam,
		Tiles.ThreeBam,
		Tiles.FourBam,
		Tiles.FiveBam,
		Tiles.SixBam,
		Tiles.SevenBam,
		Tiles.EightBam,
		Tiles.NineBam,
		Tiles.Blank,
	],
	Discard: [],
	OpponentHands: {
		Opponent1: [],
		Opponent2: [],
		Opponent3: [],
	},
};

export const gameStateSlice = createSlice({
	name: 'GameState',
	initialState,
	reducers: {
		setTiles: (state, action) => setTilesFunc(state, action),
		addDiscard: (state, action) => addDiscardFunc(state, action),
	},
});

const setTilesFunc = function (state, action) {
	console.log(action.payload.Tiles);
	state.Hand = action.payload.Tiles;
};

const addDiscardFunc = function (state, action) {
	state.Discard.push(action.payload.Tile);
};

export const {setTiles, addDiscard} = gameStateSlice.actions;
export default gameStateSlice.reducer;
