import * as types from './actionTypes';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

// set current page to dashboard, login or visualizer
export const setPage = (page) => (dispatch) => {
  //action being created
  dispatch({ 
    type: types.SET_PAGE,
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
}

// create a new function, getApplications, with the type GET_APPLICATIONS and payload will be all of the rows from the applications table in the DB


// set current user based on google login 
export const setUser = (user) => (dispatch) => {
  const request = {
    method: 'POST',
    url: '/users/add',
    data: {user}
  }
 
  axios.request(request).then((response) => {
    //action being created
    dispatch({
      type: types.SET_USER,
      payload: response.data,
    });
  }).catch(console.log("failed to send request"));
}
