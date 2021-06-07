import { createSlice } from '@reduxjs/toolkit';

const initialMoviesState = {
 movies: [],
 isLoading: true,
 isMoviesEmpty: false,
 isOpenFilter: false,
 itemsPerPage: 5,
 currentPage: 1,
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
   if (state.movies.length === 0) {
    state.isMoviesEmpty = true;
   }
  },
  toggleLike(state, action) {
   const updateMovies = state.movies.map((movie) => {
    if (movie.id === action.payload + '') {
     movie.likes++;
     movie.dislikes = movie.dislikes > 0 ? movie.dislikes - 1 : movie.dislikes;
    }
    return movie;
   });
   state.movies = updateMovies;
  },
  toggleDislike(state, action) {
   const updateMovies = state.movies.map((movie) => {
    if (movie.id === action.payload + '') {
     movie.likes = movie.likes > 0 ? movie.likes - 1 : movie.likes;
     movie.dislikes++;
    }
    return movie;
   });
   state.movies = updateMovies;
  },
  toggleOpenFilter(state) {
   state.isOpenFilter = !state.isOpenFilter;
  },
  filterCategories(state, action) {
   if (action.payload === 'all') {
    state.movies = state.movies.slice();
   }
   const updateState = state.movies.filter(
    (movie) => movie.category === action.payload
   );
   state.movies = updateState;
  },
  itemsPerPageHandlerChange(state, action) {
   state.itemsPerPage = action.payload && action.payload;
  },
  changeCurrentPage(state, action) {
   console.log(action.payload);
   state.currentPage = action.payload;
  },
 },
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice.reducer;
