import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Home from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TableChartIcon from '@mui/icons-material/TableChart';
import ModeIcon from '@mui/icons-material/Mode';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LogoutIcon from '@mui/icons-material/Logout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from './../../src/components/PGC logo.png'; // relative path to image

const Sidebar = () => {
  return (
    <Box 
      bgcolor="#890000" 
      width="200px" 
      p={2} 
      color="white" 
      display="flex" 
      flexDirection="column" 
      justifyContent="space-between"
      height="100vh"  // Ensure the sidebar stretches to the full height of the viewport
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
          <ListItem disablePadding sx={{ mb: 4 }}>
            <ListItemButton component="a" href="#home" sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: '50px' }}>
                <Home style={{ color: 'white', fontSize: '30px' }} />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                primaryTypographyProps={{ fontSize: '21px' }} 
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 2 }}>
            <ListItemButton component="a" href="#item-config" sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: '50px' }}>
                <BuildIcon style={{ color: 'white', fontSize: '30px' }} />
              </ListItemIcon>
              <ListItemText
                primary="Item Configuration"
                primaryTypographyProps={{ fontSize: '18px' }} 
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 2 }}>
            <ListItemButton component="a" href="#item-tracker" sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: '50px' }}>
                <LocationOnIcon style={{ color: 'white', fontSize: '30px' }} />
              </ListItemIcon>
              <ListItemText
                primary="Item Tracker"
                primaryTypographyProps={{ fontSize: '18px' }} 
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 2 }}>
            <ListItemButton component="a" href="#overall" sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: '50px' }}>
                <TableChartIcon style={{ color: 'white', fontSize: '30px' }} />
              </ListItemIcon>
              <ListItemText
                primary="Overall"
                primaryTypographyProps={{ fontSize: '18px' }}
              />
              <ExpandMoreIcon style={{ color: 'white' }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 2 }}>
            <ListItemButton component="a" href="#supplies" sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: '50px' }}>
                <ModeIcon style={{ color: 'white', fontSize: '30px' }} />
              </ListItemIcon>
              <ListItemText
                primary="Supplies"
                primaryTypographyProps={{ fontSize: '18px' }}
              />
              <ExpandMoreIcon style={{ color: 'white' }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 2 }}>
            <ListItemButton component="a" href="#properties" sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: '50px' }}>
                <ApartmentIcon style={{ color: 'white', fontSize: '30px' }} />
              </ListItemIcon>
              <ListItemText
                primary="Properties"
                primaryTypographyProps={{ fontSize: '18px' }}
              />
              <ExpandMoreIcon style={{ color: 'white' }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      {/* Bottom section with log out */}
      <Box
        sx={{ position: 'absolute', bottom: '20px', width: '13%' }} // Absolute positioning
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#logout" sx={{ pl: 0, width: '100%' }}>
              <ListItemIcon sx={{ minWidth: '50px' }}>
                <LogoutIcon style={{ color: 'white', fontSize: '30px' }} />
              </ListItemIcon>
              <ListItemText
                primary="Log Out"
                primaryTypographyProps={{ fontSize: '18px' }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
