package com.leoantsmith.elloml.controller.dtos;

import com.leoantsmith.elloml.model.Conversation;

public class ConversationDTO {

    long id;
    String urlEnding;
    String title;
    UserDTO owner;

    public ConversationDTO() {

    }

    public ConversationDTO(Conversation conversation) {
        this.id = conversation.getId();
        this.urlEnding = conversation.getUrlEnding();
        this.title = conversation.getTitle();
        this.owner = new UserDTO(conversation.getOwner());
    }

    public String getUrlEnding() {
        return urlEnding;
    }

    public void setUrlEnding(String urlEnding) {
        this.urlEnding = urlEnding;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public UserDTO getOwner() {
        return owner;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setOwner(UserDTO owner) {
        this.owner = owner;
    }
}
