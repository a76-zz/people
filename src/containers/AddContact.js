import React from 'react'
import { connect } from 'react-redux'
import { addContact } from '../actions'
import ContactForm from '../components/ContactForm'

let AddContact = ({ dispatch }) => {

  return (
    <ContactForm onSubmit={values => {
      dispatch(addContact(values.firstName, values.lastName, values.email))
      
    }} />
  )
}
AddContact = connect()(AddContact)

export default AddContact
