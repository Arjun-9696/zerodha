import * as types from './actionTypes';
import axios from 'axios';

const getFlats = (params) => (dispatch) => {
  dispatch({ type: types.GET_FLATS_REQUEST });
  axios
    .get('http://localhost:8080/flats', params)
    .then((r) => dispatch({ type: types.GET_FLATS_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.GET_FLATS_FAILURE }));
};

export { getFlats };
