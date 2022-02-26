import { createSlice } from '@reduxjs/toolkit';

const launchSlice = createSlice({
  name: 'launch',
  initialState: {
    items: [],
  },
  reducers: {
    launchListValues(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const launchActions = launchSlice.actions;

export default launchSlice;
