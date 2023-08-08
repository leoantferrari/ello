package com.leoantsmith.elloml.controller;

import com.leoantsmith.elloml.controller.dtos.ConversationDTO;
import com.leoantsmith.elloml.controller.dtos.LetterDTO;
import com.leoantsmith.elloml.controller.dtos.MessageDTO;
import com.leoantsmith.elloml.service.ConversationService;
import com.leoantsmith.elloml.service.intf.IConversationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/message")
public class MessageController {

    @Autowired
    IConversationService conversationService;

    @PostMapping("")
    public ResponseEntity<MessageDTO> sendMessage(@RequestBody MessageDTO message) {
        return ResponseEntity.ok(conversationService.sendMessage(message));
    }

    @PostMapping("/conversation")
    public ResponseEntity<ConversationDTO> saveConversation(@RequestBody ConversationDTO conversation) {
        return ResponseEntity.ok(conversationService.saveConversation(conversation));
    }

    @GetMapping("/conversation")
    public ResponseEntity<List<ConversationDTO>> getConversationsForUsers() {
        return ResponseEntity.ok(conversationService.getAllForUser());
    }

    @GetMapping("/conversation/{urlEnding}")
    public ResponseEntity<ConversationDTO> getConversationsByUrl(@PathVariable("urlEnding") String urlEnding) {
        return ResponseEntity.ok(conversationService.findConversationByUrlEnding(urlEnding));
    }

    @GetMapping("/conversation/{urlEnding}/messages")
    public ResponseEntity<List<MessageDTO>> getMessagesForConversation(@PathVariable("urlEnding") String urlEnding) {
        return ResponseEntity.ok(conversationService.findAllForConversation(urlEnding));
    }








}
