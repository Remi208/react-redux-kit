import {ACTION_NAME} from './actionTypes'

export const action = (newProperty) => {
  return{
    type: ACTION_NAME,
    payload: newProperty
  }
}
