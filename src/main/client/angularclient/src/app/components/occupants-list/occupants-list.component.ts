import { Component, OnInit } from '@angular/core';
import {Occupant} from "../../models/occupant";
import {OccupantServiceService} from "../../services/occupant-service.service";

@Component({
  selector: 'app-occupants-list',
  templateUrl: './occupants-list.component.html',
  styleUrls: ['./occupants-list.component.css']
})
export class OccupantsListComponent implements OnInit {
  public datasource?: Occupant[];

  constructor(private occupantService: OccupantServiceService) {
    this.getAllOccupants();
  }

  ngOnInit(): void {
  }

  private getAllOccupants() {
    this.occupantService.findAll().subscribe(allOccupants => {
      this.datasource = allOccupants;
    });
  }
}
