package reservaciones.proyecto.reservas;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import lombok.Data;
import reservaciones.proyecto.clientes.Clientes;
import reservaciones.proyecto.habitaciones.Habitaciones;

@Data
@Entity
public class Reservas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(iso = ISO.DATE_TIME)
    private Date fechaEntrada;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(iso = ISO.DATE_TIME)
    private Date fechaSalida;

    @ManyToOne
    private Clientes cliente;

    @ManyToOne
    @JoinColumn(name = "habitacion_id")
    @JsonIgnoreProperties("reservas")
    private Habitaciones habitacion;
    
    
}
