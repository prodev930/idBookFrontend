import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from './reducers';

const store = configureStore({
  reducer: {
    hotelReducer
  },
});

export default store;
