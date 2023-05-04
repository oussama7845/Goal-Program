import { ComponentFixture, TestBed } from '@angular/core/testing';

import { objectifFormComponent } from './objectif-form.component';

describe('objectifFormComponent', () => {
  let component: objectifFormComponent;
  let fixture: ComponentFixture<objectifFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ objectifFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(objectifFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
