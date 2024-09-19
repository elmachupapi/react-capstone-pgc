import React, { useState } from "react";
import { Box, Button, Container, Grid, TextField, Typography, MenuItem, FormControl, InputLabel, Select } from "@mui/material";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    department: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Container maxWidth="md">
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              p: 4,
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "white"
            }}
          >
            <Typography variant="h4" textAlign="center" gutterBottom>
              SIGN UP
            </Typography>

            <TextField
              label="Username"
              name="username"
              variant="outlined"
              value={formData.username}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              variant="outlined"
              value={formData.confirmPassword}
              onChange={handleChange}
              fullWidth
              required
            />

            <FormControl fullWidth required>
              <InputLabel>Department</InputLabel>
              <Select
                label="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="supplies">Supplies</MenuItem>
                <MenuItem value="properties">Properties</MenuItem>
              </Select>
            </FormControl>

            <Button variant="contained" type="submit" color="primary" fullWidth>
              Register
            </Button>

            <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
              Already have an account? <a href="/login">Log in</a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpPage;
