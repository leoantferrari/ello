package com.leoantsmith.elloml.service;

import com.leoantsmith.elloml.controller.dtos.UserDTO;
import com.leoantsmith.elloml.model.User;
import com.leoantsmith.elloml.repositories.UserRepository;
import com.leoantsmith.elloml.service.intf.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {

    @Autowired
    private UserRepository userRepository;

    /**
     * {@link IUserService#getCurrentUser()}
     */
    @Override
    public User getCurrentUser() {
        
        return userRepository.getFirstByoAuthToken(oAuthKey);
    }

    @Override
    public User getUser(String oAuthKey) {
        return userRepository.getFirstByoAuthToken(oAuthKey);
    }

    @Override
    public User saveUser(UserDTO userDTO) {
        User user = new User();
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setoAuthToken(userDTO.getoAuthToken());

        return userRepository.save(user);
    }
}
