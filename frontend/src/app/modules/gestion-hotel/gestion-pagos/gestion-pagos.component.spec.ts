import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPagosComponent } from './gestion-pagos.component';

describe('GestionPagosComponent', () => {
  let component: GestionPagosComponent;
  let fixture: ComponentFixture<GestionPagosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionPagosComponent]
    });
    fixture = TestBed.createComponent(GestionPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});