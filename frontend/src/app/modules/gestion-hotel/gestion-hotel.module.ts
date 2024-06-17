import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionHotelRoutingModule } from './gestion-hotel-routing.module';
import { GestionHotelComponent } from './gestion-hotel.component';
import { HeadTitleModule } from 'src/app/shared/components/head-title/head-title.module';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { GestionHabitacionesComponent } from './gestion-habitaciones/gestion-habitaciones.component';
import { GestionReservasComponent } from './gestion-reservas/gestion-reservas.component';



@NgModule({
  declarations: [
    GestionHotelComponent,
    GestionUsuariosComponent,
    GestionHabitacionesComponent,
    GestionReservasComponent,
  ],
  imports: [
    CommonModule,
    GestionHotelRoutingModule,
    HeadTitleModule,

  ]
})
export class GestionHotelModule { }
