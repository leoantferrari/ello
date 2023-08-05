package com.leoantsmith.elloml.controller.dtos;

import com.leoantsmith.elloml.model.User;

public class UserDTO {
    String lastName;
    String firstName;
    String email;
    String oAuthToken;

    public UserDTO() {

    }

    public UserDTO(User user) {
        firstName = user.getFirstName();
        lastName = user.getLastName();
        email = user.getEmail();
        oAuthToken = user.getoAuthToken();
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getoAuthToken() {
        return oAuthToken;
    }

    public void setoAuthToken(String oAuthToken) {
        this.oAuthToken = oAuthToken;
    }
}
