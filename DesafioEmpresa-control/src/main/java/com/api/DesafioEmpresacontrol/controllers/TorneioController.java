package com.api.DesafioEmpresacontrol.controllers;

import com.api.DesafioEmpresacontrol.dtos.MeuDto;
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
    @PostMapping("/array")
    public ResponseEntity<List<Torneio>> array(@RequestBody MeuDto meuDto) {
        List<Integer> meuArray = meuDto.getId();
        System.out.println("nfrinfcirn "+ meuDto.getId());
        return ResponseEntity.ok(torneioRepository.Teste(meuDto.getId()));
    }



    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/deletarTimeSorteado")
    public TimesSorteados deleteTimeSorteado (@RequestBody TimesSorteados timesSorteados) {
        timesSorteadosRepository.delete(timesSorteados);
        return timesSorteados;
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
    @PostMapping("/bucarTimeSorteados")
    public ResponseEntity<List<TimesSorteados>> findAllByTimeSorteados(@RequestBody TimesSorteados timesSorteados){
        return ResponseEntity.ok(timesSorteadosRepository
                .findAllByNomeIgnoreCase(timesSorteados.getNome()));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/bucarId")
    public ResponseEntity<List<Torneio>> findAllByID(@RequestBody Torneio torneio){
        return ResponseEntity.ok(torneioRepository
                .findById(torneio.getId()));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/atualizaTime")
    public Torneio atualizaPontos(@RequestBody Torneio torneio){
        return torneioRepository.save(torneio);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/atualiz+aTimeSorteado")
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
