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

const renderField = ({ input, label, type, value,  meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} value={value} placeholder={label} type={type}/>
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)

const ContactForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, firstName, lastName, email } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="firstName" type="text" component={renderField} value={firstName} label="First Name"/>
      <Field name="lastName" type="text" component={renderField} value={lastName} label="Last Name"/>
      <Field name="email" type="text" component={renderField} value={email} label="Email"/>

      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'contact',  // a unique identifier for this form
  validate          // <--- validation function given to redux-form
})(ContactForm)
