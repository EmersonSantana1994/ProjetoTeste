package com.api.DesafioEmpresacontrol.controllers;

import com.api.DesafioEmpresacontrol.models.Artilheiro;
import com.api.DesafioEmpresacontrol.repositores.ArtilheiroRepository;
import com.sun.xml.bind.v2.runtime.output.SAXOutput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.List;

@RestController
@CrossOrigin(value = "*", allowedHeaders = "*")
@RequestMapping("/artilheiro")
public class ArtilheiroControler {


    @Autowired
    ArtilheiroRepository rankingRepository;


    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/nome")
    public ResponseEntity<List<Artilheiro>> findAllByTitulo(@RequestBody Artilheiro ranking){
        return ResponseEntity.ok(rankingRepository
                .findAllByNomeIgnoreCase(ranking.getNome()));
    }

    @GetMapping("/buscar")
    public ResponseEntity<List<Artilheiro>> findAll(){
        return ResponseEntity.ok(rankingRepository
                .findByOrderByGolsDesc());
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/inserir")
    public Artilheiro inserirPontos(@RequestBody Artilheiro ranking){
        return rankingRepository.save(ranking);
    }


    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/atualiza")
    public Artilheiro atualizaPontos(@RequestBody Artilheiro ranking){
        return rankingRepository.save(ranking);

    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/delete")
    public Artilheiro deleteJogador(@RequestBody Artilheiro artilheiro) {
        rankingRepository.delete(artilheiro);
        return artilheiro;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/achaai")
    public Artilheiro findAllByAll(@PathVariable("id") String[] id){
        return null;
    }

}
