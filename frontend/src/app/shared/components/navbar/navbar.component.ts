import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';
import { ExtendedJwtPayload } from 'src/app/core/models/users.model';


declare var window: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string = '';
  password: string = '';
  nombreUsuario: any = '';
  loginData: boolean | undefined;
  constructor(private authService: ApiService) { }
  modalLogin: any
  modalRegistro: any
  ngOnInit(): void {
    this.modalLogin = new window.bootstrap.Modal(
      document.getElementById("login")
    )
    this.modalRegistro = new window.bootstrap.Modal(
      document.getElementById("registro")
    )
    this.load()
  }

  async login() {
    
    await this.authService.login(this.username, this.password)
    
    this.load()
  }

  async Registro() {

  }

  load() {
    
    if (localStorage.getItem("token")) {
      const token:string=String(localStorage.getItem("token"));
      const decoded = jwtDecode<ExtendedJwtPayload>(token!)
      this.authService.getUserName(decoded['sub'], token).subscribe(
        e=>{
          this.nombreUsuario=e
        }
      )
      this.loginData = true
      this.cerrarModal()
    } else {
      this.loginData = false
    }
  }

  cerrarModal() {
    this.modalLogin.hide();
    this.modalRegistro.hide();

  }

  seccionAdmin() {
    const userString = localStorage.getItem('token');
    if (userString) {
      const decoded = jwtDecode<ExtendedJwtPayload>(userString!);
      if (decoded.rol == "ROLE_ADMIN") {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  cerrarSession(){
    localStorage.removeItem('token')
    this.loginData = false
  }
}
