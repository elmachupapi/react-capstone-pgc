import React, { useState } from 'react';
import { Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Paper, Button, Box, TablePagination, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';


const InventoryTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  // Mock data for table rows, you can replace this with actual data
  const rows = [
    { id: 1, itemNumber: '001', poNumber: 'PO1234', date: '2024-09-06', supplier: 'Supplier A', department: 'IT', itemId: 'IT-001', quantity: 10, pricePerUnit: 50, total: 500, expiryDate: '2024-12-01' },
    { id: 2, itemNumber: '002', poNumber: 'PO5678', date: '2024-09-07', supplier: 'Supplier B', department: 'HR', itemId: 'HR-002', quantity: 20, pricePerUnit: 25, total: 500, expiryDate: '2024-12-15' },
    // Add more mock rows as needed
  ];

  // Pagination handling functions
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenModal = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const handleConfirm = () => {
    // Handle confirm action
    console.log('Confirmed', selectedRow);
    handleCloseModal();
  };

  return (
    <Box sx={{ marginTop: '30px' }}>
      {/* Table with data */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="inventory table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#464646' }}>
              <TableCell></TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#fff'}}>Item Number</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#fff'}}>PO Number</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#fff'}}>Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#fff'}}>Supplier</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#fff'}}>Department</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#fff'}}>Item ID/Item Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#fff'}}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#fff'}}>Price per Unit</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#fff'}}>Total</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#fff'}}>Expiry Date</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // handle pagination
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell sx={{ borderRight: '1px solid #ddd', width: '30px', maxWidth: '30px'}}>
                    <Button variant="text" color="primary" size="medium" sx={{ padding: '1px 2px'}} onClick={() => handleOpenModal(row)}>Edit</Button>
                  </TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ddd'}}>{row.itemNumber}</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ddd'}}>{row.poNumber}</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ddd'}}>{row.date}</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ddd'}}>{row.supplier}</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ddd'}}>{row.department}</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ddd'}}>{row.itemId}</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ddd'}}>{row.quantity}</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ddd'}}>{row.pricePerUnit}</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ddd'}}>{row.total}</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ddd'}}>{row.expiryDate}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Optional: Pagination at the bottom as well (if you want both top and bottom) */}
      <Box sx={{ marginTop: '10px' }}>
        <TablePagination
          component="div"
          count={rows.length} // total number of rows
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="edit-item-modal"
        aria-describedby="modal-for-editing-item"
      >
        <Box sx={{ position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '92%', // Adjust the width as needed
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        outline: 'none'}}>
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            Edit Item
            <IconButton
              aria-label="close"
              onClick={handleCloseModal}
              sx={{ position: 'absolute', top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </Typography>
          {/* Your modal content */}
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
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button variant="outlined" color="primary" onClick={handleCloseModal} sx={{ mr: 1 }}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleConfirm}>
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default InventoryTable;
