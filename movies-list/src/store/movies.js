import { createSlice } from '@reduxjs/toolkit';

const initialMoviesState = {
 movies: [],
 isLoading: true,
};

const moviesSlice = createSlice({
 name: 'movie',
 initialState: initialMoviesState,
 reducers: {
  loadingData(state, action) {
   state.movies = action.payload;
   state.isLoading = false;
  },
  deleteMovie(state, action) {
   const updateMovie = state.movies.filter(
    (movie) => movie.id !== action.payload + ''
   );
   state.movies = updateMovie;
  },
 },
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice.reducer;
