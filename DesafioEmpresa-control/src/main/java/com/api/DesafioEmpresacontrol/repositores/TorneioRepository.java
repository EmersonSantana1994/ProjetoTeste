package com.api.DesafioEmpresacontrol.repositores;

import com.api.DesafioEmpresacontrol.models.Artilheiro;
import com.api.DesafioEmpresacontrol.models.RankingClubes;
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

    @Query(value = "SELECT * FROM torneio ORDER BY pontos Desc, saldo Desc", nativeQuery = true)
    List<Torneio> PegarTudo();

    List<Torneio> findById(Long id);
}
