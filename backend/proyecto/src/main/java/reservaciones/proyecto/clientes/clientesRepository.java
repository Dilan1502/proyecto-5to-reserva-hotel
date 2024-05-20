package reservaciones.proyecto.clientes;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface clientesRepository extends JpaRepository<Clientes, Long> {
    List<Clientes> findAll();
}
