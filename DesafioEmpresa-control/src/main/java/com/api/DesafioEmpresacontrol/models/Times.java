package com.api.DesafioEmpresacontrol.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "times_tb")
public class Times {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_time;

    @Column(name = "nome")
    private String nome;

    @ManyToOne
    @JoinColumn(name = "id")
    private NomeLigas nomeLigas;

    public long getNomeLigas() {
        return nomeLigas.getId();
    }

    public void setNomeLigas(NomeLigas nomeLigas) {
        this.nomeLigas = nomeLigas;
    }

    public NomeLigas getId() {
        return nomeLigas;
    }

    public void setId(NomeLigas nomeLigas) {
        this.nomeLigas = nomeLigas;
    }

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


}
