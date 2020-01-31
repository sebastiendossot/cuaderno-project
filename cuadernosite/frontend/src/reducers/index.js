import { combineReducers } from 'redux';
import cuadernos from './cuadernos'
import errors from './errors'
import messages from './messages'
import auth from './auth'

export default combineReducers({
  cuadernos,
  errors,
  messages,
  auth
});