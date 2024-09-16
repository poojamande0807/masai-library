// src/pages/AddBook.jsx
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Box, Input, Button, Text, Textarea } from "@chakra-ui/react";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [error, setError] = useState("");

  const handleAddBook = async () => {
    try {
      await addDoc(collection(db, "books"), {
        title,
        author,
        thumbnail,
        genre,
        description,
        publicationDate,
      });
      setTitle("");
      setAuthor("");
      setThumbnail("");
      setGenre("");
      setDescription("");
      setPublicationDate("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box>
      <Text fontSize="2xl">Add New Book</Text>
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
      <Button onClick={handleAddBook}>Add Book</Button>
      {error && <Text color="red.500">{error}</Text>}
    </Box>
  );
};

export default AddBook;
