package com.api.DesafioEmpresacontrol.repositores;

import com.api.DesafioEmpresacontrol.models.TimesSorteados;
import com.api.DesafioEmpresacontrol.models.Torneio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TimesSorteadosRepository extends JpaRepository<TimesSorteados, UUID> {

    public List<TimesSorteados> findAllByNomeIgnoreCase(String nome);

}
