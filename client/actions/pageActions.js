import * as types from './actionTypes';

// set current page to dashboard, login or visualizer
export const setPage = (page) => (dispatch) => {
  //action being created
  dispatch({ 
    type: 'SET_PAGE',
    payload: page
  })
  // const request = {
  //   method: 'GET',
  //   url: '/database/login',
  //   params: {username, password}
  // }

  // axios.request(request).then((response) => {
  //   if(response.status = 201) dispatch({
  //     type: types.LOG_IN,
  //     payload: response.data, //will hold the user object
  //   });                                                                                                                          
  // }).catch(console.error);
}; 

// set current user based on google login 
export const setUser = (user) => (dispatch) => {
  //action being created
  dispatch({ 
    type: 'SET_USER',
    payload: user
  })}; 