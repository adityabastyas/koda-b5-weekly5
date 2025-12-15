import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movies.slice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export default store;
