import { createSlice } from '@reduxjs/toolkit';

const launchSlice = createSlice({
  name: 'launch',
  initialState: {
    items: [],
    records: []
  },
  reducers: {
    launchListValues(state, action) {
      state.items = action.payload.items;
      state.records = action.payload.items;
    },
    searchRocket(state, action) {
      state.items= state.records.filter(item => item.rocket.rocket_name.toLowerCase() === action.payload.toLowerCase())
    },
  },
});

export const launchActions = launchSlice.actions;

export default launchSlice;
