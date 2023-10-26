package com.api.DesafioEmpresacontrol.models;

import javax.persistence.*;

@Entity
@Table(name = "ligas")
public class NomeLigas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_liga;

    public long getId() {
        return id_liga;
    }

    public void setId(long id_liga) {
        this.id_liga = id_liga;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Column(name = "nome")
    private String nome;
}
