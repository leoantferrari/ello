package com.leoantsmith.elloml.service;

import com.leoantsmith.elloml.controller.dtos.LetterDTO;
import com.leoantsmith.elloml.model.Letter;
import com.leoantsmith.elloml.model.User;
import com.leoantsmith.elloml.repositories.LetterRepository;
import com.leoantsmith.elloml.service.intf.ILetterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class LetterService implements ILetterService {

    @Autowired
    private LetterRepository letterRepository;

    @Autowired
    private UserService userService;

    @Override
    public List<LetterDTO> getAllLettersForUser() {
        User currentUser = userService.getCurrentUser();
        return letterRepository.getAllByOwner(currentUser).stream().map(LetterDTO::new).toList();
    }

    @Override
    public LetterDTO saveLetter(LetterDTO letterDTO) {
        Optional<Letter> maybeLetter = letterRepository.findById(letterDTO.getId());
        Letter letter = new Letter();
        if (maybeLetter.isPresent()) {
            letter = maybeLetter.get();
        } else {
            letter.setUrlEnding(UUID.randomUUID().toString());
        }
        letter.setOwner(userService.getCurrentUser());
        letter.setMessage(letterDTO.getMessage());
        letter.setTitle(letterDTO.getTitle());

        return new LetterDTO(letterRepository.save(letter));
    }

    @Override
    public LetterDTO getLetterForURL(String letterUrl) {
        Letter letter = letterRepository.getFirstByUrlEnding(letterUrl);
        if (letter==null) {
            return null;
        }
        return new LetterDTO(letter);
    }

    @Override
    public LetterDTO getLetterById(long id) {
        return new LetterDTO(letterRepository.findById(id).get());
    }
}
