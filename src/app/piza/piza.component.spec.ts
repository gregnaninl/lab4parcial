import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizaComponent } from './piza.component';

describe('PizaComponent', () => {
  let component: PizaComponent;
  let fixture: ComponentFixture<PizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
