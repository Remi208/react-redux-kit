import {ACTION_NAME} from './action-types'

export const action = (newProperty) => {
  return{
    type: ACTION_NAME,
    payload: newProperty
  }
}
