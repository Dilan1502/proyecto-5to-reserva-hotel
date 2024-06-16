import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'habitaciones', loadChildren: () => import('./modules/habitaciones/habitaciones.module').then(m => m.HabitacionesModule) },
  { path: 'info-hotel', loadChildren: () => import('./modules/info-hotel/info-hotel.module').then(m => m.InfoHotelModule) },
  { path: 'gestion-hotel', canActivate:[AdminGuard], loadChildren: () => import('./modules/gestion-hotel/gestion-hotel.module').then(m => m.GestionHotelModule) }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
