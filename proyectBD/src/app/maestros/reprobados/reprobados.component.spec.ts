import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprobadosComponent } from './reprobados.component';

describe('ReprobadosComponent', () => {
  let component: ReprobadosComponent;
  let fixture: ComponentFixture<ReprobadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReprobadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprobadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
