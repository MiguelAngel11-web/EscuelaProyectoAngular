import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalifComponent } from './calif.component';

describe('CalifComponent', () => {
  let component: CalifComponent;
  let fixture: ComponentFixture<CalifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
