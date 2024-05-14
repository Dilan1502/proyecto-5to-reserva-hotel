package reservaciones.proyecto.pagos;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface pagosRepository extends CrudRepository <pagos, Long> {
    List<pagos> findAll();
}
