package com.devsuperior.devmovie.controllers;

import com.devsuperior.devmovie.dto.MovieDTO;
import com.devsuperior.devmovie.dto.ScoreDTO;
import com.devsuperior.devmovie.services.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

    @Autowired
    private ScoreService service;

    @PutMapping
    public MovieDTO saveScore(@RequestBody ScoreDTO dto){

        MovieDTO movieDTO = service.saveScore(dto);
        return movieDTO;
    }
}
