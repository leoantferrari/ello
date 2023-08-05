package com.leoantsmith.elloml.service.intf;

import com.leoantsmith.elloml.controller.dtos.UserDTO;
import com.leoantsmith.elloml.model.User;

public interface IUserService {
    /**
     * Return the user currently making the request
     *
     * @return the user
     */
    User getCurrentUser();

    User getUser(String oAuthKey);

    User saveUser(UserDTO userDTO);
}
