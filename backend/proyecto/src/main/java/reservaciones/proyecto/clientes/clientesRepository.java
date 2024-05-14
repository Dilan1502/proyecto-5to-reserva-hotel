package reservaciones.proyecto.clientes;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface clientesRepository extends CrudRepository<Clientes, Long> {
    List<Clientes> findAll();
}
