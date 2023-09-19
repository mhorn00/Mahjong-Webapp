import { createSlice } from '@reduxjs/toolkit';
import Tiles from '../enums/TilesEnum.js';

const initialState = {
	Hand: [
		Tiles.DragonCrack,
		Tiles.DragonDot,
		Tiles.Joker,
		Tiles.NineBam,
		Tiles.OneBam,
		Tiles.OneBam,
		Tiles.FiveDot,
		Tiles.West,
		Tiles.Flower,
		Tiles.FiveDot,
		Tiles.TwoCrack,
		Tiles.TwoBam,
		Tiles.Blank
	],
	Discard: [Tiles.DragonBam],
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
	state.Hand = action.payload.Tiles;
};

const addDiscardFunc = function (state, action) {
	state.Discard.push(action.payload.Tile);
};

export const { setTiles, addDiscard } = gameStateSlice.actions;
export default gameStateSlice.reducer;
