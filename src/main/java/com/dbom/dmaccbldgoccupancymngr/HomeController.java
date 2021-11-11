package com.dbom.dmaccbldgoccupancymngr;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HomeController {

    private final OccupantRepository occupantRepository;

    public HomeController(OccupantRepository occupantRepository) {
        this.occupantRepository = occupantRepository;
    }

    @RequestMapping
    public String helloWorld(){
        return "Hello World from Spring Boot";
    }

    @GetMapping("/occupants")
    public List<Occupant> getOccupants() {
        return (List<Occupant>) occupantRepository.findAll();
    }

    @PostMapping("/occupants")
    void addOccupant(@RequestBody Occupant occupant){
        occupantRepository.save(occupant);
    }
}
