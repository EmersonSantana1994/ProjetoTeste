package com.api.DesafioEmpresacontrol.models;

import javax.persistence.*;

@Entity
@Table(name = "artilheiro")
public class Artilheiro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nome")
    private String nome;

    @Column (name = "gols")
    private long gols;

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

    public long getGols() {
        return gols;
    }

    public void setGols(long gols) {
        this.gols = gols;
    }
}
