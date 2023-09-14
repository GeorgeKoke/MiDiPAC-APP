import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioSearchComponent } from './usuario-search.component';

describe('UsuarioSearchComponent', () => {
  let component: UsuarioSearchComponent;
  let fixture: ComponentFixture<UsuarioSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioSearchComponent]
    });
    fixture = TestBed.createComponent(UsuarioSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
