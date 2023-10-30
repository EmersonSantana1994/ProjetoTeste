package com.api.DesafioEmpresacontrol.repositores;

import com.api.DesafioEmpresacontrol.models.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Repository
public interface TimesRepository extends JpaRepository<Times, UUID> {
    public List<Times> findAllBy();
    public  List<Times> findAllByNomeIgnoreCase(String nome);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO times_tb (nome, nome_ligas_id)  VALUES ( ?1, ?2 );", nativeQuery = true)
    void Sql(String nome, long id);


}
