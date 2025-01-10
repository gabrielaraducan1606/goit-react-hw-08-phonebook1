import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { Box, Button, Text } from "@chakra-ui/react";

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <Box display="flex" alignItems="center" gap={4}>
      <Text color="teal.500">{user?.email}</Text>
      <Button colorScheme="teal" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </Box>
  );
}

export default UserMenu;