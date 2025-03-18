import React from 'react';
import { Typography, Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function OrderSuccess() {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <CheckCircleOutlineIcon sx={{ fontSize: 100, color: 'green' }} />

      <Typography variant="h4" gutterBottom>
        Orden exitoso!
      </Typography>

      <Typography variant="body1">Gracias por su compra. Su pedido está siendo procesado.</Typography>
    </Box>
  );
}

export default OrderSuccess;
