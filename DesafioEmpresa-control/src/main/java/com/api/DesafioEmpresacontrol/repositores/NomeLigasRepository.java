package com.api.DesafioEmpresacontrol.repositores;

import com.api.DesafioEmpresacontrol.models.NomeLigas;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

@Repository
public interface NomeLigasRepository extends JpaRepository<NomeLigas, UUID>{

}
