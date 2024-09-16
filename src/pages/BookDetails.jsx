// src/pages/BookDetails.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Box, Text, Image } from "@chakra-ui/react";

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const docRef = doc(db, "books", bookId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBook(docSnap.data());
      }
    };
    fetchBook();
  }, [bookId]);

  if (!book) return <Text>Loading...</Text>;

  return (
    <Box>
      <Image src={book.thumbnail} alt={book.title} />
      <Text fontWeight="bold">{book.title}</Text>
      <Text>Author: {book.author}</Text>
      <Text>Genre: {book.genre}</Text>
      <Text>Publication Date: {book.publicationDate}</Text>
      <Text>Description: {book.description}</Text>
    </Box>
  );
};

export default BookDetails;
