import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Typography, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const removeFromCart = productId => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = typeof item.price === 'number' ? item.price : 0;
      return total + price;
    }, 0);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div>
      <Typography variant="h4" sx={{ my: 2 }}>
        Carro de compra
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="body1">Su carrito está vacío.</Typography>
      ) : (
        <>
          <List>
            {cart.map(item => (
              <React.Fragment key={item.id}>
                <ListItem
                  secondaryAction={
                    <Button onClick={() => removeFromCart(item.id)} startIcon={<DeleteIcon />} color="error">
                      Eliminar
                    </Button>
                  }
                >
                  <ListItemAvatar>
                    <Avatar src={item.image} alt={item.name} />
                  </ListItemAvatar>
                  <ListItemText primary={item.name} secondary={`$${typeof item.price === 'number' ? item.price.toFixed(2) : 'Price not available'}`} />
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))}
          </List>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Total: ${calculateTotal().toFixed(2)}
          </Typography>

          <Button variant="contained" onClick={handleCheckout} sx={{ mt: 2 }}>
            Pasar por la caja
          </Button>
        </>
      )}
    </div>
  );
}

export default Cart;
