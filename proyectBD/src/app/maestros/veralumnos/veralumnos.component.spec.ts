import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeralumnosComponent } from './veralumnos.component';

describe('VeralumnosComponent', () => {
  let component: VeralumnosComponent;
  let fixture: ComponentFixture<VeralumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeralumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeralumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
