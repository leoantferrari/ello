package com.leoantsmith.elloml.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class ExampleController {

    @GetMapping("/api/example")
    public String hello() {
            return "Hello mate, the time now is " + new Date() + "\n";
    }

}
