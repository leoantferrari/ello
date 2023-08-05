package com.leoantsmith.elloml.repositories;

import com.leoantsmith.elloml.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User getFirstByoAuthToken(String oAuthToken);
}
