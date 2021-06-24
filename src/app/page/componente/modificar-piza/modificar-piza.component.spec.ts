import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPizaComponent } from './modificar-piza.component';

describe('ModificarPizaComponent', () => {
  let component: ModificarPizaComponent;
  let fixture: ComponentFixture<ModificarPizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
