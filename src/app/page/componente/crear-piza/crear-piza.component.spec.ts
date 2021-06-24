import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPizaComponent } from './crear-piza.component';

describe('CrearPizaComponent', () => {
  let component: CrearPizaComponent;
  let fixture: ComponentFixture<CrearPizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
