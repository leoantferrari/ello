package com.leoantsmith.elloml.repositories;

import com.leoantsmith.elloml.model.Letter;
import com.leoantsmith.elloml.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LetterRepository extends JpaRepository<Letter, Long> {
    List<Letter> getAllByOwner(User owner);

    Letter getFirstByUrlEnding(String urlEnding);
}
