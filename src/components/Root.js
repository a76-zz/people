import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import Dashboard from './Dashboard'
import AddContact from '../containers/AddContact'
import EditContact from '../containers/EditContact'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Dashboard}  />
      <Route path="/contacts/new" component={AddContact} />
      <Route path="/contacts/:id" component={EditContact} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
