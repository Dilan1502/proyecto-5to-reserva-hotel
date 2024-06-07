import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserComponent } from './login-user.component';



@NgModule({
  declarations: [
    LoginUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginUserComponent
  ]
})
export class LoginUserModule { }
