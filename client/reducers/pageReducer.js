import * as types from '../actions/actionTypes';

const initialState = {
  currPage: 'login',
  user: null,
  loggedIn: false
  // create a new piece of state, applications, with a value of an empty array
};

const pageReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_PAGE: {
      return {
        ...state,
        currPage: action.payload,
      };
    }
    // update user info 
    case types.SET_USER: {
      return {
        ...state,
        user: action.payload
      }
    }
    // default state 
    default: return { ...state };
  } 
  // create a new case where types.GET_APPLICATIONS, return spread state and applications: action.payload
}

export default pageReducer;