import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import ContactItem from 'components/ContactItem/ContactItem';

function ContactList() {
  const contacts = useSelector(state => state.contacts.items || []);


  if (!Array.isArray(contacts)) {
    return <div>No contacts available.</div>;
  }

  return (
    <Box bg="white" p={5} borderRadius="md" shadow="md" >
      <Heading as="h3" size="md" mb={4} textAlign="center">
        Lista de Contacte
      </Heading>
      {contacts.length === 0 ? (
        <Text color="gray.500" textAlign="center">
          Nu există contacte adăugate.
        </Text>
      ) : (
        <VStack spacing={3} >
          {contacts.map((contact) => (
            <ContactItem key={contact.id} id={contact.id} name={contact.name} number={contact.number} />
          ))}
        </VStack>
      )}
    </Box>
  );
}

export default ContactList;