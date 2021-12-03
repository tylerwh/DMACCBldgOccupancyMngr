package com.dbom.dmaccbldgoccupancymngr;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

@SpringBootApplication
public class DmaccBldgOccupancyMngrApplication {

    public static void main(String[] args) {
        SpringApplication.run(DmaccBldgOccupancyMngrApplication.class, args);
    }

    @Bean
    CommandLineRunner init(OccupantRepository occupantRepository){
        return args -> {
          Stream.of("John|Smith|2","Sally|Sue|2","Carl|Brunner|3").forEach(name -> {
              List<String> fullname = Arrays.asList(name.split("\\|"));
              String fname = fullname.get(0);
              String lname = fullname.get(1);
              int bldgNum = Integer.parseInt(fullname.get(2));
              Occupant occupant = new Occupant(fname, lname, bldgNum);
              occupantRepository.save(occupant);
          });
          occupantRepository.findAll().forEach(System.out::println);
        };
    }

}
