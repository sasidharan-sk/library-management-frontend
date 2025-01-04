import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import axios from 'axios';

const OverdueBooksReport = () => {
    const [overdueBooks, setOverdueBooks] = useState([]);

    useEffect(() => {
        const fetchOverdueBooks = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/reports/overdue-books');
                setOverdueBooks(res.data);
            } catch (err) {
                console.error('Error fetching overdue books:', err);
            }
        };
        fetchOverdueBooks();
    }, []);

    return (
        <TableContainer component={Paper} sx={{ marginTop: 4 }}>
            <Typography variant="h6" sx={{ padding: 2 }}>Overdue Books Report</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Transaction ID</TableCell>
                        <TableCell>Member Name</TableCell>
                        <TableCell>Book Title</TableCell>
                        <TableCell>Return Date</TableCell>
                        <TableCell>Days Overdue</TableCell>
                        <TableCell>Fine Amount ($)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {overdueBooks.map((row) => (
                        <TableRow key={row.transactionId}>
                            <TableCell>{row.transactionId}</TableCell>
                            <TableCell>{row.memberName}</TableCell>
                            <TableCell>{row.bookTitle}</TableCell>
                            <TableCell>{row.returnDate}</TableCell>
                            <TableCell>{row.daysOverdue}</TableCell>
                            <TableCell>{row.fineAmount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default OverdueBooksReport;
