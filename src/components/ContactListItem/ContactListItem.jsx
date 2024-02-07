import React from 'react';
import css from './ContactListItem.module.css';
const ContactListItem = ({ contact, onDelete }) => {
  return (
    <li className={css.contact}>
      {contact.name}: {contact.number}
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
};

export default ContactListItem;
