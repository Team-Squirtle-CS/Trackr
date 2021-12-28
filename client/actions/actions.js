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