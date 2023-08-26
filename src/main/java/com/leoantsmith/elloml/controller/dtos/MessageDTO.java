package com.leoantsmith.elloml.controller.dtos;

import com.leoantsmith.elloml.model.Message;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class MessageDTO {

    public static final SimpleDateFormat dateFormat = new SimpleDateFormat("dd MMM HH:mm", Locale.ENGLISH);

    long id;
    String urlEnding;

    String message;

    UserDTO author;

    boolean liked;

    String date;

    public MessageDTO() {

    }

    public MessageDTO(Message message) {
        this.id = message.getId();
        this.message = message.getMessage();
        this.author = new UserDTO(message.getAuthor());
        this.urlEnding = message.getConversation().getUrlEnding();
        this.liked = message.getLiked();
        this.date = "";
        if (message.getDate()!=null) {
            this.date = dateFormat.format(message.getDate());
        }
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}