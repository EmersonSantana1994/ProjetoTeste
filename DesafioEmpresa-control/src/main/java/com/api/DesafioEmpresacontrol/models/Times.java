package com.api.DesafioEmpresacontrol.models;

import javax.persistence.*;

@Entity
@Table(name = "times")
public class Times {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_time;

    @Column(name = "nome")
    private String nome;

    @Column(name = "id_liga")
    private long id_liga;

    public long getId_time() {
        return id_time;
    }

    public void setId_time(long id_time) {
        this.id_time = id_time;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public long getId_liga() {
        return id_liga;
    }

    public void setId_liga(long id_liga) {
        this.id_liga = id_liga;
    }
}
