import React from 'react';
import styles from './ContactItem.module.css';

function ContactItem({ id, name, number, onDelete }) {
  return (
    <li>
      {name}: {number}
      <button onClick={() => onDelete(id)} className={styles.buttonDelete}>Delete</button>
    </li>
  );
}

export default ContactItem;
