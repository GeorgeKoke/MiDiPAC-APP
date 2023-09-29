import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEntregaComponent } from './registro-entrega.component';

describe('RegistroEntregaComponent', () => {
  let component: RegistroEntregaComponent;
  let fixture: ComponentFixture<RegistroEntregaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroEntregaComponent]
    });
    fixture = TestBed.createComponent(RegistroEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
