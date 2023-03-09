import { GET_MOVIES } from "../types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload,
      };

    default:
      return state;
  }
};