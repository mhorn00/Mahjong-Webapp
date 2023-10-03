import {createSlice} from '@reduxjs/toolkit';
import Tiles from '../enums/TilesEnum.js';

const initialState = {
	RoomID: undefined,
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
		setRoomId: (state, action) => setRoomIdFunc(state, action),
		setTiles: (state, action) => setTilesFunc(state, action),
		addDiscard: (state, action) => addDiscardFunc(state, action),
	},
});

const setRoomIdFunc = function (state, action) {
	state.RoomID = action.payload;
};

const setTilesFunc = function (state, action) {
	state.Hand = action.payload.Tiles;
};

const addDiscardFunc = function (state, action) {
	state.Discard.push(action.payload.Tile);
};

export const {setRoomId, setTiles, addDiscard} = gameStateSlice.actions;
export default gameStateSlice.reducer;
