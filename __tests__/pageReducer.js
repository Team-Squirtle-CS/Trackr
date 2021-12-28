import pageReducer from '../client/reducers/pageReducer';

/**
 * One of the main benefits of reducers is how testable they are. Since they're
 * pure (in theory), all we have to do is look at the inputs and outputs. We
 * can also add some tests to determine if the reducer really is pure!
 */

describe('MegaMarkets reducer', () => {
    // declare state 
    let state;

    beforeEach(() => {
        // initalize state to inital state 
        state = {
            currPage: 'login',
            user: null,
            loggedIn: false
        };
    });

    describe('inital state', () => {
        it('should return an inital state when given an undefined input', () => {
            // pageReducer(state, action)
            expect(pageReducer(undefined, { type: undefined })).toEqual(state);
        });
    });
});