package com.api.DesafioEmpresacontrol.controllers;

import com.api.DesafioEmpresacontrol.models.Artilheiro;
import com.api.DesafioEmpresacontrol.models.RankingClubes;
import com.api.DesafioEmpresacontrol.models.TimesSorteados;
import com.api.DesafioEmpresacontrol.models.Torneio;
import com.api.DesafioEmpresacontrol.repositores.TimesSorteadosRepository;
import com.api.DesafioEmpresacontrol.repositores.TorneioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*", allowedHeaders = "*")
@RequestMapping("/torneio")
public class TorneioController {

    @Autowired
    TorneioRepository torneioRepository;

    @Autowired
    TimesSorteadosRepository timesSorteadosRepository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/buscar")
    public ResponseEntity<List<Torneio>> PegarTudo(){
        return ResponseEntity.ok(torneioRepository
                .PegarTudo());
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/cadastrarTime")
    public Torneio inserirPontos(@RequestBody Torneio torneio)
    {
        return torneioRepository.save(torneio);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/bucarNome")
    public ResponseEntity<List<Torneio>> findAllByTitulo(@RequestBody Torneio torneio){
        return ResponseEntity.ok(torneioRepository
                .findAllByNomeIgnoreCase(torneio.getNome()));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/atualizaTime")
    public Torneio atualizaPontos(@RequestBody Torneio torneio){
        return torneioRepository.save(torneio);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/atualizaTimeSorteado")
    public TimesSorteados atualizaPontos(@RequestBody TimesSorteados torneio){
        return timesSorteadosRepository.save(torneio);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/cadastrarTimeSorteado")
    public TimesSorteados inserirPontos(@RequestBody TimesSorteados torneio)
    {
        return timesSorteadosRepository.save(torneio);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/buscarTimeSorteado")
    public ResponseEntity<List<TimesSorteados>> findAlls(){
        return ResponseEntity.ok(timesSorteadosRepository
                .findAll());
    }

}
