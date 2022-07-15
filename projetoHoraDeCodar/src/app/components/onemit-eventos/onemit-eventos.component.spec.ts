import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnemitEventosComponent } from './onemit-eventos.component';

describe('OnemitEventosComponent', () => {
  let component: OnemitEventosComponent;
  let fixture: ComponentFixture<OnemitEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnemitEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnemitEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
