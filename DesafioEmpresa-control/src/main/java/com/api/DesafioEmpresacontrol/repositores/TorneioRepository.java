package com.api.DesafioEmpresacontrol.repositores;

import com.api.DesafioEmpresacontrol.models.Torneio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TorneioRepository extends JpaRepository<Torneio, UUID> {

    public List<Torneio> findAllByNomeIgnoreCase(String nome);

    public List<Torneio> findByOrderByPontosDesc();

    @Query(value = "SELECT * FROM torneio p Where p.id IN (?1) ", nativeQuery = true)
    List<Torneio> Teste(List<Integer> id);


    @Query(value = "SELECT * FROM torneio ORDER BY pontos Desc, saldo Desc", nativeQuery = true)
    List<Torneio> PegarTudo();

    Torneio deleteById(Torneio torneio);

    List<Torneio> findById(Long id);

}
