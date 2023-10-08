package com.api.DesafioEmpresacontrol.repositores;

import com.api.DesafioEmpresacontrol.models.Artilheiro;
import com.api.DesafioEmpresacontrol.models.RankingClubes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ArtilheiroRepository extends JpaRepository<Artilheiro, UUID> {

    public List<Artilheiro> findAllByNomeIgnoreCase(String nome);

    public List<Artilheiro> findByOrderByGolsDesc();

    Artilheiro deleteById(Artilheiro artilheiro);

    @Query(value = "SELECT * FROM artilheiro", nativeQuery = true)
    List<Artilheiro> PegarTudo();
}
