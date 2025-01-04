import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PieController } from 'chart.js';

// Register necessary components for the pie chart
Chart.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PieController);

const GenrePopularityChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            const chartInstance = new Chart(ctx, {
                type: 'pie', // Pie chart type
                data: {
                    labels: ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography', 'Manga', 'Education', 'Fantasy', 'History', 'Self-Help', 'Romance'], // Expanded genre list
                    datasets: [
                        {
                            label: 'Books Borrowed by Genre',
                            data: [30, 20, 25, 15, 50, 10, 40, 35, 60, 45], // More data points for each genre
                            backgroundColor: [
                                '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#3cc35e', '#c738b9', // Colors for each genre
                                '#f56a79', '#7a9be5', '#c9e247', '#e5a57c'
                            ],
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false, // Allows custom sizing
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            enabled: true,
                        },
                    },
                },
            });

            // Cleanup to avoid "Canvas is already in use" error
            return () => chartInstance.destroy();
        }
    }, []);

    return (
        <div style={{ width: '400px', height: '420px', margin: '0 auto' }}>
            <h3 style={{ textAlign: 'center' }}>Genre Popularity</h3>
            <canvas ref={chartRef} />
        </div>
    );
};

export default GenrePopularityChart;
