import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  time: 0,
  isRunning: false,
};

const stopwatchSlice = createSlice({
  name: 'stopwatch',
  initialState,
  reducers: {
    startTimer: (state, action) => {
      state.time = action.payload;
    },
    pauseTimer: (state) => {
      state.isRunning = !state.isRunning;
    },
    resetTimer: (state) => {
      state.time = 0;
      state.isRunning = false;
    },
  },
});

export const { startTimer, pauseTimer, resetTimer } = stopwatchSlice.actions;

export default stopwatchSlice.reducer;