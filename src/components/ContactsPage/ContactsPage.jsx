import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactSlice";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

function ContactsPage() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  return (
    <div>
      <ContactForm />
      <Filter />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <ContactList />
    </div>
  );
}

export default ContactsPage;