import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { LoginUserModule } from '../login-user/login-user.module';
import { NoLoginUserModule } from '../no-login-user/no-login-user.module';



@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    LoginUserModule,
    NoLoginUserModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }
