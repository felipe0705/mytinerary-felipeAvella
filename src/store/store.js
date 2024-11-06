import { configureStore } from "@reduxjs/toolkit";
import {slideReducer} from "./reducers/homeReducer.js";
import { cityReducer } from "./reducers/cityReducer.js";
import itinerarieReducer from "./reducers/itinerarieReducer.js"

const store = configureStore({
  reducer: {
    slides: slideReducer,
    cities: cityReducer,
    itinerarie: itinerarieReducer,
  },
});

export default store;
