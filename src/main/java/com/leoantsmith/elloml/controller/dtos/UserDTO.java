package com.leoantsmith.elloml.controller.dtos;

import com.leoantsmith.elloml.model.User;

public class UserDTO {
    String lastName;
    String firstName;
    String email;

    public UserDTO() {

    }

    public UserDTO(User user) {
        firstName = user.getFirstName();
        lastName = user.getLastName();
        email = user.getEmail();
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

}
