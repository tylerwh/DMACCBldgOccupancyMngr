import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOccupantDialogComponent } from './add-occupant-dialog.component';

describe('AddOccupantDialogComponent', () => {
  let component: AddOccupantDialogComponent;
  let fixture: ComponentFixture<AddOccupantDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOccupantDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOccupantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
