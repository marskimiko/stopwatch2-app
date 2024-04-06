import { configureStore } from '@reduxjs/toolkit';
import stopwatchReducer from '../features/stopwatchSlice';

export default configureStore({
  reducer: {
    stopwatch: stopwatchReducer,
  },
});