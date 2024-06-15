import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoHotelRoutingModule } from './info-hotel-routing.module';
import { InfoHotelComponent } from './info-hotel.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { HeadTitleModule } from 'src/app/shared/components/head-title/head-title.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';


@NgModule({
  declarations: [
    InfoHotelComponent
  ],
  imports: [
    CommonModule,
    InfoHotelRoutingModule,
    HeadTitleModule,
  ]
})
export class InfoHotelModule { }
