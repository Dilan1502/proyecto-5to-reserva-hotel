import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoginUserComponent } from './no-login-user.component';

describe('NoLoginUserComponent', () => {
  let component: NoLoginUserComponent;
  let fixture: ComponentFixture<NoLoginUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoLoginUserComponent]
    });
    fixture = TestBed.createComponent(NoLoginUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
