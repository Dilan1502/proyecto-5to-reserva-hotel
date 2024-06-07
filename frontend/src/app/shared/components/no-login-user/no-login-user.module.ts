import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoLoginUserComponent } from './no-login-user.component';



@NgModule({
  declarations: [
    NoLoginUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NoLoginUserComponent
  ]
})
export class NoLoginUserModule { }
