package com.leoantsmith.elloml.service;

import com.leoantsmith.elloml.controller.dtos.UserDTO;
import com.leoantsmith.elloml.model.User;
import com.leoantsmith.elloml.repositories.UserRepository;
import com.leoantsmith.elloml.service.intf.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
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
        String oAuthKey = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.getFirstByoAuthToken(oAuthKey);
    }

    @Override
    public User getUser(String oAuthKey) {
        return userRepository.getFirstByoAuthToken(oAuthKey);
    }

    @Override
    public User saveUser(UserDTO userDTO) {
        String oAuthKey = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = getUser(oAuthKey);
        if (user == null) {
            user = new User();
        }
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setoAuthToken(oAuthKey);

        return userRepository.save(user);
    }
}
