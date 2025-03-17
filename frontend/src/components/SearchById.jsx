import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getPostById } from '../services/api';
import { Link, useLocation } from 'react-router-dom';

const SearchById = ({ onSearchById }) => {
  const [id, setId] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (id) {
      try {
        const post = await getPostById(id);
        onSearchById(post); // Actualiza el estado en App.js
        navigate(`/post/${id}`); // Redirige a la ruta del post
      } catch (error) {
        console.error('Error fetching post by ID:', error);
        alert('Post no encontrado'); // Manejo de errores
      }
    }
  };
const showHomeButton = location.pathname === '/search' || location.pathname.includes('/post/');
  return (
    <Box sx={{ mb: 3 }}>
      <TextField
        label="Buscar por ID"
        variant="outlined"
        value={id}
        onChange={(e) => setId(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button variant="contained" onClick={handleSearch}>
        Buscar
      </Button>

      {showHomeButton && (
              <Button
                variant="contained"
                component={Link}
                to="/"
                sx={{ ml: 2 }}
              >
                Inicio
              </Button>
            )}
    </Box>
  );
};

export default SearchById;