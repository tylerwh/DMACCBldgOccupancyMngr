import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupantsListComponent } from './occupants-list.component';

describe('OccupantsListComponent', () => {
  let component: OccupantsListComponent;
  let fixture: ComponentFixture<OccupantsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccupantsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
