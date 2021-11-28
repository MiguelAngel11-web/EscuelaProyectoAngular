import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfaltasComponent } from './verfaltas.component';

describe('VerfaltasComponent', () => {
  let component: VerfaltasComponent;
  let fixture: ComponentFixture<VerfaltasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerfaltasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerfaltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
