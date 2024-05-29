package reservaciones.proyecto.clientes;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import lombok.Data;
import reservaciones.proyecto.reservas.Reservas;

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

    @JsonIgnoreProperties("cliente")
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "cliente")
    private List<Reservas> reservas;

}
