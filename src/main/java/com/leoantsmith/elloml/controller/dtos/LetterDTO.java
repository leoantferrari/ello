package com.leoantsmith.elloml.controller.dtos;

import com.leoantsmith.elloml.model.Letter;

public class LetterDTO {

    long id;
    String title;
    String message;

    String urlEnding;

    UserDTO owner;

    public LetterDTO() {

    }

    public LetterDTO(Letter letter) {
        this.id = letter.getId();
        this.title = letter.getTitle();
        this.message = letter.getMessage();
        this.owner = new UserDTO(letter.getOwner());
        this.urlEnding = letter.getUrlEnding();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public UserDTO getOwner() {
        return owner;
    }

    public void setOwner(UserDTO owner) {
        this.owner = owner;
    }

    public String getUrlEnding() {
        return urlEnding;
    }

    public void setUrlEnding(String urlEnding) {
        this.urlEnding = urlEnding;
    }
}
