import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <p>{user?.email}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default UserMenu;
