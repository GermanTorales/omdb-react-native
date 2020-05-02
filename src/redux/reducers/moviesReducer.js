import { SET_MOVIES, SET_SINGLE_MOVIE } from "../constants/moviesConstants";

const Initialize = {
  moviesStore: {},
  singleMovie: {},
};

export default (state = Initialize, action) => {
  switch (action.type) {
    case SET_MOVIES:
      {
        return { ...state, moviesStore: action.movies };
      }
      break;
    case SET_SINGLE_MOVIE:
      {
        return { ...state, singleMovie: action.movie };
      }
      break;
    default: {
      return state;
    }
  }
};
