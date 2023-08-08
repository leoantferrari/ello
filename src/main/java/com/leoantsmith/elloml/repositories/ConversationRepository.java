package com.leoantsmith.elloml.repositories;

import com.leoantsmith.elloml.model.Conversation;
import com.leoantsmith.elloml.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConversationRepository extends JpaRepository<Conversation, Long> {
    Conversation findConversationByUrlEnding(String urlEnding);
    List<Conversation> findAllByOwner(User owner);
}
