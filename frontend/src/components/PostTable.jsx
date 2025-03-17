import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, Typography, IconButton } from '@mui/material';
import { FirstPage, LastPage, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

const PostTable = ({ posts, page, rowsPerPage, totalPosts, onPageChange, onRowsPerPageChange }) => {

  const navigate = useNavigate();

  const handleInicioClick = () => {
    navigate('/'); // Navega de regreso a la ruta principal
    onPageChange(0); // Reinicia a la primera página
    onRowsPerPageChange(10); // Restablece el número de filas por página
  };

  if (!posts || posts.length === 0) {
    return <Typography variant="body1" sx={{ textAlign: 'center', mt: 4 }}>No hay publicaciones disponibles.</Typography>;
  }

  return (
    <Paper sx={{ boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
      <TableContainer>
        <Table aria-label="Tabla de publicaciones">
          <TableHead sx={{ bgcolor: 'primary.main' }}>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Autor</TableCell>
              <TableCell sx={{ color: 'white' }}>Contenido</TableCell>
              <TableCell sx={{ color: 'white' }}>Fecha</TableCell>
              <TableCell sx={{ color: 'white' }}>Likes</TableCell>
              <TableCell sx={{ color: 'white' }}>Comentarios</TableCell>
              <TableCell sx={{ color: 'white' }}>Compartidos</TableCell>
              <TableCell sx={{ color: 'white' }}>Ubicación</TableCell>
              <TableCell sx={{ color: 'white' }}>Sentimiento</TableCell>
              <TableCell sx={{ color: 'white' }}>Menciones</TableCell>
              <TableCell sx={{ color: 'white' }}>Media</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id} hover onClick={() => navigate(`/post/${post.id}`)} sx={{ cursor: 'pointer' }}>
                <TableCell>{post.username || 'N/A'}</TableCell>
                <TableCell>{post.text || 'N/A'}</TableCell>
                <TableCell>{post.date ? formatDate(post.date) : 'N/A'}</TableCell>
                <TableCell>{post.likes || '0'}</TableCell>
                <TableCell>{post.comments || '0'}</TableCell>
                <TableCell>{post.shares || '0'}</TableCell>
                <TableCell>{post.location || 'N/A'}</TableCell>
                <TableCell>{post.sentiment || 'N/A'}</TableCell>
                <TableCell>{post.mentions || 'N/A'}</TableCell>
                <TableCell>
                  {post.media ? (
                    <a href={post.media} target="_blank" rel="noopener noreferrer">Ver media</a>
                  ) : (
                    'N/A'
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalPosts}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(e, newPage) => onPageChange(newPage)}
        onRowsPerPageChange={(e) => {
          onRowsPerPageChange(parseInt(e.target.value, 10));
          onPageChange(0);
        }}
        ActionsComponent={() => (
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 16px' }}>
            <IconButton onClick={() => onPageChange(0)} disabled={page === 0}>
              <FirstPage />
            </IconButton>
            <IconButton onClick={() => onPageChange(page - 1)} disabled={page === 0}>
              <KeyboardArrowLeft />
            </IconButton>
            <Typography variant="body2">Página {page + 1} de {Math.ceil(totalPosts / rowsPerPage)}</Typography>
            <IconButton onClick={() => onPageChange(page + 1)} disabled={page >= Math.ceil(totalPosts / rowsPerPage) - 1}>
              <KeyboardArrowRight />
            </IconButton>
            <IconButton onClick={() => onPageChange(Math.ceil(totalPosts / rowsPerPage) - 1)} disabled={page >= Math.ceil(totalPosts / rowsPerPage) - 1}>
              <LastPage />
            </IconButton>
          </div>
        )}
        sx={{ borderTop: '1px solid rgba(224, 224, 224, 1)' }}
      />
    </Paper>
  );
};

export default PostTable;