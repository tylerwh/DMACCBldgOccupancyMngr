import { Component, OnInit } from '@angular/core';
import {OccupantServiceService} from "../../services/occupant-service.service";
import {Occupant} from "../../models/occupant";

@Component({
  selector: 'app-home-tab-group',
  templateUrl: './home-tab-group.component.html',
  styleUrls: ['./home-tab-group.component.css']
})
export class HomeTabGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
