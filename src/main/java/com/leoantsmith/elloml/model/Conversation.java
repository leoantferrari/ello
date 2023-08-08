package com.leoantsmith.elloml.model;

import com.fasterxml.jackson.databind.ser.Serializers;

import javax.persistence.*;

@Entity
@Table(name = "conversation")
public class Conversation extends BaseEntity {

    @Column(name = "url_ending")
    private String urlEnding;

    @Column(name = "title")
    private String title;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;

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

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }
}
