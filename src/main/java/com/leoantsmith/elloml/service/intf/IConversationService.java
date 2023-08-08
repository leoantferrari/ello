package com.leoantsmith.elloml.service.intf;

import com.leoantsmith.elloml.controller.dtos.ConversationDTO;
import com.leoantsmith.elloml.controller.dtos.MessageDTO;
import com.leoantsmith.elloml.model.Message;

import java.util.List;

public interface IConversationService {
    MessageDTO sendMessage(MessageDTO messageDTO);
    ConversationDTO saveConversation(ConversationDTO conversationDTO);
    List<MessageDTO> findAllForConversation(String urlEnding);
    ConversationDTO findConversationByUrlEnding(String urlEnding);
    List<ConversationDTO> getAllForUser();
}
