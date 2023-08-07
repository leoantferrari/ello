package com.leoantsmith.elloml.model;

import javax.persistence.*;

@Entity
@Table(name = "letter")
public class Letter extends BaseEntity {
    @Column(name = "title")
    private String title;

    @Column(name = "url_ending")
    private String urlEnding;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;

    @Column(name = "message")
    private String message;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrlEnding() {
        return urlEnding;
    }

    public void setUrlEnding(String urlEnding) {
        this.urlEnding = urlEnding;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
