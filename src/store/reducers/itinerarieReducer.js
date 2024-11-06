import { createSlice } from '@reduxjs/toolkit';
import { fetchItineraries } from '../actions/itinerarieActions';  

const itinerarieSlice = createSlice({
  name: 'itinerarie',
  initialState: {
    selectedCity: null,
    itineraries: [],
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
      state.itineraries = [];  
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItineraries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItineraries.fulfilled, (state, action) => {
        state.itineraries = action.payload;
        state.loading = false;
      })
      .addCase(fetchItineraries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedCity } = itinerarieSlice.actions;
export default itinerarieSlice.reducer;
