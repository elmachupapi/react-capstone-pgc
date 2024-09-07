import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, InputAdornment } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // Import Search icon

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                {/* Left section: Title and Search Bar */}
                <Box>
                    <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                        OVERALL <Typography variant="h3" component="span" sx={{ fontWeight: 'bold' }}>Inventory</Typography>
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                        <TextField
                            variant="outlined"
                            placeholder="Search..."
                            size="small"
                            sx={{ backgroundColor: 'white' }}  // Set background to white
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button variant="contained" color="primary">
                            Search
                        </Button>
                    </Box>
                </Box>

                {/* Right section: Avatar, Username, and Add Item Button */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar alt="Username" src="/mnt/data/image.png" /> {/* Adjust the src to the correct path */}
                        <Typography>Username</Typography>
                    </Box>
                    <Button variant="contained" color="success" sx={{ mt: 1, width: '180px'}} onClick={handleOpen}>
                        Add item
                    </Button>
                </Box>
            </Box>

            {/* Modal for Add Item */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="add-item-modal-title"
                aria-describedby="add-item-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '92%', // Adjust the width as needed
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        outline: 'none'
                    }}
                >
                    {/* Table with 9 Columns */}
                    <TableContainer component={Paper}>
                        <Table aria-label="add item table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>PO Number</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Supplier</TableCell>
                                    <TableCell>Department</TableCell>
                                    <TableCell>Item ID</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Price per Unit</TableCell>
                                    <TableCell>Total Price</TableCell>
                                    <TableCell>Expiry Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell><TextField fullWidth variant="outlined" placeholder="Enter PO no." /></TableCell>
                                    <TableCell>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label="Select Date"
                                                renderInput={(params) => <TextField {...params} fullWidth variant="outlined" />}
                                            />
                                        </LocalizationProvider>
                                    </TableCell>
                                    <TableCell><TextField fullWidth variant="outlined" placeholder="Enter Supplier" /></TableCell>
                                    <TableCell>
                                        <FormControl fullWidth variant="outlined">
                                            <InputLabel>Department</InputLabel>
                                            <Select
                                                label="Department"
                                                defaultValue="" // Adjust this to set a default value if needed
                                            >
                                                <MenuItem value="Finance">Finance</MenuItem>
                                                <MenuItem value="HR">Human Resources</MenuItem>
                                                <MenuItem value="IT">Information Technology</MenuItem>
                                                <MenuItem value="Operations">Operations</MenuItem>
                                                {/* Add more departments as needed */}
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell><TextField fullWidth variant="outlined" placeholder="Enter Item ID" /></TableCell>
                                    <TableCell><TextField fullWidth variant="outlined" placeholder="Enter Quantity" /></TableCell>
                                    <TableCell><TextField fullWidth variant="outlined" placeholder="Enter Price per Unit" /></TableCell>
                                    <TableCell><TextField fullWidth variant="outlined" placeholder="Input 8" /></TableCell>
                                    <TableCell>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label="Select Date"
                                                renderInput={(params) => <TextField {...params} fullWidth variant="outlined" />}
                                            />
                                        </LocalizationProvider>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* Buttons below the table */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, gap: 1 }}>
                        <Button variant="contained" color="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleClose}>
                            Confirm
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default Header;
