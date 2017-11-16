import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

let synchronized = false;

const mapDispatchToProps = (dispatch) => ({
  sync: bindActionCreators(actions, dispatch).sync
});

class App extends Component {

  componentWillMount () {
    if (!synchronized) {
        this.props.sync();
        synchronized = true;
    }
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default connect(undefined, mapDispatchToProps)(App);