package com.leoantsmith.elloml.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "message")
public class Message extends BaseEntity{

    @ManyToOne
    @JoinColumn(name = "conversation_id")
    private Conversation conversation;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private User author;

    @Column(name = "liked")
    private Boolean liked;

    @Column(name = "message")
    private String message;

    @Column(name = "date")
    private Date date;

    public Conversation getConversation() {
        return conversation;
    }

    public void setConversation(Conversation conversation) {
        this.conversation = conversation;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public Boolean getLiked() {
        return liked;
    }

    public void setLiked(Boolean liked) {
        this.liked = liked;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
