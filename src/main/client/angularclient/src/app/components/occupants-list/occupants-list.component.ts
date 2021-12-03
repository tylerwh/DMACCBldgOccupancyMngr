import { Component, OnInit } from '@angular/core';
import {Occupant} from "../../models/occupant";
import {OccupantServiceService} from "../../services/occupant-service.service";
import {MatDialog} from "@angular/material/dialog";
import {AddOccupantDialogComponent} from "../add-occupant-dialog/add-occupant-dialog.component";

@Component({
  selector: 'app-occupants-list',
  templateUrl: './occupants-list.component.html',
  styleUrls: ['./occupants-list.component.css']
})
export class OccupantsListComponent implements OnInit {
  public datasource?: Occupant[];

  constructor(private occupantService: OccupantServiceService,
              public dialog : MatDialog) {
    this.getAllOccupants();
  }

  ngOnInit(): void {
  }

  private getAllOccupants() {
    this.occupantService.findAll().subscribe(allOccupants => {
      this.datasource = allOccupants;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddOccupantDialogComponent, {
      height: "300px",
      width: "300px",
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })

  }
}
