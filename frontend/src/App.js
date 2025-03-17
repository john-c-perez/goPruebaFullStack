import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { Container, CssBaseline, CircularProgress } from '@mui/material';
import PostTable from './components/PostTable';
import PostDetail from './components/PostDetail';
import SearchBar from './components/SearchBar';
import SearchById from './components/SearchById';
import { getPosts, searchPosts, getPostById } from './services/api';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalPosts, setTotalPosts] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
 const handleSearch = (query) => {
    setSearchQuery(query); // Llama a fetchData con la query de búsqueda

  };
  const fetchData = async (page = 0, size = 10, query = '') => {
    try {
      setLoading(true);

      // Realiza la búsqueda o la obtención de los posts
      const response = query
        ? await searchPosts(query, page, size)  // Si hay una búsqueda, llamamos a `searchPosts`
        : await getPosts(page, size);            // Si no, obtenemos los posts sin filtrar

      // Imprime la respuesta completa para ver la estructura
      console.log('Respuesta completa de la API:', response);

      // Asegúrate de que los datos estén disponibles
      if (response && Array.isArray(response)) {
        // Actualiza los posts con el arreglo de la respuesta
        setPosts(response);

        // Si no tienes un campo `totalElements`, podrías usar la longitud del arreglo como total
        setTotalPosts(response.length);
      } else {
        setPosts(response.content);
        setTotalPosts(response.totalElements);
      }

    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page, rowsPerPage, searchQuery);
  }, [page, rowsPerPage, searchQuery]);

  const handleSearchById = async (id) => {
    setLoading(true);
    try {
      const post = await getPostById(id);
      setSelectedPost(post);
    } catch (error) {
      console.error('Error fetching post by ID:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <SearchBar onSearch={handleSearch} />
        <SearchById onSearchById={handleSearchById} />

        {loading ? (
          <CircularProgress sx={{ display: 'block', margin: '2rem auto' }} />
        ) : (
          <Routes>
            <Route
              path="/"
              element={

                <PostTable
                  posts={posts}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  totalPosts={totalPosts}
                  onPageChange={setPage}
                  onRowsPerPageChange={setRowsPerPage}
                />
              }

            />
            <Route
              path="/post/:id"
              element={<PostDetailWrapper selectedPost={selectedPost} />}
            />

          </Routes>
        )}
      </Container>
    </Router>
  );
}

// Componente auxiliar para manejar la carga del post en PostDetail
const PostDetailWrapper = ({ selectedPost }) => {
  const { id } = useParams();

  // Si selectedPost no está definido, intenta cargar el post por su ID
  if (!selectedPost || selectedPost.id !== parseInt(id)) {
    return <PostDetail postId={id} />;
  }

  return <PostDetail post={selectedPost} />;
};

export default App;