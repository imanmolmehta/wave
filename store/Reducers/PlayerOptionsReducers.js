import { createSlice } from '@reduxjs/toolkit';

const playerOptionsSlice = createSlice({
  name: 'playerOptions',
  initialState: {
    option: false,
  },
  reducers: {
    toggleOptions(state = initialState, action) {
      state.option = action.payload
    }
  }
})

export default playerOptionsSlice.reducer;

// Actions

export const { toggleOptions } = playerOptionsSlice.actions;

export const toggle = option => dispatch => {
  dispatch(toggleOptions(option))
}

export const selectedOption = state => state.playerOptions.option
