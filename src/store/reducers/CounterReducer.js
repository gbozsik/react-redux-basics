import * as actionTypes from '../actions/ActionTypes'
import { updateObject } from '../Utility'

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            // const newState = Object.assign({}, state)
            // newState.counter = state.counter + 1
            // return newState
            return updateObject(state, { counter: state.counter + 1 })
        case actionTypes.DECREMENT:
            return updateObject(state, { counter: state.counter - 1 })
        case actionTypes.ADD:
            return updateObject(state, { counter: state.counter + action.value })
        // return {
        //     ...state,
        //     counter: state.counter + action.value
        // }
        case actionTypes.SUBSTRACT:
            return updateObject(state, { counter: state.counter - action.value })
    }

    return state
}

export default counterReducer