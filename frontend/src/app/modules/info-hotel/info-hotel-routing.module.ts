import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoHotelComponent } from './info-hotel.component';

const routes: Routes = [{ path: '', component: InfoHotelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoHotelRoutingModule { }
