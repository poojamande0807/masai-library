import { Box } from '@chakra-ui/react'
import React from 'react'

const BookCard = ({book}) => {
  return (
   <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
    <Image src={book.thumbnail} alt={book.title}/>
    <Text fontWeight="bold" mt={2}>{book.title}</Text>
    
   </Box>
  )
}

export default BookCard