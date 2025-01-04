import React from 'react';
import OverdueBooksReport from './OverdueBooksReport';
import TopMembersReport from './TopMembersReport';
import GenrePopularityChart from './GenrePopularityChart';
import StaffActivityLog from './StaffActivityLog';

const Dashboard = () => {
    return (
        <div style={{ padding: '20px' }}>
            {/* Overdue Books Report with styling */}
            <div style={{ marginBottom: '20px', padding: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                <OverdueBooksReport />
            </div>

            {/* Top Members Report with styling */}
            <div style={{ marginBottom: '20px', padding: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                <TopMembersReport />
            </div>

            {/* Genre Popularity Chart with styling */}
            <div style={{marginBottom: '20px', padding: '50px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                <GenrePopularityChart />
            </div>

            {/* Staff Activity Log with styling */}
            <div style={{ marginBottom: '20px', padding: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                <StaffActivityLog />
            </div>
        </div>
    );
};

export default Dashboard;
