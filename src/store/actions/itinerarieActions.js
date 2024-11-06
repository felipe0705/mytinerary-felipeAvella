import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItineraries = createAsyncThunk("FETCH_ITINERARIES", async (city) => {
  const response = await axios.get(`http://localhost:8080/api/itineraries/${city}`);
  return response.data;
});
