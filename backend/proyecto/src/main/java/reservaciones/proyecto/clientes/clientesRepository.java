package reservaciones.proyecto.clientes;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface clientesRepository extends CrudRepository<Clientes, Long> {
    List<Clientes> findAll();

    @Query(value = "SELECT * from clientes where correo_electronico = :email and pass = :password", nativeQuery = true)
    List findUserLogin(@Param("email") String email, @Param("password") String password);

    

}
