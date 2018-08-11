import * as actions from './index';

describe('actions', () => {
    it('should create an action to search a text', () => {
        const text = 'Batman'
        const expectedAction = {
            type: actions.SEARCH,
            query: text
        }

        expect(actions.search(text)).toEqual(expectedAction)
    })

    it('should create an action to search successfully a text', () => {
        const payload = {
            page: 1,
            total_results: 10,
            total_pages: 1,
            results: [{}]
        }
        const expectedAction = {
            type: actions.SEARCH_SUCCESS,
            payload: payload
        }

        expect(actions.searchSuccess(payload)).toEqual(expectedAction)
    })

    it('should create an action for when search fails', () => {
        const payload = { message: '404 Not Found' };
        const expectedAction = {
            type: actions.SEARCH_FAIL,
            payload
        }

        expect(actions.searchFail(payload)).toEqual(expectedAction)
    })
});