import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';
import axios from 'axios';

const BookForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: '',
        publicationYear: '',
        availableCopies: 0,
        isbnNumber: '',
        rating: 1,
    });

    const genres = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/books', formData);
            alert('Book added successfully!');
            setFormData({
                title: '',
                author: '',
                genre: '',
                publicationYear: '',
                availableCopies: 0,
                isbnNumber: '',
                rating: 1,
            });
        } catch (err) {
            alert(err.response.data.error);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
            <TextField
                fullWidth
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                select
                label="Genre"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                margin="normal"
                required
            >
                {genres.map((genre) => (
                    <MenuItem key={genre} value={genre}>
                        {genre}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                fullWidth
                label="Publication Year"
                type="number"
                name="publicationYear"
                value={formData.publicationYear}
                onChange={handleChange}
                margin="normal"
                inputProps={{ min: 1900, max: new Date().getFullYear() }}
            />
            <TextField
                fullWidth
                label="Available Copies"
                type="number"
                name="availableCopies"
                value={formData.availableCopies}
                onChange={handleChange}
                margin="normal"
                required
                inputProps={{ min: 0 }}
            />
            <TextField
                fullWidth
                label="ISBN Number"
                name="isbnNumber"
                value={formData.isbnNumber}
                onChange={handleChange}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Rating"
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                margin="normal"
                inputProps={{ min: 1, max: 5 }}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                Submit
            </Button>
        </Box>
    );
};

export default BookForm;
