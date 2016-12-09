import React from 'react'
import { connect } from 'react-redux'
import { editContact } from '../actions'
import ContactForm from '../components/ContactForm'



let EditContact = ({ dispatch, id }) => {

  return (
    <ContactForm onSubmit={values => {
      dispatch(editContact(id, values.firstName, values.lastName, values.email))

    }} />
  )
}
EditContact = connect()(EditContact)

export default EditContact
