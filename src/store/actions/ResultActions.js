import * as actionTypes from './ActionTypes'

export const saveResult = (actualCounter) => { // synchronous
    // const updatedResult = ac * 2
    return {
        type: actionTypes.STORE_RESULT,
        counter: actualCounter
    }
}

export const storeResult = (actualCounter) => {
    return (dispatch, getState) => {        // dispatch comes from react-thunk which has acces to action. catch it, do whatever it wants,then create a new dispatch
        setTimeout(() => {
            // const oldCounter = getState().ctr.counter    //dont overuse getState, rather receive data as an argument if possible
            // console.log('oldCounter: ', oldCounter)
            dispatch(saveResult(actualCounter)) //call synchronous
        }, 2000)
    }
}

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultId: id
    }
}