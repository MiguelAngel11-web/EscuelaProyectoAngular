import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerextraComponent } from './verextra.component';

describe('VerextraComponent', () => {
  let component: VerextraComponent;
  let fixture: ComponentFixture<VerextraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerextraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerextraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
