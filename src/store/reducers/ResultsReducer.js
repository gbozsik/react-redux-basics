import * as actionTypes from '../Actions'

const initialState = {
    results: []
}


const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.counter})  //concat creates a new array.   (push method just manipulates the old array)
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2
            // const newArray = [...state.results]
            // newArray.splice(id, 1)
            const newArray = state.results.filter(result => result.id !== action.resultId)
            return {
                ...state,
                results: newArray
            }
    }

    return state
}

export default resultReducer