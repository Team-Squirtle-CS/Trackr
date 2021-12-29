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
  // create a new case where types.GET_APPLICATIONS, return spread state and applications: action.payload
}

export default pageReducer;