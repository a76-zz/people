import React, { PropTypes } from 'react';
import ContactRecord from './ContactRecord';
import './ContactList.css';
import { Link } from 'react-router';

const ContactList = ({ contacts, onDelete, on }) => (
  <section className="content-section">
    <div className="content">
      <header>
        <h1>Contacts</h1>
      </header>
      <ul className="list">
        {contacts.map(contact =>
          <ContactRecord
            key={contact.id}
            onDelete={onDelete}
            {...contact}
          />
        )}
      </ul>
      <div className="list-info">
        <Link to='/contacts/new'>Add Contact</Link>
      </div>
    </div>

  </section>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ContactList;
