import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";

function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li>
      <p>{name}: {number}</p>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
}

export default ContactItem;
