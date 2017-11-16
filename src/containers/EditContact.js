import React from 'react';
import { connect } from 'react-redux';

import ContactForm from '../components/ContactForm';
import FormFooter from '../components/FormFooter';
import Header from '../components/Header';

import { bindActionCreators } from 'redux';
import * as actions from '../actions';

const getContactById = (contacts, id) => contacts.find(contact => contact.id === id);

const mapStateToProps = (state, ownProps) => ({
  contact: getContactById(state.contacts, +ownProps.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  editContact: bindActionCreators(actions, dispatch).editContact
});

let EditContact = ({ editContact, contact, router }) => (
  <div>
    <Header />
    <section className="content-section">
      <div className="content form">
        <header className="form-header">
          <h1>Edit Contact</h1>
        </header>
        <div className="form-content">
          <ContactForm initialValues={contact} onSubmit={values => {
            router.push('/');
            editContact(contact.id, values.firstName, values.lastName, values.email);
          }} />
        </div>
        <FormFooter />
      </div>
    </section>
  </div>
);

EditContact = connect(mapStateToProps, mapDispatchToProps)(EditContact);
export default EditContact;
