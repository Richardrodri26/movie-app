import { GET_MOVIES, GET_MOVIES_BY_CATEGORIES } from "../types";

export default (state, action) => {
  const { payload, type } = action;

  const newState = (state.moviesByCategory) ? [...state.moviesByCategory, payload] : payload

  const removeDuplicates = (arr) => [...new Set(arr)];
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    case GET_MOVIES_BY_CATEGORIES:
      return {
        ...state,
        moviesByCategory: removeDuplicates(newState)
      };

    default:
      return state;
  }
};
