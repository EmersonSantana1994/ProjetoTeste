package com.api.DesafioEmpresacontrol.controllers;


import com.api.DesafioEmpresacontrol.models.RanckingJogadores;
import com.api.DesafioEmpresacontrol.models.RankingClubes;
import com.api.DesafioEmpresacontrol.repositores.RanckingJogadoresRepository;
import com.api.DesafioEmpresacontrol.repositores.RankingClubesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*", allowedHeaders = "*")
@RequestMapping("/rankingJogadores")
public class RanckingJogadoresControler {


    @Autowired
    RanckingJogadoresRepository rankingRepository;


    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/encontrar/nome")
    public ResponseEntity<List<RanckingJogadores>> findAllByTitulo(@RequestBody RanckingJogadores ranking){
        return ResponseEntity.ok(rankingRepository
                .findAllByNomeIgnoreCase(ranking.getNome()));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/buscar")
    public ResponseEntity<List<RanckingJogadores>> findAll(){
        return ResponseEntity.ok(rankingRepository
                .findByOrderByPontosDesc());
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/inserir")
    public RanckingJogadores inserirPontos(@RequestBody RanckingJogadores ranking){
        return rankingRepository.save(ranking);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/atualiza")
    public RanckingJogadores atualizaPontos(@RequestBody RanckingJogadores ranking){
        return rankingRepository.save(ranking);
    }

}
