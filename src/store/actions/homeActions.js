import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSlides = createAsyncThunk("GET_SLIDES", async () => {
  const response = await axios.get("http://localhost:8080/api/sliders/all");
  const groupedSlides = [];
  for (let i = 0; i < response.data.length; i += 4) {
    groupedSlides.push(response.data.slice(i, i + 4));
  }
  return groupedSlides;
});
