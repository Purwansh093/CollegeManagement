import React from 'react';
import { Button, Container, Typography } from '@mui/material';

function Home() {
  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to College Management System
      </Typography>
      <Button variant="contained" color="primary" href="/login" style={{ margin: '10px' }}>
        Login
      </Button>
      <Button variant="outlined" color="secondary" href="/register" style={{ margin: '10px' }}>
        Register
      </Button>
    </Container>
  );
}

export default Home;