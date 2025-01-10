import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactSlice";
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading } from "@chakra-ui/react";

function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <Box bg="white" p={5} borderRadius="md" shadow="md" >
      <Heading as="h1" mb={6} textAlign="center" color="teal.500">
          Your contacts
        </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="name" isRequired maxW="400px">
            <FormLabel>Nume</FormLabel>
            <Input
              placeholder="Introdu numele"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="number" isRequired maxW="400px">
            <FormLabel>Număr de telefon</FormLabel>
            <Input
              placeholder="Introdu numărul de telefon"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full" maxW="400px">
            Adaugă Contact
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default ContactForm;