import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPizzaComponent } from './listar-pizza.component';

describe('ListarPizzaComponent', () => {
  let component: ListarPizzaComponent;
  let fixture: ComponentFixture<ListarPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
