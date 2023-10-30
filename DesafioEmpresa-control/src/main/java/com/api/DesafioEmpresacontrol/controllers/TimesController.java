package com.api.DesafioEmpresacontrol.controllers;

import com.api.DesafioEmpresacontrol.models.*;
import com.api.DesafioEmpresacontrol.repositores.TimesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*", allowedHeaders = "*")
@RequestMapping("/times")
public class TimesController {

    @Autowired
    TimesRepository timesRepository;

    @PostMapping("/bucarTimeSorteados")
    public ResponseEntity<List<Times>> findAllByTimeSorteados(@RequestBody TimesSorteados timesSorteados){
        return ResponseEntity.ok(timesRepository
                .findAllByNomeIgnoreCase(timesSorteados.getNome()));
    }

    /*
     para o inserir abaixo
	{
		"nome": "Raiden",
		"id": {
			"id": 2
		}
	}
     */
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/inserir")
    public Times inserir(@RequestBody Times times) {
        return timesRepository.save(times);
    }

    /*
    para o inserir abaixo
    {
		"nome": "Liberdade Real",
		"id":  {
			"id": 1
		}
	}
     */

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/inserirNativa")
    public void inserirNativa(@RequestBody Times times) {
        timesRepository.Sql(times.getNome(), times.getNomeLigas());
    }


    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/buscar")
    public ResponseEntity<List<Times>> findAll(){
        return ResponseEntity.ok(timesRepository
                .findAllBy());
    }


}