import React from 'react'
import { connect } from 'react-redux'
import { editContact } from '../actions'
import ContactForm from '../components/ContactForm'
import FormFooter from '../components/FormFooter'

const getContactById = (contacts, id) => contacts.find(contact => contact.id === id)

const mapStateToProps = (state, ownProps) => ({
  contact: getContactById(state.contacts, +ownProps.params.id)
})

let EditContact = ({ dispatch, contact }) => (
  <section>
    <ContactForm initialValues={contact} onSubmit={values => {
      dispatch(editContact(contact.id, values.firstName, values.lastName, values.email))
    }} />
    <FormFooter />
  </section>
)

EditContact = connect(mapStateToProps)(EditContact)

export default EditContact
