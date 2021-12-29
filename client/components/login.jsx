import React, { useState } from "react";
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
// get actions we need to update state with 
import { setPage, setUser } from '../actions/pageActions';


const mapDispatchToProps = (dispatch) => ({
    setPage: (page) => dispatch(setPage(page)), 
    setUser: (user) => dispatch(setUser(user))
});

const login = (props) => {

    // handle successful login, redirect to dashboard + update user state 
    function handleSuccessfulLogin(response){
        // create user object
        const user = {
            googleId: response.googleId, 
            firstName: response.profileObj.givenName,
            lastName: response.profileObj.familyName, 
            email: response.profileObj.email, 
            avatar: response.profileObj.imageUrl
        }
        // update current user 
        props.setUser(user); 
        // update current page to dashboard  
        props.setPage('dashboard');
        return;
    }

    function handleUnsuccessfulLogin(response){
        console.log(response); 
        window.alert('Sorry that login did not work'); 
        return; 
    }

    return (
        <div>
            <h1>login</h1>
                <GoogleLogin
                    clientId="705527790784-pe8e6p9qspsosjv014vjioea69jjjb9n.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={handleSuccessfulLogin}
                    onFailure={handleUnsuccessfulLogin}
                    cookiePolicy={'single_host_origin'}
                />
        </div>
    );
};

export default connect(null, mapDispatchToProps)(login);