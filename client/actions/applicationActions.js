import * as types from './actionTypes';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

// add new application to user's applications
export const addApplication = (application) => (dispatch) => {
    // setup axios request 
    const request = {
        method: 'POST',
        url: '/applications/create-app',
        data: application
    }

    axios.request(request).then((response) => {
        //action being created
        dispatch({
            type: types.ADD_APPLICATION,
            payload: response.data
        })
    }).catch( err => console.log(err));
};

// delete an application 
export const deleteApplication = (applicationId) => (dispatch) => {
    // action being created
    dispatch({
        type: types.DELETE_APPLICATION,
        payload: applicationId
    })
};

// update an application 
export const updateApplication = (application) => (dispatch) => {
    // action being created
    dispatch({
        type: types.UPDATE_APPLICATION,
        payload: application
    })
};
