import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { LoginUserModule } from '../login-user/login-user.module';
import { NoLoginUserModule } from '../no-login-user/no-login-user.module';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,

  ],
  imports: [
    CommonModule,
    LoginUserModule,
    NoLoginUserModule,
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
