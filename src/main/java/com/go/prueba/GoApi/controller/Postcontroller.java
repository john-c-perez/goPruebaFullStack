package com.go.prueba.GoApi.controller;

import com.go.prueba.GoApi.entities.Post;
import com.go.prueba.GoApi.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/posts")
public class Postcontroller {
    @Autowired
    private PostService postService;

    // Endpoint: GET /api/posts
    @GetMapping
    public ResponseEntity<Page<Post>> getAllPosts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable = PageRequest.of(page, size);
        Page<Post> posts = postService.getAllPosts(pageable);
        return ResponseEntity.ok(posts);
    }

    // Endpoint: GET /api/posts/{id}
    @GetMapping("/{id}")
    public Post getPostById(@PathVariable Long id) {
        return postService.getPostById(id);
    }

    // Endpoint: GET /api/posts/search?q={query}
    @GetMapping("/search")
    public List<Post> searchPosts(@RequestParam String q) {
        return postService.searchPosts(q);
    }

}