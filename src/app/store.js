import { configureStore } from '@reduxjs/toolkit';
import gameStateReducer from './slices/gameStateSlice.js';

const store = configureStore({
	reducer: {
		GameState: gameStateReducer,
	},
});

export default store;
