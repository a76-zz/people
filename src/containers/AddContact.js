import React from 'react'
import { connect } from 'react-redux'
import { addContact } from '../actions'
import ContactForm from '../components/ContactForm'
import FormFooter from '../components/FormFooter'

let AddContact = ({ dispatch, router }) => (
  <section>
    <ContactForm onSubmit={values => {
      dispatch(addContact(values.firstName, values.lastName, values.email))
    }} />
    <FormFooter />
  </section>
)

AddContact = connect()(AddContact)

export default AddContact
