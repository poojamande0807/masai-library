// src/pages/GenrePage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Box, Grid, Text, Image, Button } from "@chakra-ui/react";

const GenrePage = () => {
  const { genre } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooksByGenre = async () => {
      const q = query(collection(db, "books"), where("genre", "==", genre));
      const querySnapshot = await getDocs(q);
      setBooks(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchBooksByGenre();
  }, [genre]);

  return (
    <Box>
      <Text fontSize="2xl">Genre: {genre}</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {books.map((book) => (
          <Box
            key={book.title}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image src={book.thumbnail} alt={book.title} />
            <Box p="6">
              <Text fontWeight="bold">{book.title}</Text>
              <Text>Author: {book.author}</Text>
              <Text>Genre: {book.genre}</Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default GenrePage;
