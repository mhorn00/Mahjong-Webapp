import {configureStore} from '@reduxjs/toolkit';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import gameStateReducer from './slices/gameStateSlice.js';
import mainStateReducer from './slices/mainStateSlice.js';

export const mainApi = createApi({
	reducerPath: 'mainApi',
	baseQuery: fetchBaseQuery({baseUrl: '/api/'}),
	endpoints: (builder) => ({
		createRoom: builder.query({
			query: () => '/api/createRoom',
		}),
	}),
});

const store = configureStore({
	reducer: {
		GameState: gameStateReducer,
		MainState: mainStateReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: {},
			},
		}),
});

export default store;
