import { ComponentFixture, TestBed } from '@angular/core/testing';

import { programmeDetailsComponent } from './programme-details.component';

describe('programmeDetailsComponent', () => {
  let component: programmeDetailsComponent;
  let fixture: ComponentFixture<programmeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ programmeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(programmeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
