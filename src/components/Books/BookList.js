import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/books');
                setBooks(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchBooks();
    }, []);

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                Books List
            </Typography>
            <Grid container spacing={2}>
                {books.map((book) => (
                    <Grid item xs={12} sm={6} md={4} key={book._id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{book.title}</Typography>
                                <Typography>Author: {book.author}</Typography>
                                <Typography>Genre: {book.genre}</Typography>
                                <Typography>Available Copies: {book.availableCopies}</Typography>
                                <Typography>ISBN: {book.isbnNumber}</Typography>
                                <Typography>Rating: {book.rating}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default BookList;
