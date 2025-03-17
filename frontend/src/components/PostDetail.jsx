import React from 'react';
import { Card, CardContent, Typography, Chip, Grid, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../services/api';

const PostDetail = ({ post }) => {
  const { id } = useParams();
  const [fetchedPost, setFetchedPost] = useState(post);

  useEffect(() => {
    if (!post) {
      getPostById(id).then(setFetchedPost).catch(() => setFetchedPost(null));
    }
  }, [id, post]);

  if (!fetchedPost) {
    return <Typography variant="h6" align="center" sx={{ mt: 4 }}>No se encontró la publicación.</Typography>;
  }

  return (
    <Card sx={{ maxWidth: 800, margin: '2rem auto', boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5">{fetchedPost.username ?? 'N/A'}</Typography>
        <Typography variant="body1">{fetchedPost.text ?? 'N/A'}</Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body2">Ubicación: {fetchedPost.location ?? 'Desconocida'}</Typography>
        <Typography variant="body2">Sentimiento: {fetchedPost.sentiment ?? 'No disponible'}</Typography>
        <Typography variant="body2">Menciones: {fetchedPost.mentions ?? 'Ninguna'}</Typography>

        {fetchedPost.media && (
          <img src={fetchedPost.media} alt="Multimedia" style={{ width: '100%', marginTop: '1rem', borderRadius: '8px' }} />
        )}

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Fecha: {fetchedPost.date ? new Date(fetchedPost.date).toLocaleString() : 'N/A'}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
            <Chip label={`Likes: ${fetchedPost.likes ?? 0}`} color="primary" variant="outlined" sx={{ mr: 1 }} />
            <Chip label={`Comentarios: ${fetchedPost.comments ?? 0}`} color="secondary" variant="outlined" sx={{ mr: 1 }} />
            <Chip label={`Compartidos: ${fetchedPost.shares ?? 0}`} color="success" variant="outlined" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PostDetail;

