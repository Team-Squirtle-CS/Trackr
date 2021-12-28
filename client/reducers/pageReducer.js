import * as types from '../actions/actionTypes';

const initialState = {
  currPage: 'login',
  currentUserID: '',
  loggedIn: false
};

const pageReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_PAGE: {
      return {
        ...state,
        currPage: action.payload,
      };
    }
    default: return state;
  } 
}

export default pageReducer;