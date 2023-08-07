package com.leoantsmith.elloml.controller;

import com.leoantsmith.elloml.controller.dtos.LetterDTO;
import com.leoantsmith.elloml.service.intf.ILetterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@Controller
@RequestMapping("/api/letter")
public class LetterController {

    @Autowired
    private ILetterService letterService;

    @PostMapping("")
    public ResponseEntity<LetterDTO> saveLetter(@RequestBody LetterDTO receivedLetter) {
        return ResponseEntity.ok(letterService.saveLetter(receivedLetter));
    }

    @GetMapping("")
    public ResponseEntity<List<LetterDTO>> getLettersForCurrentUser() {
        return ResponseEntity.ok(letterService.getAllLettersForUser());
    }

    @GetMapping("/id/{letterId}")
    public ResponseEntity<LetterDTO> getLetterById(@PathVariable("letterId") Long letterId) {
        return ResponseEntity.ok(letterService.getLetterById(letterId));
    }

    @GetMapping("/url/{letterUrl}")
    public ResponseEntity<LetterDTO> getLetterForURL(@PathVariable("letterUrl") String letterUrl) {
        return ResponseEntity.ok(letterService.getLetterForURL(letterUrl));
    }
}
