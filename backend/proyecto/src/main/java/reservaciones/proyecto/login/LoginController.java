package reservaciones.proyecto.login;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;



@RestController
@RequestMapping("login")
@Tag(name = "Login")
@CrossOrigin({"*"})
public class LoginController {
    
    @Autowired
    LoginService service;

    @Operation(summary = "logeo")
    @PostMapping("/")
    public List login (@RequestBody loginInterface entity){
    return service.login(entity.email, entity.password);
    }
}
