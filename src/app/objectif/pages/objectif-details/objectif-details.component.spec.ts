import { ComponentFixture, TestBed } from '@angular/core/testing';

import { objectifDetailsComponent } from './objectif-details.component';

describe('objectifDetailsComponent', () => {
  let component: objectifDetailsComponent;
  let fixture: ComponentFixture<objectifDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ objectifDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(objectifDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
