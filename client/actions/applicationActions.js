import * as types from './actionTypes';


// add new application to user's applications
export const addApplication = (application) => (dispatch) => {
    // action being created
    dispatch({
        type: types.ADD_APPLICATION,
        payload: application
    })
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
