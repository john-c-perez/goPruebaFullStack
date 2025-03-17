package com.go.prueba.GoApi.entities;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;
import java.sql.Timestamp;
@Data
@Entity
@Table(name = "posts")
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "audiencia")
    @JsonProperty("audiencia")
    private Integer audiencia;

    @JsonProperty("ciudad")
    private String ciudad;

    @JsonProperty("comments")
    private Integer comments;

    @Column(name = "content_type")
    @JsonProperty("contentType")  // camelCase en JSON
    private String contentType;

    @Column(name = "created_at")
    @JsonProperty("createdAt")  // camelCase en JSON
    private Timestamp createdAt;

    @JsonProperty("date")
    private Timestamp date;

    @JsonProperty("edad")
    private Integer edad;

    @JsonProperty("gen")
    private String gen;

    @JsonProperty("interaccion")
    private Integer interaccion;

    @Column(name = "is_reply")
    @JsonProperty("isReply")  // camelCase en JSON
    private Boolean isReply;

    @Column(name = "is_rt")
    @JsonProperty("isRt")  // camelCase en JSON
    private Boolean isRt;

    @JsonProperty("lat")
    private Double lat;

    @JsonProperty("likes")
    private Integer likes;

    @JsonProperty("link")
    private String link;

    @JsonProperty("location")
    private String location;

    @JsonProperty("lon")
    private Double lon;

    @JsonProperty("name")
    private String name;

    @Column(name = "page_id")
    @JsonProperty("pageId")  // camelCase en JSON
    private Long pageId;

    @Column(name = "reply_to_id")
    @JsonProperty("replyToId")  // camelCase en JSON
    private Long replyToId;

    @JsonProperty("pais")
    private String pais;

    @JsonProperty("reactions")
    private Integer reactions;

    @JsonProperty("red")
    private Integer red;

    @JsonProperty("sector")
    private String sector;

    @JsonProperty("sentiment")
    private Integer sentiment;

    @JsonProperty("shares")
    private Integer shares;

    @Column(name = "text", columnDefinition = "TEXT")
    @JsonProperty("text")
    private String text;

    @JsonProperty("type")
    private String type;

    @Column(name = "user_desc")
    @JsonProperty("userDesc")  // camelCase en JSON
    private String userDesc;

    @Column(name = "user_id")
    @JsonProperty("userId")  // camelCase en JSON
    private Long userId;

    @JsonProperty("username")
    private String username;

    @JsonProperty("hashtags")
    private String hashtags;

    @JsonProperty("mentions")
    private String mentions;

    @JsonProperty("media")
    private String media;

    @Column(name = "concepts", columnDefinition = "TEXT")
    @JsonProperty("concepts")
    private String concepts;

    @JsonProperty("followers")
    private Integer followers;

    @JsonProperty("friends")
    private Integer friends;

    @JsonProperty("status")
    private String status;

    @JsonProperty("ranking")
    private Integer ranking;

    @JsonProperty("lang")
    private String lang;

    @JsonProperty("views")
    private Integer views;

    @Column(name = "verbs", columnDefinition = "TEXT")
    @JsonProperty("verbs")
    private String verbs;

    @JsonProperty("emojis")
    private String emojis;

    @JsonProperty("obj_detect")
    private String objDetect;

    @Column(name = "sent_prob", columnDefinition = "JSONB")
    @JsonProperty("sentProb")  // camelCase en JSON
    private String sentProb;
}
