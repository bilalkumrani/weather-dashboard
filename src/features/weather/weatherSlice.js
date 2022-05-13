import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  data: [],
  error: "",
  isDataAvailable: false,
};

const fetchWeather = createAsyncThunk("weather/fetchWeather", (city) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=4a113fcfd770cc13cb50c8dcb21231ce`
    )
    .then((res) => res);
});
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.loading = true;
      state.isDataAvailable = false;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.isDataAvailable = true;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
      state.isDataAvailable = false;
    });
  },
});

export default weatherSlice.reducer;
export { fetchWeather };
