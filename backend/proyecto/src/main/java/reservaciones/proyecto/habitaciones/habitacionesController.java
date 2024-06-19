package reservaciones.proyecto.habitaciones;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
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
@RequestMapping("habitaciones")
@Tag(name = "Controlador habitaciones")
@CrossOrigin({"*"})
public class habitacionesController {
    @Autowired
    habitacionesService service;

    
    @Operation(summary = "Obtiene un habitacion por su id")
    @GetMapping("/{id}/")
    public Habitaciones findById(@PathVariable long id){
       return service.findById(id);
    }

    @Operation(summary = "Obtiene todas los habitaciones")
    @GetMapping("/")
    public List<Habitaciones> findAll(){
        return service.findAll();
    }

    //Create
    @Operation(summary = "Agrega un habitacion, Requiere permisos")
    @PreAuthorize("hasAuthority('habitaciones_save')")
    @PostMapping("/")
    public Habitaciones save (@RequestBody Habitaciones entity){
       return service.save(entity);
    }

    @Operation(summary = "Actualizar campo completo de un habitacion, el id va en el body , Requiere permisos")
    @PreAuthorize("hasAuthority('habitaciones_update')")
    @PutMapping("/")
    public Habitaciones update (@RequestBody Habitaciones entity){
        return service.save(entity);
    }

    @Operation(summary = "Elimina una habitacion, el id va en la url, Requiere permisos")
    @PreAuthorize("hasAuthority('habitaciones_delete')")
    @DeleteMapping("/{id}/")
    public void deeteById(@PathVariable long id){
        service.deleteById(id);
    }

}
