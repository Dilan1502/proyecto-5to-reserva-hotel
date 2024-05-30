package reservaciones.proyecto.login;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import reservaciones.proyecto.clientes.clientesRepository;

@Service
public class LoginService {
    @Autowired
    clientesRepository repository;

    public List login(String email, String pass){
        return repository.findUserLogin(email,pass);
    }
}
