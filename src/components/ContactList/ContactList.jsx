import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items || []); 
  const filter = useSelector((state) => state.contacts.filter || ''); 

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.ul}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
}

export default ContactList;
