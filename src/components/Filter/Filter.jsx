import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/contactSlice";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
        />
      </label>
    </div>
  );
}

export default Filter;
