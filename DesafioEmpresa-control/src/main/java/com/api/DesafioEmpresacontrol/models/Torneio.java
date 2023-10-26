package com.api.DesafioEmpresacontrol.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "torneio")
public class Torneio {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    @Column (name = "nome")
    private String nome;

    @Column (name = "pontos")
    private long pontos;

    @Column (name = "saldo")
    private long saldo;

    public long getSaldo() {
        return saldo;
    }

    public void setSaldo(long saldo) {
        this.saldo = saldo;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public long getPontos() {
        return pontos;
    }

    public void setPontos(long pontos) {
        this.pontos = pontos;
    }
}
