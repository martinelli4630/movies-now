import { SEARCH, SEARCH_SUCCESS, SEARCH_FAIL} from '../actions';

const initialState = {
    query: '',
    data: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH: {
            return {
                ...state,
                query: action.query
            }
        }
        case SEARCH_SUCCESS: {
            return {
                ...state,
                data: action.payload
            }
        }
        case SEARCH_FAIL: {
            return {
                ...state
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;