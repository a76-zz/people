import React from 'react'
import { connect } from 'react-redux'
import { editContact } from '../actions'
import ContactForm from '../components/ContactForm'
import FormFooter from '../components/FormFooter'
import Header from '../components/Header'

const getContactById = (contacts, id) => contacts.find(contact => contact.id === id)

const mapStateToProps = (state, ownProps) => ({
  contact: getContactById(state.contacts, +ownProps.params.id)
})

let EditContact = ({ dispatch, contact, router }) => (
  <div>
    <Header />
    <section className="content-section">
      <div className="content form">
        <header className="form-header">
          <h1>Edit Contact</h1>
        </header>
        <div className="form-content">
          <ContactForm initialValues={contact} onSubmit={values => {
            router.push('/')
            dispatch(editContact(contact.id, values.firstName, values.lastName, values.email))
          }} />
        </div>
        <FormFooter />
      </div>
    </section>
  </div>
)

EditContact = connect(mapStateToProps)(EditContact)

export default EditContact
