import { connect } from 'react-redux';
import ContactList from '../components/ContactList';

import { bindActionCreators } from 'redux';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
  contacts: state.contacts
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: bindActionCreators(actions, dispatch).deleteContact
});

const Contacts = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);

export default Contacts;
