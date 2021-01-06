import * as actionTypes from '../actions/ActionTypes'
import { updateObject } from '../Utility'

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const newArray = state.results.filter(result => result.id !== action.resultId)
    return updateObject(state, { results: newArray })
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.counter }) })    //concat creates a new array.   (push method just manipulates the old array)
        // return {
        //     ...state,
        //     results: state.results.concat({id: new Date(), value: action.counter})  
        // }
        case actionTypes.DELETE_RESULT:
        // const id = 2
        // const newArray = [...state.results]
        // newArray.splice(id, 1)

        // return {
        //     ...state,
        //     results: newArray
        // }
        return deleteResult(state, action)
    }

    return state
}

export default resultReducer