import * as types from './actionTypes';

export const setPage = (page) => (dispatch) => {
  dispatch({ //action being created
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
}

// create a new function, getApplications, with the type GET_APPLICATIONS and payload will be all of the rows from the applications table in the DB