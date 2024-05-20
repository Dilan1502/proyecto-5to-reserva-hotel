package reservaciones.proyecto.clientes;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Clientes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCliente;

    @Column(length=100)
    private String nombre; 

    @Column(length=100)
    private String correoElectronico; 

    @Column(length=15)
    private String telefono; 

    @Column(columnDefinition = "char(2)")
    private String role;

}
