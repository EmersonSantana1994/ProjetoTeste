package com.api.DesafioEmpresacontrol.controllers;

import com.api.DesafioEmpresacontrol.models.NomeLigas;
import com.api.DesafioEmpresacontrol.models.RanckingJogadores;
import com.api.DesafioEmpresacontrol.models.Torneio;
import com.api.DesafioEmpresacontrol.repositores.NomeLigasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*", allowedHeaders = "*")
@RequestMapping("/nomeLiga")
public class NomeLigaController {

    @Autowired
    NomeLigasRepository nomeLigasRepository;


    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/inserir")
    public NomeLigas inserirPontos(@RequestBody NomeLigas nomeLigas){
        return nomeLigasRepository.save(nomeLigas);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/buscar")
    public ResponseEntity<List<NomeLigas>> findAll(){
        return ResponseEntity.ok(nomeLigasRepository
                .findAll());
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/atualizaLiga")
    public NomeLigas atualizaPontos(@RequestBody NomeLigas nomeLigas){
        return nomeLigasRepository.save(nomeLigas);
    }
}
