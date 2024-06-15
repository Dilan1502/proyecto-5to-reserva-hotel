import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionHabitacionesComponent } from './gestion-habitaciones.component';

describe('GestionHabitacionesComponent', () => {
  let component: GestionHabitacionesComponent;
  let fixture: ComponentFixture<GestionHabitacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionHabitacionesComponent]
    });
    fixture = TestBed.createComponent(GestionHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
