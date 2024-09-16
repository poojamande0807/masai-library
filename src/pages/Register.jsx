// src/pages/Register.jsx
import { useState } from "react";
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import {
  Box,
  Input,
  Button,
  Checkbox,
  Text,
  background,
} from "@chakra-ui/react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), { isAdmin });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box>
      <Text fontSize="2xl">Register</Text>
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
      <Checkbox
        isChecked={isAdmin}
        onChange={(e) => setIsAdmin(e.target.checked)}
      >
        Is Admin
      </Checkbox>
      <Button colorScheme="blue" onClick={handleRegister}>
        Register
      </Button>
      {error && <Text color="red.500">{error}</Text>}
    </Box>
  );
};

export default Register;
