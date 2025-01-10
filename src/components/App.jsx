import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./RegisterPage/RegisterPage";
import LoginPage from "./LoginPage/LoginPage";
import ContactsPage from "./ContactsPage/ContactsPage";
import Navigation from "./Navigation/Navigation";
import { useSelector } from "react-redux";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "../theme";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <ChakraProvider theme={theme}>
    <Router>
    <Navigation />
      <Box bg="gray.100" minH="100vh">
        <Routes>
        <Route path="/register" element={isAuthenticated ? <ContactsPage /> : <RegisterPage />} />
      <Route path="/login" element={isAuthenticated ? <ContactsPage /> : <LoginPage/>} />
     
      <Route
        path="/contacts"
        element={isAuthenticated ? <ContactsPage /> : <Navigate to="/login" />}
      />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Box>
    </Router>
  </ChakraProvider>
  );
}

export default App;