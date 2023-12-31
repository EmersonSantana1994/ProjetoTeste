package com.api.DesafioEmpresacontrol.models;

import javax.persistence.*;

@Entity
@Table(name = "times_sorteados")
public class TimesSorteados {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nome")
    private String nome;

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
}
