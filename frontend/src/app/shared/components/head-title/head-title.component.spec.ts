import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadTitleComponent } from './head-title.component';

describe('HeadTitleComponent', () => {
  let component: HeadTitleComponent;
  let fixture: ComponentFixture<HeadTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadTitleComponent]
    });
    fixture = TestBed.createComponent(HeadTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
