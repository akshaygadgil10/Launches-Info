import { createSlice } from '@reduxjs/toolkit';

const launchSlice = createSlice({
  name: 'launch',
  initialState: {
    items: [],
    records: [],
    filteredRecords: []
  },
  reducers: {
    launchListValues(state, action) {
      state.items = action.payload.items;
      state.records = action.payload.items;
    },
    searchRocket(state, action) {
      if (action.payload === '' || !action.payload) {
        state.items = [...state.records]
      }
      else {
        state.items = state.records.filter(item => item.rocket.rocket_name.toLowerCase().includes(action.payload.toLowerCase()))
      }
    },
    getListByDateRange(state, action) {
      const currentDate = new Date();
      var noOfDays;
      switch (action.payload) {
        case 'last_week':
          noOfDays = 7;
          break;
        case 'last_month':
          noOfDays = 31
          break;
        case 'last_year':
          noOfDays = 365
          break;

        default:
          noOfDays = 100000;
          break;
      }
      state.items = state.items.filter(item => {
        let launchDate = new Date(item.launch_date_utc.slice(0, 10))
        var DifferenceInTime = currentDate.getTime() - launchDate.getTime();
        var DifferenceInDays = Math.ceil(DifferenceInTime / (1000 * 3600 * 24));
        return DifferenceInDays <= noOfDays
      })
    },
    getListByStatus(state, action) {
      //select none
      if (action.payload === 'none') {
        state.items = [...state.item]
      }
      else
      state.items = state.items.filter(item => item.launch_success === (action.payload === 'failure' ? false : true));
    },
    getUpcommingList(state, action) {
      state.items = state.items.filter(item => item.upcoming === (action.payload  ? true : false));
    },
  },
});

export const launchActions = launchSlice.actions;

export default launchSlice;
