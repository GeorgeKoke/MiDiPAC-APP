import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaCardComponent } from './entrega-card.component';

describe('EntregaCardComponent', () => {
  let component: EntregaCardComponent;
  let fixture: ComponentFixture<EntregaCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntregaCardComponent]
    });
    fixture = TestBed.createComponent(EntregaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
