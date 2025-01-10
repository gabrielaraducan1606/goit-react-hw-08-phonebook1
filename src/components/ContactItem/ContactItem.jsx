import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";
import { Box, Button, Text, VStack } from "@chakra-ui/react";

function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <Box p={3} bg="gray.50" borderRadius="md" shadow="sm" >
      <VStack align="start" >
        <Text fontWeight="bold">{name}</Text>
        <Text>{number}</Text>
        <Button
          size="sm"
          colorScheme="red"
          onClick={() => dispatch(deleteContact(id))}
          
        >
          Delete
        </Button>
      </VStack>
    </Box>
  );
}

export default ContactItem;