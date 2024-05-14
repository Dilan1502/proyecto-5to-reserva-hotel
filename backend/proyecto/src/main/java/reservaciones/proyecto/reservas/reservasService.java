package reservaciones.proyecto.reservas;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class reservasService {
     @Autowired
    reservasRepository repository;
    
    public reservas save(reservas entity){
        return repository.save(entity);
    }

    public void deleteById(long id){
        repository.deleteById(id);
    }

    public reservas findById(long id){
        return repository.findById(id).orElse(null);
    }

    public List<reservas> findAll(){
        return repository.findAll();
    }


}
