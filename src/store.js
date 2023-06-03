import { configureStore } from '@reduxjs/toolkit';
import indexReducer from './slices/indexSlice.js';

const store = configureStore({
	reducer: {
		index: indexReducer,
	},
});

export default store;
