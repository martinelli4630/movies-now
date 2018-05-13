export const SEARCH         = '[SEARCH] Search';
export const SEARCH_SUCCESS = '[SEARCH] Search Success';
export const SEARCH_FAIL    = '[SEARCH] Search Fail';

export const search = (query) => {
    return {
        type: SEARCH,
        query
    }
}

export const searchSuccess = (payload) => {
    return {
        type: SEARCH_SUCCESS,
        payload
    }
}

export const searchFail = (payload) => {
    return {
        type: SEARCH_FAIL,
        payload
    }
}
