import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarPizaComponent } from './borrar-piza.component';

describe('BorrarPizaComponent', () => {
  let component: BorrarPizaComponent;
  let fixture: ComponentFixture<BorrarPizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarPizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarPizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
