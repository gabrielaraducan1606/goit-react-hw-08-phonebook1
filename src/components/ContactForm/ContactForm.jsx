import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactSlice";
import styles from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label className={styles.nameLabel}>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
      </label>
      <label className={styles.nameLabel}>
        Number
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className={styles.input}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
