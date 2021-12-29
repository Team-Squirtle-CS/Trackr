import * as types from '../actions/actionTypes';

const initialState = {
  currPage: 'login',
  user: {},
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
      console.log("action.payload.user = ", action.payload.user)
      return {
        ...state,
        user: action.payload.user
      }
    }
    // default state 
    default: return { ...state };
  } 
}

export default pageReducer;