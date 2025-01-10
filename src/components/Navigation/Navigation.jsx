import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import { Box, Link, Flex } from "@chakra-ui/react";

function Navigation() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Box as="nav" bg="gray.500" p={4}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Flex gap={4}>
          <Link
            as={NavLink}
            to="/"
            color="white"
            _hover={{ textDecoration: "underline" }}
            _activeLink={{ fontWeight: "bold", textDecoration: "underline" }}
          >
            Home
          </Link>
          {isAuthenticated && (
            <Link
              as={NavLink}
              to="/contacts"
              color="white"
              _hover={{ textDecoration: "underline" }}
              _activeLink={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              Contacts
            </Link>
          )}
        </Flex>
        <Flex gap={4}>
          {isAuthenticated ? (
            <UserMenu />
          ) : (
            <>
              <Link
                as={NavLink}
                to="/register"
                color="white"
                _hover={{ textDecoration: "underline" }}
                _activeLink={{ fontWeight: "bold", textDecoration: "underline" }}
              >
                Register
              </Link>
              <Link
                as={NavLink}
                to="/login"
                color="white"
                _hover={{ textDecoration: "underline" }}
                _activeLink={{ fontWeight: "bold", textDecoration: "underline" }}
              >
                Login
              </Link>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navigation;
