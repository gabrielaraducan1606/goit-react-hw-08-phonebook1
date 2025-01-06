import React from 'react';
import { useSelector } from 'react-redux';

function ContactList() {
  const contacts = useSelector(state => state.contacts.items || []);


  if (!Array.isArray(contacts)) {
    return <div>No contacts available.</div>;
  }

  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={contact.id || index}>{contact.name}</li>
      ))}
    </ul>
  );
}

export default ContactList;
