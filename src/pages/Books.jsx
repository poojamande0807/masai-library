import { useEffect, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Box, Grid, Button, Text, Image } from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { database } from "../database/db";
const Books = () => {
  const [books, setBooks] = useState();
  const [user, setUser] = useState({ isAdmin: true });
  // const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // const fetchBooks = async () => {
    //   const querySnapshot = await getDocs(collection(db, "books"));
    //   setBooks(
    //     querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    //   );
    // };
    // fetchBooks();
    setBooks(database.books);
    console.log(books);
  });

  return (
    <Box>
      {/* <h1>hii</h1> */}

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {books &&
          books.map((book) => (
            <Box
              key={book.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={book.thumbnail} alt={book.title} />
              <Box p="6">
                <Text fontWeight="bold">{book.title}</Text>
                <Text>Author: {book.author}</Text>
                <Text>Genre: {book.genre}</Text>
                <Button onClick={() => navigate(`/books/${book.id}`)}>
                  Show More
                </Button>
                {user?.isAdmin && (
                  <Box>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </Box>
                )}
              </Box>
            </Box>
          ))}
      </Grid>
    </Box>
  );
};

export default Books;
