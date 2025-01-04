import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Library Management
                </Typography>
                <Button color="inherit" component={Link} to="/books">Books</Button>
                <Button color="inherit" component={Link} to="/members">Members</Button>
                <Button color="inherit" component={Link} to="/transactions">Transactions</Button>
                <Button color="inherit" component={Link} to="/staff">Staff</Button>
                <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
