package reservaciones.proyecto.reservas;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("reservas")
@Tag(name = "contolador reservas")
@CrossOrigin({"*"})
public class reservasController {
    @Autowired
    reservasService service;

    @Operation(summary = "Obtiene una reserva por su id")
    @GetMapping("/{id}/")
    public Reservas findById(@PathVariable long id){
       return service.findById(id);
    }

    @Operation(summary = "Obtiene todas los reservas")
    @GetMapping("/")
    public List<Reservas> findAll(){
        return service.findAll();
    }

    //Create
    @Operation(summary = "Agrega una reserva")
    @PostMapping("/")
    public Reservas save (@RequestBody Reservas entity){
       return service.save(entity);
    }

    @Operation(summary = "Actualizar campo completo de una reserva, el id va en el body")
    @PutMapping("/")
    public Reservas update (@RequestBody Reservas entity){
        return service.save(entity);
    }

    @Operation(summary = "Elimina una reserva, el id va en la url")
    @DeleteMapping("/{id}/")
    public void deeteById(@PathVariable long id){
        service.deleteById(id);
    }

}
