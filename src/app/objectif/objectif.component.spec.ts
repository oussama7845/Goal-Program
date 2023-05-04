import { ComponentFixture, TestBed } from '@angular/core/testing';

import { objectifComponent } from './objectif.component';

describe('objectifComponent', () => {
  let component: objectifComponent;
  let fixture: ComponentFixture<objectifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ objectifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(objectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
