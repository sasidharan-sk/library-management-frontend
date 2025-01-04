import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';
import axios from 'axios';

const TransactionForm = () => {
    const [formData, setFormData] = useState({
        memberId: '',
        bookId: '',
        issueDate: new Date().toISOString().split('T')[0],
        returnDate: '',
        status: 'Issued',
    });

    const [members, setMembers] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const membersRes = await axios.get('http://localhost:5000/api/members');
            const booksRes = await axios.get('http://localhost:5000/api/books');
            setMembers(membersRes.data);
            setBooks(booksRes.data.filter((book) => book.availableCopies > 0));
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { memberId, bookId, issueDate, returnDate, status } = formData;
            const transactionData = { memberId, bookId, issueDate, returnDate, status };
            await axios.post('http://localhost:5000/api/transactions', transactionData);
            alert('Transaction recorded successfully!');
        } catch (err) {
            alert(err.response.data.error);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
            <TextField
                fullWidth
                select
                label="Member"
                name="memberId"
                value={formData.memberId}
                onChange={handleChange}
                margin="normal"
                required
            >
                {members.map((member) => (
                    <MenuItem key={member._id} value={member._id}>
                        {member.name}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                fullWidth
                select
                label="Book"
                name="bookId"
                value={formData.bookId}
                onChange={handleChange}
                margin="normal"
                required
            >
                {books.map((book) => (
                    <MenuItem key={book._id} value={book._id}>
                        {book.title} (Available: {book.availableCopies})
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                fullWidth
                label="Issue Date"
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
                margin="normal"
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                fullWidth
                label="Return Date"
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                required
            />
            <TextField
                fullWidth
                select
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                margin="normal"
            >
                <MenuItem value="Issued">Issued</MenuItem>
                <MenuItem value="Returned">Returned</MenuItem>
                <MenuItem value="Overdue">Overdue</MenuItem>
            </TextField>
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                Submit
            </Button>
        </Box>
    );
};

export default TransactionForm;
