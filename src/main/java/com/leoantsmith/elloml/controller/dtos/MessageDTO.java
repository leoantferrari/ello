package com.leoantsmith.elloml.controller.dtos;

import com.leoantsmith.elloml.model.Message;

public class MessageDTO {

    long id;
    String urlEnding;

    String message;

    UserDTO author;

    boolean liked;

    public MessageDTO() {

    }

    public MessageDTO(Message message) {
        this.id = message.getId();
        this.message = message.getMessage();
        this.author = new UserDTO(message.getAuthor());
        this.urlEnding = message.getConversation().getUrlEnding();
        this.liked = message.getLiked();
    }

    public boolean isLiked() {
        return liked;
    }

    public void setLiked(boolean liked) {
        this.liked = liked;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUrlEnding() {
        return urlEnding;
    }

    public void setUrlEnding(String urlEnding) {
        this.urlEnding = urlEnding;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public UserDTO getAuthor() {
        return author;
    }

    public void setAuthor(UserDTO author) {
        this.author = author;
    }
}