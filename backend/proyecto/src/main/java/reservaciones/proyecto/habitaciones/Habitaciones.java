package reservaciones.proyecto.habitaciones;

import java.math.BigDecimal;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Habitaciones {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idHabitacion;

    @Column(length=100)
    private String nombre; 

    @Column(length=50)
    private String tipoHabitacion; 

    @Column(columnDefinition = "DECIMAL(10, 2)")
    private BigDecimal precio; 

    @Column(columnDefinition = "smallint")
    private String disponibilidad; 
}
