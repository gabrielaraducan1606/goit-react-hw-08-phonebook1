import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { loginUser } from "../../redux/authSlice";

import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error } = useSelector((state) => state.auth);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const navigate = useNavigate(); 

const handleRegister = () => {
  navigate('/register'); 
};

  return (
    <Box
      bg="gray.100"
      minH="100vh"
      p={5}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        bg="white"
        p={6}
        borderRadius="md"
        shadow="md"
        width="100%"
        maxW="400px"
      >
        <Heading as="h1" mb={6} textAlign="center" color="teal.500">
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
          {error && (
  <Alert status="error">
    <AlertIcon />
    {typeof error === "string" ? error : JSON.stringify(error)}
  </Alert>
)}

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Introduceți email-ul"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Parolă</FormLabel>
              <Input
                type="password"
                placeholder="Introduceți parola"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="teal"
              width="full"
              isLoading={isLoading}
              disabled={isLoading}
            >
             Login
            </Button>
            <Button
                              type="submit"
                              colorScheme="teal"
                              width="full"
                              isLoading={isLoading}
                              disabled={isLoading}
                              onClick={handleRegister}
                            >
                              Register
                            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}

export default LoginPage;