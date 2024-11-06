import { createReducer } from "@reduxjs/toolkit";
import { getSlides } from "../actions/homeActions.js";

const initialState = { slides: [], loading: false, error: null };


const slideReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getSlides.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getSlides.fulfilled, (state, action) => {
      state.slides = action.payload;
      state.loading = false;
    })
    .addCase(getSlides.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
});
export {slideReducer};
