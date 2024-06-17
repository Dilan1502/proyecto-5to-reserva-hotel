import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';

@Component({
  selector: 'app-gestion-hotel',
  templateUrl: './gestion-hotel.component.html',
  styleUrls: ['./gestion-hotel.component.css']
})
export class GestionHotelComponent implements OnInit {
  itemsPerPage = 1; 
  currentPage = 1;  
  totalItems = 100;  
  items: any[] = []; 

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    // Aquí cargarías los elementos reales, posiblemente desde un servicio
    this.items = Array.from({ length: this.totalItems }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
      description: `Description for item ${i + 1}`
    }));
  }

  get paginatedItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.items.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }

  cargaUsuarios(){
    this.apiService.get('api/user/').subscribe(
      e=>{

        this.items=e
        this.totalItems=e.length
      }
    )
  }

  cargahabitacion(){
    this.apiService.get('habitaciones/').subscribe(
      e=>{

        this.items=e
        this.totalItems=e.length
      }
    )
  }
  cargapagos(){
    this.apiService.get('pagos/').subscribe(
      e=>{

        this.items=e
        this.totalItems=e.length
      }
    )
  }

  cargareservas(){
    this.apiService.get('reservas/').subscribe(
      e=>{
        console.log(e)
        this.items=e
        this.totalItems=e.length
      }
    )
  }

  
}
