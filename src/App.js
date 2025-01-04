import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookForm from './components/Books/BookForm';
import BookList from './components/Books/BookList';
import Navbar from './components/Navbar';
import MemberForm from './components/Members/MemberForm';
import TransactionForm from './components/Transactions/TransactionForm';
import Dashboard from './components/Dashboard';

const App= () => {
    return (
        < Router>
            <Navbar />
            <Routes>
                <Route path="/books" element={<BookList />} />
                <Route path="/books/new" element={<BookForm />} />
                <Route path="/members" element={<MemberForm />} />
                <Route path="/transactions" element={<TransactionForm />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* Add routes for Members, Transactions, Staff */}
            </Routes>
        </Router>
    );
};

export default App;
