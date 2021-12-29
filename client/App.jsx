import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Login from './components/login.jsx'
import Dashboard from './components/dashboard.jsx'
import Visualizer from './components/visualizer.jsx'
import NavBar from './components/navbar.jsx'

const mapStateToProps = (state) => ({
  // add pertinent state here
  currPage: state.page.currPage,
});

class App extends Component {
  constructor(props) {
    super(props);
  }

// make a switch statement that checks what value of this.props.currPage is
// by default, it should be 'login'
// if google OAuth is successfull, it should be reassigned to 'dashboard'
// when Go To Visualizer button is pushed, it should be reassigned to 'visualizer'
// when Go To Dashboard button is pushed, it should be reassigned to 'dashboard'
// depending on which case is true, 

    render() {
        switch (this.props.currPage) {
            case 'login': 
                return (
                    <div>
                        <Login/>
                    </div>
                );
            case 'dashboard': 
                return (
                    <div>
                      <NavBar/>
                      <Dashboard/>
                    </div>
                );
            case 'visualizer': 
                return (
                    <div>
                        <Visualizer/>
                    </div>
                );
        }
    }
}

export default connect(mapStateToProps)(App);