import { createSlice } from '@reduxjs/toolkit';

const initState = {
	val: true,
};

const indexSlice = createSlice({
	name: 'indexSlice',
	initState,
	reducers: {
		placeholder: (state, action) => func(state, action),
	},
});

const func = function (state, action) {
	return {
		...state,
		...{
			val: action.payload,
		},
	};
};

export default indexSlice;
export const { placeholder } = indexSlice.actions;
