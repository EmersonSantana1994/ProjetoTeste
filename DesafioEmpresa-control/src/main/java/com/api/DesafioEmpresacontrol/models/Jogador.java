package com.api.DesafioEmpresacontrol.models;

import javax.persistence.*;

@Entity
@Table(name = "jogadores")
public class Jogador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_jogador;

    @Column(name = "nome")
    private String nome;

    @Column(name = "id_time")
    private long id_time;

    public long getId_jogador() {
        return id_jogador;
    }

    public void setId_jogador(long id_jogador) {
        this.id_jogador = id_jogador;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public long getId_time() {
        return id_time;
    }

    public void setId_time(long id_time) {
        this.id_time = id_time;
    }
}
