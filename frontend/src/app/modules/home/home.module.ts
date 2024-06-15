import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { HeadTitleModule } from 'src/app/shared/components/head-title/head-title.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeadTitleModule,
  ]
})
export class HomeModule { }
