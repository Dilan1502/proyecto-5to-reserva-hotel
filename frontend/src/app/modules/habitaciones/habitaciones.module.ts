import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitacionesRoutingModule } from './habitaciones-routing.module';
import { HabitacionesComponent } from './habitaciones.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { HeadTitleModule } from 'src/app/shared/components/head-title/head-title.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';


@NgModule({
  declarations: [
    HabitacionesComponent
  ],
  imports: [
    CommonModule,
    HabitacionesRoutingModule,
    HeadTitleModule
  ]
})
export class HabitacionesModule { }
