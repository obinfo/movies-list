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
  toggleLike(state, action) {
   const updateMovies = state.movies.map((movie) => {
    if (movie.id === action.payload + '') {
     movie.likes += 1;
     movie.dislikes -= 1;
    }
    return movie;
   });
   state.movies = updateMovies;
  },
  toggleDislike(state, action) {
   const updateMovies = state.movies.map((movie) => {
    if (movie.id === action.payload + '') {
     movie.likes -= 1;
     movie.dislikes += 1;
    }
    return movie;
   });
   state.movies = updateMovies;
  },
 },
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice.reducer;
