package com.leoantsmith.elloml.repositories;

import com.leoantsmith.elloml.model.Conversation;
import com.leoantsmith.elloml.model.Message;
import com.leoantsmith.elloml.model.RegUserConvo;
import com.leoantsmith.elloml.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RegUserConvoRepository extends JpaRepository<RegUserConvo, Long> {

    RegUserConvo findRegUserConvoByUserAndConversation(User user, Conversation conversation);
    List<RegUserConvo> findRegUserConvoByUser(User user);
}
