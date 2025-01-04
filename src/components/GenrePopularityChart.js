import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const GenrePopularityChart = () => {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/reports/genre-popularity');
                const genres = res.data.map((genre) => genre.genre);
                const counts = res.data.map((genre) => genre.count);

                setChartData({
                    labels: genres,
                    datasets: [
                        {
                            label: 'Books Borrowed by Genre',
                            data: counts,
                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                        },
                    ],
                });
            } catch (err) {
                console.error('Error fetching chart data:', err);
            }
        };
        fetchChartData();
    }, []);

    return (
        <div>
            <h3>Genre Popularity</h3>
            <Pie data={chartData} />
        </div>
    );
};

export default GenrePopularityChart;
