import React from 'react';
import { useSelector } from 'react-redux';

function ContactList() {
  const contacts = useSelector(state => state.contacts.items || []);


  if (!Array.isArray(contacts)) {
    return <div>No contacts available.</div>;
  }

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ul>
  );
}

export default ContactList;
