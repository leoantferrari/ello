package com.leoantsmith.elloml.controller;


import com.leoantsmith.elloml.controller.dtos.UserDTO;
import com.leoantsmith.elloml.model.User;
import com.leoantsmith.elloml.service.intf.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/user")
public class UserController {

    private final IUserService userService;

    @Autowired
    public UserController(IUserService userService) {
        this.userService = userService;
    }

    @GetMapping("")
    public ResponseEntity<UserDTO> getCurrentUser() {
        User user = userService.getCurrentUser();
        UserDTO userDTO;
        if (user == null) {
            userDTO = null;
        } else {
            userDTO = new UserDTO(user);
        }
        return ResponseEntity.ok(userDTO);
    }

    @PostMapping("")
    public ResponseEntity<UserDTO> saveUser(@RequestBody UserDTO receivedUser) {
        User user = userService.saveUser(receivedUser);
        UserDTO userDTO;
        if (user == null) {
            userDTO = null;
        } else {
            userDTO = new UserDTO(user);
        }
        return ResponseEntity.ok(userDTO);
    }

    @GetMapping("/{oAuthToken}")
    public ResponseEntity<UserDTO> getUser(@PathVariable("oAuthToken") String oAuthToken) {
        User user = userService.getUser(oAuthToken);
        UserDTO userDTO;
        if (user == null) {
            userDTO = null;
        } else {
            userDTO = new UserDTO(user);
        }
        return ResponseEntity.ok(userDTO);
    }

}
