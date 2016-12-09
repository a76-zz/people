import React, { PropTypes } from 'react'
import ContactRecord from './ContactRecord'

const ContactList = ({ contacts, onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {contacts.map(contact =>
        <ContactRecord
          key={contact.id}
          onDelete={onDelete}
          {...contact}
        />
      )}
    </tbody>
  </table>
)

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onDelete: PropTypes.func.isRequired
}

export default ContactList
