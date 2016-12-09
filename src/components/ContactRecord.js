import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const ContactRecord = ({ id, firstName, lastName, email, onDelete }) => (
  <tr>
    <td>
      {firstName}
    </td>
    <td>
      {lastName}
    </td>
    <td>
      {email}
    </td>
    <td>
      <Link to={`/contacts/${id}`}>Edit</Link>
      <button onClick={() => onDelete(id)}>Delete</button>
    </td>
  </tr>
)

ContactRecord.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default ContactRecord
