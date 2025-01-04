import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';
import axios from 'axios';

const MemberForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        membershipType: 'Basic',
    });

    const membershipOptions = [
        { type: 'Basic', maxBooks: 2 },
        { type: 'Premium', maxBooks: 5 },
        { type: 'Elite', maxBooks: 10 },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const selectedType = membershipOptions.find(
                (option) => option.type === formData.membershipType
            );
            const memberData = { ...formData, maxBooksAllowed: selectedType.maxBooks };
            await axios.post('http://localhost:5000/api/members', memberData);
            alert('Member added successfully!');
        } catch (err) {
            alert(err.response.data.error);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
            <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Phone Number"
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                margin="normal"
                required
                inputProps={{ maxLength: 10 }}
            />
            <TextField
                fullWidth
                select
                label="Membership Type"
                name="membershipType"
                value={formData.membershipType}
                onChange={handleChange}
                margin="normal"
            >
                {membershipOptions.map((option) => (
                    <MenuItem key={option.type} value={option.type}>
                        {option.type}
                    </MenuItem>
                ))}
            </TextField>
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                Submit
            </Button>
        </Box>
    );
};

export default MemberForm;
