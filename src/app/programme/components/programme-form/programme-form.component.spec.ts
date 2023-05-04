import { ComponentFixture, TestBed } from '@angular/core/testing';

import { programmeFormComponent } from './programme-form.component';

describe('programmeFormComponent', () => {
  let component: programmeFormComponent;
  let fixture: ComponentFixture<programmeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ programmeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(programmeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
