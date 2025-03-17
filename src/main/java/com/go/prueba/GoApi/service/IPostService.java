package com.go.prueba.GoApi.service;

import com.go.prueba.GoApi.entities.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IPostService {
        Page<Post> getAllPosts(Pageable pageable);
        Post getPostById(Long id);
        List<Post> searchPosts(String query);
    }
