import { combineReducers } from 'redux';
import * as actionTypes from './actionType'

const initialState = {}
interface Action {
  payload: any,
  type:string
}

const updateObject = (oldObject:any, updatedProperties:any) => ({
  ...oldObject,
  ...updatedProperties,
});
export const rates = (state=initialState, action:Action) => {
  switch (action.type) {
    case actionTypes.CHECK_RATES: return updateObject(state, { 
      loading: true ,
      error: null
    })
    case actionTypes.CHECK_RATES_SUCCESS: return updateObject(state, {
      loading: false,
      rates: action.payload,
      error: null
    })
    default: return state;
  }
}

const rootReducer = combineReducers({
  Rates: rates
});

export default rootReducer;
