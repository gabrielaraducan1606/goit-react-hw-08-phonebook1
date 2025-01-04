import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./RegisterPage/RegisterPage";
import LoginPage from "./LoginPage/LoginPage";
import ContactsPage from "./ContactsPage/ContactsPage";
import Navigation from "./Navigation/Navigation";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/contacts"
          element={isAuthenticated ? <ContactsPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
