import React, { useState } from "react";
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    // add pertinent state here
    user: state.page.user
});

const NavBar = (props) => {
    return (
        <div>
            <h2>Hello, {props.user.firstName}</h2>
        </div>
    );
};

export default connect(mapStateToProps)(NavBar);