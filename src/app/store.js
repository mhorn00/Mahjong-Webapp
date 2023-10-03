import {configureStore} from '@reduxjs/toolkit';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import gameStateReducer from './slices/gameStateSlice.js';
import mainStateReducer from './slices/mainStateSlice.js';

const mainApi = createApi({
	reducerPath: 'ApiState',
	baseQuery: fetchBaseQuery({baseUrl: '/api/'}),
	endpoints: (builder) => ({
		createRoom: builder.query({
			query: () => 'createRoom/',
			transformResponse: (res) => res.roomId,
		}),
	}),
});

const store = configureStore({
	reducer: {
		GameState: gameStateReducer,
		[mainApi.reducerPath]: mainApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(mainApi.middleware),
});

export default store;
export { mainApi };
export const {useLazyCreateRoomQuery} = mainApi;