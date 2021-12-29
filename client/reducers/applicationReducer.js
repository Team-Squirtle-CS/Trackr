import * as types from '../actions/actionTypes';

const initialState = {
    applications: []
};

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        // add new application 
        case types.ADD_APPLICATION: {
            return {
                ...state,
                applications: [...state.applications, action.payload],
            };
        }
        // delete application -> payload will have applicationId
        case types.DELETE_APPLICATION: {
            return {
                ...state,
                applications: [...state.applications.filter(a => a.applicationId !== action.payload)]
            };
        }
        // update application -> payload will have updated application 
        case types.UPDATE_APPLICATION: {
            // use map + indexOf to get index of application with desired applicationId
            const index = state.applications.map(a => a.applicationId).indexOf(action.payload.applicationId); 
            // then use index to replace the update application inside the applications array 
            const applications = [...state.applications]; 
            applications[index] = action.payload; 
            return {
                ...state,
                applications: applications
            };
        }

        // 

        // default state 
        default: return { ...state };
    }
}

export default applicationReducer;