import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=6cdecc1372bfdcdd015f791bdfa22813";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const res = await fetch(url);
  const data = await res.json();

  return data.results;
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
