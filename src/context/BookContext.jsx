import { Children, createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const BookContext = createContext();

export const BookProvider = ({ Children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false``);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe();
  }, []);

  return (
    <BookContext.Provider value={{ user, isAdmin }}>
      {Children}
    </BookContext.Provider>
  );
};
