import React from "react";
import { Link } from "react-router-dom";

import { Flex, Button, Box } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <div>
      <Flex as="nav" bg="teal.500" p={4} color="black" justify="space-between">
        <Box>
          <Link to="/books">
            <Button colorScheme="teal" variant="link">
              All
            </Button>
          </Link>

          <Link to="/books/fantacy">
            <Button colorScheme="teal" variant="link">
              Fantacy
            </Button>
          </Link>
          <Link to="/books/fiction">
            <Button colorScheme="teal" variant="link">
              Fiction
            </Button>
          </Link>
        </Box>

        <Box>
          <Link to="/register">
            <Button colorScheme="teal" variant="solid" mr={4}>
              Register
            </Button>
          </Link>

          <Link to="/login">
            <Button colorScheme="teal" variant="solid" mr={4}>
              Login
            </Button>
          </Link>
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
