import { Component, OnInit } from '@angular/core';
import {Occupant} from "../../models/occupant";
import {OccupantServiceService} from "../../services/occupant-service.service";

@Component({
  selector: 'app-occupant-form',
  templateUrl: './occupant-form.component.html',
  styleUrls: ['./occupant-form.component.css']
})
export class OccupantFormComponent implements OnInit {

  occ: Occupant;

  constructor(private occupantService : OccupantServiceService) {
    this.occ = {
      id : 0,
      fname : "",
      lname : "",
      bldgNum : 0
    };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.occupantService.save(this.occ).subscribe(result => console.log(result));
  }

}
