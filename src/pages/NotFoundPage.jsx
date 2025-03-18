import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Redirect to the homepage or change the path as needed
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h2" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        ¡Ups! La página que buscas no existe.
      </Typography>
      <Typography variant="body1" paragraph>
        Parece que la página a la que intentas acceder no está disponible o la URL es incorrecta.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" size="large" onClick={handleGoHome}>
          Ir a casa
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
