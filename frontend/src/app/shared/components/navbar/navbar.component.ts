import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';


declare var window:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit { 
  username: string = '';
  password: string = '';
  loginData:boolean | undefined;
  constructor(private authService: ApiService) {}
  modalLogin:any
  modalRegistro:any
  ngOnInit(): void {
    this.modalLogin=new window.bootstrap.Modal(
      document.getElementById("login")
    )
    this.modalRegistro=new window.bootstrap.Modal(
      document.getElementById("registro")
    )
  this.load()
  }
  
  async login() {
    await this.authService.login(this.username, this.password)
    this.load()
  }

  async Registro(){
    
  }

  load(){
    if(localStorage.getItem("token")){
      this.loginData=true
      this.cerrarModal()
    }else{
      this.loginData=false
    }
  }

  cerrarModal() {
    this.modalLogin.hide();
    this.modalRegistro.hide();

  }
}
