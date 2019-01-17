import {ACTION_NAME} from './action-types'
import Immutable from 'seamless-immutable';

export const initialState = Immutable({
  property: 'react-redux-kit',
});

export const rootReducer = (state = initialState, action) => {
  switch (action.type){
    case ACTION_NAME: return {
      ...state,
      property: action.payload
    }
    default:
      return state
  }
}