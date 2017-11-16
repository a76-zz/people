import React from 'react';
import { connect } from 'react-redux';

import ContactForm from '../components/ContactForm';
import FormFooter from '../components/FormFooter';
import Header from '../components/Header';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

const mapDispatchToProps = (dispatch) => ({
  addContact: bindActionCreators(actions, dispatch).addContact
});

let AddContact = ({ addContact, router }) => (
  <div>
    <Header />
    <section className="content-section">
      <div className="content form">
        <header className="form-header">
          <h1>Add Contact</h1>

        </header>
        <div className="form-content">

          <ContactForm onSubmit={values => {
            router.push('/');
            addContact(values.firstName, values.lastName, values.email);
          }} />
          <FormFooter />
        </div>
      </div>
    </section>
  </div>
);

AddContact = connect(undefined, mapDispatchToProps)(AddContact);
export default AddContact;
