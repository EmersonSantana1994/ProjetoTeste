package com.api.DesafioEmpresacontrol.repositores;

import com.api.DesafioEmpresacontrol.models.RanckingJogadores;
import com.api.DesafioEmpresacontrol.models.RankingClubes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface  RanckingJogadoresRepository extends JpaRepository<RanckingJogadores, UUID> {

    public List<RanckingJogadores> findAllByNomeIgnoreCase(String nome);

    public List<RanckingJogadores> findByOrderByPontosDesc();

    List<RanckingJogadores> findById(Long id);
}
