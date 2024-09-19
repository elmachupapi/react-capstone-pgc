import React, { useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Collapse } from '@mui/material';
import Home from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import BuildIcon from '@mui/icons-material/Build';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TableChartIcon from '@mui/icons-material/TableChart';
import ModeIcon from '@mui/icons-material/Mode';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LogoutIcon from '@mui/icons-material/Logout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess'; // For ExpandLessIcon
import logo from './../../src/components/PGC logo.png';

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null); // Use a single state variable for open section

  const handleClick = (section) => {
    setOpenSection(openSection === section ? null : section); // Toggle the section
  };
  return (
    <Box 
      bgcolor="#890000" 
      width="200px" 
      p={2} 
      color="white" 
      display="flex" 
      flexDirection="column" 
      justifyContent="space-between"
      height="100vh"
    >
      {/* Top section with text and image */}
      <Box>
        <Box display="flex" alignItems="center" mb={3}>
          <img src={logo} alt="pgc logo" width={65} height={65} style={{ marginRight: '10px' }} />
          <Typography sx={{ fontSize: '18px', fontWeight: 'bold', lineHeight: 1.2 }}>
            GOVERNMENT OF CAVITE<br />INVENTORY
          </Typography>
        </Box>

        {/* Sidebar list */}
        <List>
          <ListItem disablePadding sx={{ mb: 3 }}>
            <ListItemButton component={Link} to="/" sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: '50px' }}>
                <Home style={{ color: 'white', fontSize: '30px' }} />
              </ListItemIcon>
              <ListItemText primary="Home" primaryTypographyProps={{ fontSize: '21px' }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton component="a" href="#item-config" sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: '50px' }}>
                <BuildIcon style={{ color: 'white', fontSize: '30px' }} />
              </ListItemIcon>
              <ListItemText primary="Item Configuration" primaryTypographyProps={{ fontSize: '18px' }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton component="a" href="#item-tracker" sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: '50px' }}>
                <LocationOnIcon style={{ color: 'white', fontSize: '30px' }} />
              </ListItemIcon>
              <ListItemText primary="Item Tracker" primaryTypographyProps={{ fontSize: '18px' }} /> 
            </ListItemButton>
          </ListItem>
        
          <List>
        {/* Overall Section */}
        <ListItem button onClick={() => handleClick('overall')} sx={{ pl: 0 }}>
                    <ListItemIcon sx={{ minWidth: '50px' }}>
            <TableChartIcon style={{ color: 'white', fontSize: '30px' }} />
          </ListItemIcon>
          <ListItemText primary="Overall" primaryTypographyProps={{ fontSize: '18px' }} />
          <ListItemIcon sx={{ minWidth: '25px', color: 'white' }}>
          {openSection === 'overall' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItemIcon>
        </ListItem>

        <Collapse in={openSection === 'overall'} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
            <ListItem button component={Link} to="/inventory" sx={{ color: 'white' }}>
              <ListItemText primary="All" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="PPE's" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Expendables" />
            </ListItem>
          </List>
        </Collapse>

        {/* Supplies Section */}
        <ListItem button onClick={() => handleClick('supplies')} sx={{ pl: 0 }}>
          <ListItemIcon sx={{ minWidth: '50px' }}>
            <ModeIcon style={{ color: 'white', fontSize: '30px' }} />
          </ListItemIcon>
          <ListItemText primary="Supplies" primaryTypographyProps={{ fontSize: '18px' }} />
          <ListItemIcon sx={{ minWidth: '25px', color: 'white' }}>
            {openSection === 'supplies' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemIcon>
        </ListItem>

        <Collapse in={openSection === 'supplies'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemText primary="All" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Semi Expendable PPE's" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Expendebles" />
            </ListItem>
          </List>
        </Collapse>
      </List>

          {/* Properties Section */}
        <ListItem button onClick={() => handleClick('properties')} sx={{ pl: 0 }}>
          <ListItemIcon sx={{ minWidth: '50px' }}>
            <ApartmentIcon style={{ color: 'white', fontSize: '30px' }} />
          </ListItemIcon>
          <ListItemText primary="Properties" primaryTypographyProps={{ fontSize: '18px' }} />
          <ListItemIcon sx={{ minWidth: '25px', color: 'white' }}>
            {openSection === 'properties' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemIcon>
        </ListItem>

        <Collapse in={openSection === 'properties'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemText primary="All" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="PPE's" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Expendebles" />
            </ListItem>
          </List>
        </Collapse>
        </List>
      </Box>

      {/* Bottom section with log out */}
      <Box sx={{ position: 'absolute', bottom: '20px', width: '13%' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#logout" sx={{ pl: 0, mb:-1 ,width: '100%' }}>
              <ListItemIcon sx={{ minWidth: '50px' }}>
                <LogoutIcon style={{ color: 'white', fontSize: '30px' }} />
              </ListItemIcon>
              <ListItemText primary="Log Out" primaryTypographyProps={{ fontSize: '18px' }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
