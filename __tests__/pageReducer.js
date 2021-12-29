import pageReducer from '../client/reducers/pageReducer';

/**
 * One of the main benefits of reducers is how testable they are. Since they're
 * pure (in theory), all we have to do is look at the inputs and outputs. We
 * can also add some tests to determine if the reducer really is pure!
 */

describe('Page reducer', () => {
    // declare state 
    let state;

    beforeEach(() => {
        // initalize state to inital state 
        state = {
            currPage: 'login',
            user: null,
            applications: []; 
        };
    });

    // inital state should be returned when given undefined state + action
    describe('inital state', () => {
        it('should return an inital state when given an undefined input', () => {
            // pageReducer(state, action)
            expect(pageReducer(undefined, { type: undefined })).toEqual(state);
        });
    });

    // page should change to dashboard
    describe('dashboard page switch', () => {
        it('should return state with currPage as login', () => {
            // pageReducer(state, action)
            expect(pageReducer(state, { type: 'SET_PAGE', payload: 'dashboard'}).currPage).toEqual('dashboard');
        });
    });
});