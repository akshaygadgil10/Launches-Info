import { configureStore } from '@reduxjs/toolkit';

import launchSlice from './launch-slice';

const store = configureStore({
    reducer: { launch: launchSlice.reducer },
});

export default store;
