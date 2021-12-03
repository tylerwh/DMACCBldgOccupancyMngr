import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GetOccupantsResponse, Occupant} from "../models/occupant";

@Injectable({
  providedIn: 'root'
})
export class OccupantServiceService {
  private occupantsUrl: string;
  // private occs: Occupant[] = [
  //   {
  //     id: 1,
  //     fname: "Jake",
  //     lname: "Newman"
  //   },
  //   {
  //     id: 2,
  //     fname: "Blake",
  //     lname: "Oldman"
  //   }
  // ];

  constructor(private http: HttpClient) {
    this.occupantsUrl = 'http://localhost:8080';
  }

  // public findAll(): Observable<GetOccupantsResponse>{
  //   return this.http.get<GetOccupantsResponse>(this.occupantsUrl + "/occupants");
  // }

  // public findAll(): Occupant[] {
  //   return this.occs;
  // }

  public findAll(): Observable<Occupant[]> {
    return this.http.get<Occupant[]>(this.occupantsUrl + "/occupants");
  }

  public save(newOccupant: Occupant) {
    return this.http.post<Occupant>(this.occupantsUrl, newOccupant);
  }
}
