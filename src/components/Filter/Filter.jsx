import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFilter } from "../../redux/contactSlice";
import styles from './Filter.module.css';

function Filter() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className={styles.filter}>
      <label className={styles.nameLabel}>
        Find contacts by name:
        <input
          type="text"
          value={filter}
          onChange={(e) => dispatch(updateFilter(e.target.value))}
          className={styles.input}
        />
      </label>
    </div>
  );
}

export default Filter;
