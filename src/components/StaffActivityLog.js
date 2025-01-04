import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import axios from 'axios';

const StaffActivityLog = () => {
    const [activityLog, setActivityLog] = useState([]);

    useEffect(() => {
        const fetchActivityLog = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/logs/staff-activity');
                setActivityLog(res.data);
            } catch (err) {
                console.error('Error fetching activity log:', err);
            }
        };
        fetchActivityLog();
    }, []);

    return (
        <TableContainer component={Paper} sx={{ marginTop: 4 }}>
            <Typography variant="h6" sx={{ padding: 2 }}>Staff Activity Log</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Staff Name</TableCell>
                        <TableCell>Action</TableCell>
                        <TableCell>Timestamp</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {activityLog.map((log) => (
                        <TableRow key={log.id}>
                            <TableCell>{log.staffName}</TableCell>
                            <TableCell>{log.action}</TableCell>
                            <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default StaffActivityLog;
