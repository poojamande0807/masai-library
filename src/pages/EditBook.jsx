// src/pages/EditBook.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Box, Input, Button, Text, Textarea } from "@chakra-ui/react";

const EditBook = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBook = async () => {
      const docRef = doc(db, "books", bookId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const bookData = docSnap.data();
        setBook(bookData);
        setTitle(bookData.title);
        setAuthor(bookData.author);
        setThumbnail(bookData.thumbnail);
        setGenre(bookData.genre);
        setDescription(bookData.description);
        setPublicationDate(bookData.publicationDate);
      }
    };
    fetchBook();
  }, [bookId]);

  const handleUpdateBook = async () => {
    try {
      const docRef = doc(db, "books", bookId);
      await updateDoc(docRef, {
        title,
        author,
        thumbnail,
        genre,
        description,
        publicationDate,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box>
      <Text fontSize="2xl">Edit Book</Text>
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Input
        placeholder="Thumbnail URL"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
      />
      <Input
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <Textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        placeholder="Publication Date"
        value={publicationDate}
        onChange={(e) => setPublicationDate(e.target.value)}
      />
      <Button onClick={handleUpdateBook}>Update Book</Button>
      {error && <Text color="red.500">{error}</Text>}
    </Box>
  );
};

export default EditBook;
