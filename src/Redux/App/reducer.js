import * as types from './actionTypes';

const initialState = {
  flats: [],
  isLoading: false,
  isError: false,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_FLATS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_FLATS_SUCCESS:
      return {
        ...state,
        flats: payload,
        isLoading: false,
        isError: false,
      }
      ;
    case types.GET_FLATS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
      
  }
};

export { reducer };
