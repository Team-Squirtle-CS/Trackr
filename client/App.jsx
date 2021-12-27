import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  // add pertinent state here
  currPage: state.page.currPage,
});

class App extends Component {
  constructor(props) {
    super(props);
  }

    render() {
        return (
            <div>
                <h1>helloooooo world!!!! {this.props.currPage}</h1>
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);