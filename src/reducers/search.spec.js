import reducer, {
    initialState
} from './search';
import * as actions from '../actions/index';

describe('search reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle SEARCH', () => {
        expect(
            reducer({}, {
                type: actions.SEARCH,
                query: 'Batman'
            })
        ).toEqual({
            query: 'Batman',
        })
    })

    it('should handle SEARCH_SUCCESS', () => {
        const payload = {
            page: 1,
            total_results: 10,
            total_pages: 1,
            results: [{}]
        }
        expect(
            reducer({
                ...initialState
            }, {
                type: actions.SEARCH_SUCCESS,
                payload
            })
        ).toEqual({
            ...initialState,
            data: payload
        })
    })

    it('should handle SEARCH_FAIL', () => {
        const payload = { message: '404 Not Found' };
        expect(
            reducer({
                ...initialState
            }, {
                type: actions.SEARCH_FAIL,
                payload
            })
        ).toEqual({
            ...initialState,
        })
    })
});