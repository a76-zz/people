import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}

const renderField = ({ input, label, type,  meta: { touched, error, warning } }) => (
  <div className="field">
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && (error && <span className="error">{error}</span>)}
    </div>
  </div>
)

const ContactForm = (props) => {
  const { handleSubmit, submitting, firstName, lastName, email } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="firstName" type="text" component={renderField} defaultValue={firstName} label="First Name"/>
      <Field name="lastName" type="text" component={renderField} defaultValue={lastName} label="Last Name"/>
      <Field name="email" type="text" component={renderField} defaultValue={email} label="Email"/>

      <div className="submit">
        <button type="submit" disabled={submitting}>Save</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'contact',  // a unique identifier for this form
  validate          // <--- validation function given to redux-form
})(ContactForm)
