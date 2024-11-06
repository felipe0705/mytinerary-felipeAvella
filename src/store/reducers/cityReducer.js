import { createReducer } from "@reduxjs/toolkit";
import { getCities, getContinents, setContinent, setSearch } from "../actions/cityActions";

const initialState = { cities: [], continents: [], loading: false, error: null, continent: 'All', search: '' };

const cityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getCities.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getCities.fulfilled, (state, action) => {
      state.cities = action.payload.response;
      state.loading = false;
    })
    .addCase(getCities.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    .addCase(getContinents.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getContinents.fulfilled, (state, action) => {
      state.continents = action.payload.response;
      state.loading = false;
    })
    .addCase(getContinents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    .addCase(setContinent, (state, action) => {
      state.continent = action.payload;
    })
    .addCase(setSearch, (state, action) => {
      state.search = action.payload;
    });
});

export { cityReducer };

