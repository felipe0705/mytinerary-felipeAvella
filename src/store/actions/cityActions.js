import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const getCities = createAsyncThunk("GET_CITIES", async ({ search = "", continent = "All" }) => {
  const params = {};
  if (search) {
    params.name = search;
  }
  if (continent !== "All") {
    params.continent = continent;
  }

  const response = await axios.get("http://localhost:8080/api/cities/all", { params });
  return response.data;
});

export const getContinents = createAsyncThunk("GET_CONTINENTS", async () => {
  const response = await axios.get("http://localhost:8080/api/cities/continents");
  return response.data;
});



export const setContinent = createAction("SET_CONTINENT");
export const setSearch = createAction("SET_SEARCH");
