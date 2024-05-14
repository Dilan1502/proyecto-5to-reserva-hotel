package reservaciones.proyecto.habitaciones;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface habitacionesRepository extends CrudRepository <Habitaciones, Long> {
    List<Habitaciones> findAll();
}
