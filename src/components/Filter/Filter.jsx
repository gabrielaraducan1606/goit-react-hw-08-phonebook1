import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/contactSlice";
import { Box, Input, FormControl} from "@chakra-ui/react";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  return (
    <Box bg="white" p={5} borderRadius="md" shadow="md" >
      <FormControl >
        <Input
          type="text"
          placeholder="Caută contacte"
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
          maxW="400px"
        />
      </FormControl>
    </Box>
  );
}

export default Filter;