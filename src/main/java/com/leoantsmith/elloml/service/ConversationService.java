package com.leoantsmith.elloml.service;

import com.leoantsmith.elloml.controller.dtos.ConversationDTO;
import com.leoantsmith.elloml.controller.dtos.MessageDTO;
import com.leoantsmith.elloml.model.Conversation;
import com.leoantsmith.elloml.model.Message;
import com.leoantsmith.elloml.model.RegUserConvo;
import com.leoantsmith.elloml.model.User;
import com.leoantsmith.elloml.repositories.ConversationRepository;
import com.leoantsmith.elloml.repositories.MessageRepository;
import com.leoantsmith.elloml.repositories.RegUserConvoRepository;
import com.leoantsmith.elloml.service.intf.IConversationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ConversationService implements IConversationService {

    @Autowired
    private UserService userService;

    @Autowired
    private ConversationRepository conversationRepository;

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private RegUserConvoRepository regUserConvoRepository;

    @Override
    public MessageDTO sendMessage(MessageDTO messageDTO) {
        Conversation conversation = conversationRepository.findConversationByUrlEnding(messageDTO.getUrlEnding());
        User currentUser = userService.getCurrentUser();
        RegUserConvo regUserConvo = regUserConvoRepository.findRegUserConvoByUserAndConversation(currentUser,conversation);
        if (regUserConvo==null) {
            regUserConvo = new RegUserConvo();
            regUserConvo.setUser(currentUser);
            regUserConvo.setConversation(conversation);
            regUserConvoRepository.save(regUserConvo);
        }
        Message message = new Message();
        message.setConversation(conversationRepository.findConversationByUrlEnding(messageDTO.getUrlEnding()));
        message.setMessage(messageDTO.getMessage());
        message.setAuthor(userService.getCurrentUser());
        message.setLiked(messageDTO.isLiked());
        return new MessageDTO(messageRepository.save(message));
    }

    @Override
    public ConversationDTO saveConversation(ConversationDTO conversationDTO) {
        Optional<Conversation> maybeConvo = conversationRepository.findById(conversationDTO.getId());
        Conversation conversation = new Conversation();
        if (maybeConvo.isPresent()) {
            conversation = maybeConvo.get();
        } else {
            conversation.setUrlEnding(UUID.randomUUID().toString());
        }
        conversation.setOwner(userService.getCurrentUser());
        conversation.setTitle(conversationDTO.getTitle());

        return new ConversationDTO(conversationRepository.save(conversation));
    }

    @Override
    public List<MessageDTO> findAllForConversation(String urlEnding) {
        Conversation conversation = conversationRepository.findConversationByUrlEnding(urlEnding);
        return messageRepository.findAllByConversation(conversation).stream().map((MessageDTO::new)).toList();
    }

    @Override
    public ConversationDTO findConversationByUrlEnding(String urlEnding) {
        return new ConversationDTO(conversationRepository.findConversationByUrlEnding(urlEnding));
    }

    @Override
    public List<ConversationDTO> getAllForUser() {
        User user = userService.getCurrentUser();
        List<Conversation> conversationDTOSFromOwner = conversationRepository.findAllByOwner(user);
        List<Conversation> lol = regUserConvoRepository.findRegUserConvoByUser(user).stream().map((regUserConvo -> regUserConvo.getConversation())).toList();

        List<Conversation> lolomg = new ArrayList<>();
        lolomg.addAll(lol);
        lolomg.addAll(conversationDTOSFromOwner);
        return new HashSet<>(lolomg).stream().map(ConversationDTO::new).toList();
    }
}
