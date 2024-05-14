package reservaciones.proyecto.reservas;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface reservasRepository extends CrudRepository <reservas, Long>{
    List<reservas> findAll();
}
