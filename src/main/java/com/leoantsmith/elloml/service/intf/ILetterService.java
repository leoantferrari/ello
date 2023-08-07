package com.leoantsmith.elloml.service.intf;

import com.leoantsmith.elloml.controller.dtos.LetterDTO;
import com.leoantsmith.elloml.model.Letter;

import java.util.List;

public interface ILetterService {
    List<LetterDTO> getAllLettersForUser();
    LetterDTO saveLetter(LetterDTO letterDTO);

    LetterDTO getLetterForURL(String letterUrl);

    LetterDTO getLetterById(long id);
}
