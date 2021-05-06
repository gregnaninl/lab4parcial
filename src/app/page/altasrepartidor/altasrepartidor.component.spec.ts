import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltasrepartidorComponent } from './altasrepartidor.component';

describe('AltasrepartidorComponent', () => {
  let component: AltasrepartidorComponent;
  let fixture: ComponentFixture<AltasrepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltasrepartidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltasrepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
