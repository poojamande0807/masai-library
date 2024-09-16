import { useState, useContext } from "react";
// import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { AuthContext } from "../context/AuthContext";
import { Box, Input, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // setUser(userCredential.user);
      navigate("/books");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Card>
      <CardBody>
        <Box>
          <Text fontSize="2xl">Login</Text>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button colorScheme="teal" variant="solid" onClick={handleLogin}>
            Login
          </Button>

          {error && <Text color="red.500">{error}</Text>}
        </Box>
      </CardBody>
    </Card>
  );
};

export default Login;
