package com.leoantsmith.elloml.config;


import com.leoantsmith.elloml.service.message.ApplicationException;
import com.leoantsmith.elloml.service.message.ErrorMessage;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;

@RestControllerAdvice
public class GlobalErrorHandler {

    @ResponseStatus(HttpStatus.FORBIDDEN)
    @ExceptionHandler(AccessDeniedException.class)
    public ErrorMessage handleAccessDenied(final HttpServletRequest request, final Exception error) {
        return ErrorMessage.from("Permission denied");
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(ApplicationException.class)
    public ErrorMessage handleApplicationException(final HttpServletRequest request, final Exception error) {
        return ErrorMessage.from(error.getMessage());
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(Throwable.class)
    public ErrorMessage handleInternalError(final HttpServletRequest request, final Exception error) {
        return ErrorMessage.from(error.getMessage());
    }

}
