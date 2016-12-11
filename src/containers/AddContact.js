import React from 'react'
import { connect } from 'react-redux'
import { addContact } from '../actions'
import ContactForm from '../components/ContactForm'
import FormFooter from '../components/FormFooter'
import Header from '../components/Header'

let AddContact = ({ dispatch, router }) => (
  <div>
    <Header />
    <section className="content-section">
      <div className="content form">
        <header className="form-header">
          <h1>Add Contact</h1>

        </header>
        <div className="form-content">

          <ContactForm onSubmit={values => {
            router.push('/')
            dispatch(addContact(values.firstName, values.lastName, values.email))
          }} />
          <FormFooter />
        </div>
      </div>
    </section>
  </div>
)

AddContact = connect()(AddContact)

export default AddContact
