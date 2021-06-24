import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalenPizasComponent } from './salen-pizas.component';

describe('SalenPizasComponent', () => {
  let component: SalenPizasComponent;
  let fixture: ComponentFixture<SalenPizasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalenPizasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalenPizasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
