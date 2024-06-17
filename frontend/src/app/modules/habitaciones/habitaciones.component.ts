import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {
  dataHabitaciones:any[] | undefined;

  constructor(private apiService: ApiService){}
  ngOnInit(): void {
    this.carga()
  }

  carga(){
    this.apiService.get('habitaciones/').subscribe(
      e=>{
        this.dataHabitaciones=e
        console.log(e)
      }
    )
  }

  comprobacion(){
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }
}
