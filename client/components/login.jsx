import React, { useState } from "react";
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
// get action we need to update state with 
import { setPage } from '../actions/actions';


const mapDispatchToProps = (dispatch) => ({
    setPage: (page) => dispatch(setPage(page)), 
});

const login = (props) => {

    function handleLogin(response){
        console.log(response);
        // update current user 
        props.setPage('dashboard');
        // update current page 
    }

    return (
        <div>
            <h1>login</h1>
                <GoogleLogin
                    clientId="705527790784-pe8e6p9qspsosjv014vjioea69jjjb9n.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={handleLogin}
                    onFailure={handleLogin}
                    cookiePolicy={'single_host_origin'}
                />
        </div>
    );
};

export default connect(null, mapDispatchToProps)(login);