package com.leoantsmith.elloml;

import lombok.extern.log4j.Log4j2;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Log4j2
@SpringBootApplication
@ConfigurationPropertiesScan
@EnableTransactionManagement
public class ElloMlApplication {

    public static void main(final String[] args) {
        SpringApplication.run(ElloMlApplication.class, args);
    }

}
