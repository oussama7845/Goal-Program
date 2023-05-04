import { ComponentFixture, TestBed } from '@angular/core/testing';

import { programmeComponent } from './programme.component';

describe('programmeComponent', () => {
  let component: programmeComponent;
  let fixture: ComponentFixture<programmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ programmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(programmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
