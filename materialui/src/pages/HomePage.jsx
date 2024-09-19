import React from 'react';
import { Box, Typography } from '@mui/material';
import '../css/HomePage.css'; // Custom CSS for the homepage

const Homepage = () => {
  return (
    <Box className="homepage-container">
      {/* Content box to overlay the background */}
      <Box className="content-box">
        <img
          src={require('../components/PGC logo.png')} // Add the relative path to your logo
          alt="Cavite Logo"
          className="cavite-logo"
        />
        <Typography variant="h4" className="homepage-title">
          Welcome to the Provincial Government of Cavite Inventory Asset Management System
        </Typography>
        <Typography variant="body1" className="homepage-text">
          Our portal offers a centralized database of establishments and inventory items, ensuring transparency and accessibility. 
          Users can easily access information on the essential supplies and equipment across provincial departments.
        </Typography>
        <Typography variant="body1" className="homepage-text">
          To ensure accuracy, please use correct spelling when searching for establishment names, product names, and other details. 
          This helps maintain the integrity of the database and ensures reliable information.
        </Typography>
        <Typography variant="body1" className="homepage-text">
          Together, let's promote transparency and accountability in inventory management within PGC to ensure the availability 
          of safe and quality commodities for Cavite residents.
        </Typography>
      </Box>
    </Box>
  );
}

export default Homepage;
