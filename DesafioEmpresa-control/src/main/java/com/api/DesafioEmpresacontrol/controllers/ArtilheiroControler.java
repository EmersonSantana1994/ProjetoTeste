package com.api.DesafioEmpresacontrol.controllers;

import com.api.DesafioEmpresacontrol.models.Artilheiro;
import com.api.DesafioEmpresacontrol.repositores.ArtilheiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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


    @PostMapping("/inserirNativa")
    public void inserirNativa(@RequestBody Artilheiro artilheiro) {
        rankingRepository.Sql();
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
    public ResponseEntity<List<Artilheiro>> PegarTudo(@RequestBody Artilheiro artilheiro){
        return ResponseEntity.ok(rankingRepository
                .PegarTudo());
    }

}
