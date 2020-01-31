import axios from 'axios';
import {createMessage, returnErrors} from './messages';
import { tokenConfig } from './auth';

import { GET_CUADERNOS, DELETE_CUADERNO, ADD_CUADERNO, GET_ERRORS } from './types';

//GET CUADERNOS
 
export const getCuadernos = () => (dispatch, getState) => {
  axios.get('/api/cuadernos/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_CUADERNOS,
        payload: res.data
      });
    }).catch(err => dispatch(returnErrors(err.response.data,err.response.status)))
}

//DELETE CUADERNO

export const deleteCuaderno = id => (dispatch, getState) => {
  axios.delete(`/api/cuadernos/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({deleteCuaderno: 'Cuaderno deleted'}));
      dispatch({
        type: DELETE_CUADERNO,
        payload: id
      });
    }).catch(err => console.log(err))
} 

//ADD CUADERNO

export const addCuaderno = cuaderno => (dispatch, getState) => {
  axios.post('/api/cuadernos/', cuaderno, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({addCuaderno: 'Cuaderno added'}));
      dispatch({
        type: ADD_CUADERNO,
        payload: res.data
      });
    }).catch(err => dispatch(returnErrors(err.response.data,err.response.status)))
}
