import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionHotelComponent } from './gestion-hotel.component';

const routes: Routes = [{ path: '', component: GestionHotelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionHotelRoutingModule { }
