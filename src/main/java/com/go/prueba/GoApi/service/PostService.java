package com.go.prueba.GoApi.service;

import com.go.prueba.GoApi.entities.Post;
import com.go.prueba.GoApi.persistence.PostRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService implements IPostService {
    @Autowired
    private PostRepository postRepository;

    @Override
    public Page<Post> getAllPosts(Pageable pageable) {
        return postRepository.findAll(pageable);
    }

    @Override
    public Post getPostById(Long id) {
        return postRepository.findById(id).orElseThrow(() -> new RuntimeException("Post no encontrado"));
    }

    @Override
    public List<Post> searchPosts(String query) {
        return postRepository.findByTextContainingIgnoreCase(query);
    }
}
