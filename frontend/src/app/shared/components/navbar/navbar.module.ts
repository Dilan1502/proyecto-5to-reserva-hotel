import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    NavbarComponent
  ],
  providers:[
    ApiService
  ]
})
export class NavbarModule { }
