import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './ContactRecord.css'

const ContactRecord = ({ id, firstName, lastName, email, onDelete }) => (
  <li className="contact-record">
    <Link to={`/contacts/${id}`}>
      <div className="position"></div>
      <div className="info">
        <span className="name">{firstName} {lastName}</span>
        <span className="email">{email}</span>
      </div>
      <div className="remove-record">
        <button onClick={e => {
          e.preventDefault();
          onDelete(id)}
        }>del
        </button>
      </div>
    </Link>

  </li>
)

ContactRecord.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default ContactRecord
