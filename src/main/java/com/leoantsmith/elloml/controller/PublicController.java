package com.leoantsmith.elloml.controller;

import com.leoantsmith.elloml.controller.dtos.LetterDTO;
import com.leoantsmith.elloml.service.intf.ILetterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/public")
public class PublicController {

    @Autowired
    private ILetterService letterService;
    @GetMapping("/letter/{letterUrl}")
    public ResponseEntity<LetterDTO> getLetterForURL(@PathVariable("letterUrl") String letterUrl) {
        return ResponseEntity.ok(letterService.getLetterForURL(letterUrl));
    }
}
