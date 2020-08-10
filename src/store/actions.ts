import * as actionTypes from './actionType'

export const checkRates = (base:string) => {
    return {
        type: actionTypes.CHECK_RATES,
        payload: { base }
    }
}

export const checkRatesSuccess = (rates:any) => ({
    type: actionTypes.CHECK_RATES_SUCCESS,
    payload: rates
})