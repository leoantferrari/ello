package com.leoantsmith.elloml.repositories;

import com.leoantsmith.elloml.model.Conversation;
import com.leoantsmith.elloml.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findAllByConversation(Conversation conversation);
}
