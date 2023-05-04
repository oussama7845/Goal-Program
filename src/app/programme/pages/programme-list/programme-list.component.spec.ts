import { ComponentFixture, TestBed } from '@angular/core/testing';

import { programmeListComponent } from './programme-list.component';

describe('programmeListComponent', () => {
  let component: programmeListComponent;
  let fixture: ComponentFixture<programmeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ programmeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(programmeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
