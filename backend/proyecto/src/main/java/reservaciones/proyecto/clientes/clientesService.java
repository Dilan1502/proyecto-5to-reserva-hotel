package reservaciones.proyecto.clientes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class clientesService {
      @Autowired
    clientesRepository repository;
    
    public Clientes save(Clientes entity){
        return repository.save(entity);
    }

    public void deleteById(long id){
        repository.deleteById(id);
    }

    public Clientes findById(long id){
        return repository.findById(id).orElse(null);
    }

    public List<Clientes> findAll(){
        return repository.findAll();
    }
}
