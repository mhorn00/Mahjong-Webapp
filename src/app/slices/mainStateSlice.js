import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {};

export const mainStateSlice = createSlice({
	name: 'MainState',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// builder.addCase(createAsyncThunk.fulfilled, (state, action) => {
		// 	console.log(action.payload);
		// });
	}
});

// export const createNewRoomThunk = createAsyncThunk(
// 	'mainStateSlice/createNewRoomThunk',
// 	async (arg, thunkAPI) => {
// 		return await fetch('/api/createRoom').then((res) => res.json());
// 	}
// );

export const {increment} = mainStateSlice.actions;
export default mainStateSlice.reducer;
