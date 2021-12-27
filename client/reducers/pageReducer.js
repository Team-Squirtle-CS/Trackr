import * as types from '../actions/actionTypes';

const initialState = {
  currPage: 'login',
  currentUserID: '',
  loggedIn: false
};

const pageReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOG_IN: {
      return {
        ...state,
        currPage: 'home',
      };
    }
    default: return state;
  } 
}

export default pageReducer;