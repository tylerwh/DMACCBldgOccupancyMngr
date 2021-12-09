import { Component, OnInit } from '@angular/core';
import {OccupantServiceService} from "../../services/occupant-service.service";
import {Occupant} from "../../models/occupant";
import {of} from "rxjs";

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent implements OnInit {
  public datasource?: Occupant[];
  public buildingOne: number;
  public buildingTwo: number;
  public buildingThree: number;

  constructor(private occupantService: OccupantServiceService) {
    this.buildingOne = 0;
    this.buildingTwo = 0;
    this.buildingThree = 0;
    this.getAllOccupants();
  }

  ngOnInit(): void {
  }

  ngAfterOnInit(): void{
  }

  private getAllOccupants() {
    this.occupantService.findAll().subscribe(allOccupants => {
      this.datasource = allOccupants;
    });
  }

  private setBuildings() {
    console.log('Made it to setBuildings()');
    this.buildingOne = 0;
    this.buildingTwo = 0;
    this.buildingThree = 0;

    if(this.datasource) {
      console.log('Hello')
      for (let occ of this.datasource) {
        console.log(`Building Num: ${occ.bldgNum}`)
        switch(occ.bldgNum) {
          case 1:
            this.buildingOne++;
            break;
          case 2:
            this.buildingTwo++;
            break;
          case 3:
            this.buildingThree++;
            break;
          default:
            break;
        }
      }
    }

  }

  getBuildings() {
    this.setBuildings();
  }
}
