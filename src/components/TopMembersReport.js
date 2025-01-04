import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import axios from 'axios';

const TopMembersReport = () => {
    const [topMembers, setTopMembers] = useState([]);

    useEffect(() => {
        const fetchTopMembers = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/reports/top-members');
                setTopMembers(res.data);
            } catch (err) {
                console.error('Error fetching top members:', err);
            }
        };
        fetchTopMembers();
    }, []);

    return (
        <TableContainer component={Paper} sx={{ marginTop: 4 }}>
            <Typography variant="h6" sx={{ padding: 2 }}>Top Members Report</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Rank</TableCell>
                        <TableCell>Member Name</TableCell>
                        <TableCell>Books Borrowed</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {topMembers.map((row, index) => (
                        <TableRow key={row.memberId}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{row.memberName}</TableCell>
                            <TableCell>{row.booksBorrowed}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TopMembersReport;
