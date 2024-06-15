import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoLoginUserComponent } from './no-login-user.component';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NoLoginUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    NoLoginUserComponent
  ],
  providers:[
    ApiService
  ]
})
export class NoLoginUserModule { }
